import { FORGOT_PASSWORD_LOADING, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL, CLEAR_FORGOT_PASSWORD_STATE } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from "../../../global/StaticText"


export const clearForgotPasswordState = () => dispatch => {
    dispatch({
        type: CLEAR_FORGOT_PASSWORD_STATE,
    })
}

export default ({
    phone,
    phone_country_code,
}) => dispatch => onSuccess=> {
    dispatch({
        type: FORGOT_PASSWORD_LOADING
    })
    let formData = new FormData()
    formData.append('phone', `${phone}`)
    formData.append('country_code', phone_country_code?.ext_code)

    axiosInstance.post('/mobile/forgot-password', formData).then(res => {
        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: res.data,
        })
        onSuccess(res.data)

    }).catch(err => {
        
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error }
        })
    })
}