import { MY_PRODUCT_REVIEW_SUBMIT_SUCCESS, MY_PRODUCT_REVIEW_SUBMIT_LOADING, MY_PRODUCT_REVIEW_SUBMIT_FAIL, CLEAR_MY_PRODUCT_REVIEW_STATE } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export const clearReviewSubmitState = () => dispatch => {
    dispatch({
        type: CLEAR_MY_PRODUCT_REVIEW_STATE,
    })
}

export default (
    productId,
    serialId,
    rating,
    manageType
) => dispatch => onSuccess => {

    dispatch({
        type: MY_PRODUCT_REVIEW_SUBMIT_LOADING
    })

    let formData = new FormData(),
        url = ``

    formData.append('rating', rating)
    url = (manageType == `add-review`) ? `/mobile/${manageType}/${productId}/${serialId}` : `/mobile/${manageType}/${productId}`

    axiosInstance.post(url, formData).then(res => {
        dispatch({
            type: MY_PRODUCT_REVIEW_SUBMIT_SUCCESS,
            payload: res.data,
        })
        onSuccess(res.data)
    }).catch(err => {
        dispatch({
            type: MY_PRODUCT_REVIEW_SUBMIT_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}