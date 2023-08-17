import React, { useContext, useEffect, useRef, useState } from "react"
import { useIsFocused } from "@react-navigation/core"

import { GlobalContext } from "../../../context/Provider"
import SingleNewsScreen from "../../../screens/Dashboard/News/NewsDetails"
import newsDetails from "../../../context/actions/dashboard/newsDetails"
import { showNavigation } from "../../../context/actions/common/manageNavigation"
import { Alert } from "react-native"
import StaticText from "../../../global/StaticText"

const SingleNews = ({ route, navigation }) => {

    const isFocused = useIsFocused()
    const [newsSlug, setNewsSlug] = useState('')
    const [yAxisValue, setYAxisValue] = useState(0)

    const [videoFirstLoader, showVideoFirstLoader] = useState(false)
    const [videoSecLoader, showVideoSecLoader] = useState(false)

    const sliderRef = useRef()
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const {
        newsDetailState: { error, loading, data },
        newsDetailDispatch,
        navigationDispatch, navigationState: { display }
    } = useContext(GlobalContext)


    const onPress = (routes, params) => {
        if (routes && params && routes == 'News Details') {
            setNewsSlug(params)
        }
        else if (routes && params) {
            navigation.navigate(routes, {
                news_slug: params
            })
        }
        else if (routes) {
            navigation.navigate(routes)
        }
        else {
            navigation.goBack()
        }
    }

    useEffect(() => {
        if (isFocused) {
            let { news_slug } = route.params
            setNewsSlug(news_slug)
            showNavigation()(navigationDispatch)

        }
    }, [isFocused])

    useEffect(() => {
        error?.message?.length &&
            Alert.alert(StaticText.alert.error_heading, error?.message, [
                { text: StaticText.button.ok, onPress: () => { } },
            ])
    }, [error])

    useEffect(() => {
        newsSlug.length && newsDetails(newsSlug)(newsDetailDispatch)
    }, [newsSlug])

    return (
        <SingleNewsScreen
            data={data}
            loading={loading}
            onPress={onPress}
            currentSlideIndex={currentSlideIndex}
            setCurrentSlideIndex={setCurrentSlideIndex}
            sliderRef={sliderRef}
            yAxisValue={yAxisValue}
            setYAxisValue={setYAxisValue}
            showVideoFirstLoader={showVideoFirstLoader}
            showVideoSecLoader={showVideoSecLoader}
            videoFirstLoader={videoFirstLoader}
            videoSecLoader={videoSecLoader}
        />
    )
}
export default SingleNews