import { CHECK_REFERRER_SUCCESS, CHECK_REFERRER_FAIL, CHECK_REFERRER_LOADING } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default ({ referral_code }) => dispatch => onSuccess => {
    dispatch({
        type: CHECK_REFERRER_LOADING
    })
    let formData = new FormData()
    formData.append('referral_code', referral_code)
    axiosInstance.post('/mobile/referral', formData).then(res => {
        dispatch({
            type: CHECK_REFERRER_SUCCESS,
            payload: res.data,
        })

        onSuccess(res.data)
    }).catch(err => {
        dispatch({
            type: CHECK_REFERRER_FAIL,
            payload: err.response ? err.response.data.error : { error: StaticText.axios.error },
        })
    })
}