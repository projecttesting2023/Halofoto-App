import { useIsFocused, useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import newsList from '../../../context/actions/dashboard/newsList'
import { GlobalContext } from '../../../context/Provider'
import {showNavigation } from "../../../context/actions/common/manageNavigation"
import NewsListScreen from '../../../screens/Dashboard/News/NewsList'
import StaticText from '../../../global/StaticText'
import { Alert } from 'react-native'

const News = () => {
    const { newsListState: { data, error, loading }, newsListDispatch, navigationDispatch, navigationState: { display } } = useContext(GlobalContext)
    const { navigate, goBack } = useNavigation()
    // const [yAxisValue, setYAxisValue] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [refreshing, setRefreshing] = useState(false)
    const [pagination, setPagination] = useState(false)
    const [newsData, setNewsData] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    const onPress = (route, params) => route ? navigate(route, params) : goBack()
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
            categgory: '',
            show_popular: false,
            show_latest: false,
        }
        newsList(params)(newsListDispatch)
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
        <NewsListScreen
            newsData={newsData}
            data={data}
            loading={pagination || refreshing ? false : loading}
            isLoading={loading}
            onPress={onPress}
            onRefresh={onRefresh}
            refreshing={refreshing}
            onEndReached={onEndReached}
            
        />
    )
}

export default News