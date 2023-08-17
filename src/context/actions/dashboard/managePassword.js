import { MY_PROFILE_PASSWORD_UPDATE_LOADING, MY_PROFILE_PASSWORD_UPDATE_SUCCESS, MY_PROFILE_PASSWORD_UPDATE_FAIL } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from "../../../global/StaticText"

export default ({
    password,
    new_password,
    confirm_password,
}) => dispatch => onSuccess => {
    dispatch({
        type: MY_PROFILE_PASSWORD_UPDATE_LOADING
    })

    let formData = new FormData()
    formData.append('password', password)
    formData.append('new_password', new_password)
    formData.append('confirm_password', confirm_password)
 
    axiosInstance.post('/mobile/update-password', formData).then(res => {
       
        dispatch({
            type: MY_PROFILE_PASSWORD_UPDATE_SUCCESS,
            payload: res.data,
        })
        onSuccess(res.data)
    }).catch(err => {
       
        dispatch({
            type: MY_PROFILE_PASSWORD_UPDATE_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error }
        })
    })
}