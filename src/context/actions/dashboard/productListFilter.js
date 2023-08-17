import { PRODUCT_LIST_FILTER_SUCCESS, PRODUCT_LIST_FILTER_FAIL, PRODUCT_LIST_FILTER_LOADING } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default () => dispatch => {
    dispatch({
        type: PRODUCT_LIST_FILTER_LOADING
    })

    axiosInstance.get(`/mobile/product-list-filters`).then(res => { 
        dispatch({
            type: PRODUCT_LIST_FILTER_SUCCESS,
            payload: res.data,
            
        })
    }).catch(err => {
        dispatch({
            type: PRODUCT_LIST_FILTER_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}