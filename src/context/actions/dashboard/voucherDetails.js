import { VOUCHER_DETAILS_SUCCESS, VOUCHER_DETAILS_LOADING, VOUCHER_DETAILS_FAIL } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default (voucherId) => dispatch => {
    dispatch({
        type: VOUCHER_DETAILS_LOADING
    })

    axiosInstance.get(`/mobile/voucher-details/${voucherId}`).then(res => {
        dispatch({
            type: VOUCHER_DETAILS_SUCCESS,
            payload: res.data,
        })
    }).catch(err => {
        dispatch({
            type: VOUCHER_DETAILS_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}