import { PRODUCT_CATALOG_DETAILS_LOADING, PRODUCT_CATALOG_DETAILS_SUCCESS, PRODUCT_CATALOG_DETAILS_FAIL } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default (productId) => dispatch => {
    dispatch({
        type: PRODUCT_CATALOG_DETAILS_LOADING
    })

    axiosInstance.get(`/mobile/product/${productId}`).then(res => {
        dispatch({
            type: PRODUCT_CATALOG_DETAILS_SUCCESS,
            payload: res.data,
        })
    }).catch(err => {
        dispatch({
            type: PRODUCT_CATALOG_DETAILS_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}