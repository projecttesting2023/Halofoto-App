import { RESET_PASSWORD_LOADING, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL, CLEAR_RESET_PASSWORD_STATE } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from "../../../global/StaticText"

export const clearResetPasswordState = () => dispatch => onSuccess => {
    dispatch({
        type: CLEAR_RESET_PASSWORD_STATE,
    })
}
export default ({
    new_password,
    confirm_password,
    user_id,
}) => dispatch => onSuccess => {
    dispatch({
        type: RESET_PASSWORD_LOADING
    })

    let formData = new FormData()
    formData.append('new_password', new_password)
    formData.append('confirm_password', confirm_password)
    formData.append('user_id', user_id)

    axiosInstance.post('/mobile/update-forgot-password', formData).then(res => {
        
        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: res.data,
        })
        onSuccess(res.data)

    }).catch(err => {
        
        dispatch({
            type: RESET_PASSWORD_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error }
        })
    })
}