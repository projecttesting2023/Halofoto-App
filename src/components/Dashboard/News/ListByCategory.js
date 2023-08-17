import { useIsFocused, useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import newsListByCategory, { clearNewsListByCategory } from '../../../context/actions/dashboard/newsListByCategory'
import { GlobalContext } from '../../../context/Provider'
import { showNavigation } from "../../../context/actions/common/manageNavigation"
import NewsListByCategoryScreen from '../../../screens/Dashboard/News/NewsList/NewsListByCategory'
import { Alert } from 'react-native'
import StaticText from '../../../global/StaticText'

const ListByCategory = ({ route, navigation }) => {
    const { newsListByCategoryState: { data, error, loading }, newsListByCategoryDispatch, navigationDispatch, navigationState: { display } } = useContext(GlobalContext)
    const { navigate, goBack } = useNavigation()
    // const [yAxisValue, setYAxisValue] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [refreshing, setRefreshing] = useState(false)
    const [pagination, setPagination] = useState(false)
    const [newsData, setNewsData] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const { categorySlug, categoryName } = route.params
    const onPress = (routes, params) => routes && params ? navigate(routes, params) : routes ? navigate(routes) : goBack()
    const isFocused = useIsFocused()

    useEffect(() => {
        isFocused && showNavigation()(navigationDispatch)
    }, [isFocused])

    useEffect(() => {
        error?.message?.length &&
            Alert.alert(StaticText.alert.error_heading, error?.message, [
                { text: StaticText.button.ok, onPress: () => { } },
            ])
    }, [error])

    useEffect(() => {
        let params = {
            page: currentPage,
            categgory: categorySlug,
            show_popular: false,
            show_latest: false,
        }
        newsListByCategory(params)(newsListByCategoryDispatch)
        if (currentPage > 1 && !pagination) {
            setPagination(true)
        } else if (currentPage == 1) {
            setPagination(false)
        }
        return (() => { })
    }, [currentPage])

    useEffect(() => {
        if (!loading && data?.news) {
            if (currentPage == 1) {
                setNewsData(data?.news?.data)
            } else {
                setNewsData(newsData => [...newsData, ...data?.news?.data])
            }
            setTotalPages(data.news.last_page)
        }
        if (refreshing && !loading) {
            setRefreshing(false)
        }
        return (() => { })
    }, [loading])

    const onEndReached = () => {
        if (currentPage < totalPages && !loading) {
            setCurrentPage(currentPage => currentPage + 1)
        }
    }

    const onRefresh = () => {
        if (currentPage > 1) {
            setRefreshing(true)
            setCurrentPage(1)
        }
    }

    return (
        <NewsListByCategoryScreen
            newsData={newsData}
            data={data}
            loading={pagination || refreshing ? false : loading}
            isLoading={loading}
            onPress={onPress}
            onRefresh={onRefresh}
            refreshing={refreshing}
            onEndReached={onEndReached}
            categoryName={categoryName}
            
        />
    )
}

export default ListByCategory