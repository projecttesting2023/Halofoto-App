import { REDEMPTION_CENTRE_DETAIL_SUCCESS, REDEMPTION_CENTRE_DETAIL_LOADING, REDEMPTION_CENTRE_DETAIL_FAIL } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default (voucherId) => dispatch => {
    dispatch({
        type: REDEMPTION_CENTRE_DETAIL_LOADING
    })

    axiosInstance.get(`/mobile/voucher-details/${voucherId}`).then(res => {
        dispatch({
            type: REDEMPTION_CENTRE_DETAIL_SUCCESS,
            payload: res.data,
        })
    }).catch(err => {
        dispatch({
            type: REDEMPTION_CENTRE_DETAIL_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}