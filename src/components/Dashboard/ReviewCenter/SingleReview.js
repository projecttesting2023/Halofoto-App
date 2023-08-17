import React, { useContext, useEffect, useState, useRef } from "react"
import { useIsFocused } from "@react-navigation/native"
import Toast from 'react-native-root-toast'

import { GlobalContext } from "../../../context/Provider"
import SingleReviewScreen from "../../../screens/Dashboard/ReviewCenter/SingleReview"
import myProductDetails from "../../../context/actions/dashboard/myProductDetails"
import productReviewSubmit, { clearReviewSubmitState } from "../../../context/actions/dashboard/productReviewSubmit"
import { showNavigation } from "../../../context/actions/common/manageNavigation"
import { Alert } from "react-native"
import StaticText from "../../../global/StaticText"

const SingleReview = ({ route, navigation }) => {
    const isFocused = useIsFocused()
    const { warrantyId } = route.params
    const {
        myProductDetailsState: { error, loading, data },
        myProductDetailsDispatch,
        navigationDispatch, navigationState: { display },
        productReviewSubmitState: { reviewError, reviewLoading, reviewData }, productReviewSubmitDispatch
    } = useContext(GlobalContext)

    const [starRating, setStarRating] = useState(0)

    const onPress = route => route ? navigation.navigate(route, { warrantyId }) : navigation.goBack()

    useEffect(() => {
        isFocused && (
            clearReviewSubmitState()(productReviewSubmitDispatch),
            showNavigation()(navigationDispatch),
            myProductDetails(warrantyId)(myProductDetailsDispatch)
        )
    }, [isFocused])

    useEffect(() => {
        reviewError?.message?.length &&
            Alert.alert(StaticText.alert.error_heading, reviewError?.message, [
                { text: StaticText.button.ok, onPress: () => { } },
            ])
    }, [reviewError])

    useEffect(() => {
        !loading && data?.product_rating?.rating && data?.product_rating?.rating > 0 && data?.product_rating?.user_warrenty_id == warrantyId && setStarRating(data?.product_rating?.rating)
    }, [loading])

    const submitReview = () => {
        if (typeof data?.product_rating?.rating != 'undefined' && data?.product_rating?.rating > 0 && data?.product_rating?.user_warrenty_id == warrantyId) {
            productReviewSubmit(data?.product_rating?.id, '', starRating, 'update-review')(productReviewSubmitDispatch)(response => {
                Toast.show(response?.message)
            })
        } else {
            productReviewSubmit(data?.product?.product_serials?.product_id, data?.product?.product_serials?.id, starRating, 'add-review')(productReviewSubmitDispatch)(response => {
                Toast.show(response?.message)
            })
        }
    }

    return (
        <SingleReviewScreen
            data={data}
            loading={loading}
            starRating={starRating}
            setStarRating={setStarRating}
            submitReview={submitReview}
            reviewLoading={reviewLoading}
            reviewData={reviewData}
            onPress={onPress}
            warrantyId={warrantyId}
        />
    )
}

export default SingleReview