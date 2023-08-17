import { SERIAL_NUMBER_SUCCESS, SERIAL_NUMBER_FAIL, SERIAL_NUMBER_LOADING } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default (serialNo) => dispatch => {
    dispatch({
        type: SERIAL_NUMBER_LOADING
    })

    axiosInstance.get(`/mobile/product/check-product-serial/${serialNo}`).then(res => {
        dispatch({
            type: SERIAL_NUMBER_SUCCESS,
            payload: res.data.product,
        })
    }).catch(err => {
        dispatch({
            type: SERIAL_NUMBER_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}