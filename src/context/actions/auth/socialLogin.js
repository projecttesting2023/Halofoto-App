import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_LOADING, CLEAR_AUTH_STATE } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export const clearAuthState = () => dispatch => {
    dispatch({
        type: CLEAR_AUTH_STATE,
    })
}

export default ({
    email,
    name,
    profile_image,
    logon_type,
    notification_token,
    social_login_id
}) => dispatch => {

    dispatch({
        type: LOGIN_LOADING
    })

    let formData = new FormData()
    formData.append('email', email)
    formData.append('name', name)
    formData.append('profile_image', profile_image)
    formData.append('logon_type', logon_type)
    formData.append('notification_token', notification_token)
    formData.append('social_login_id', social_login_id)
    //console.log(formData,'formData')
    axiosInstance.post('/mobile/social-login', formData).then(res => {
        
        AsyncStorage.removeItem("user")
        AsyncStorage.removeItem("token")
        AsyncStorage.removeItem("otp")
        
        AsyncStorage.setItem("token", res.data.token)
        AsyncStorage.setItem("user", JSON.stringify(res.data.user))
        AsyncStorage.setItem("otp", JSON.stringify(res?.data?.otp ? res?.data?.otp : null))
        console.log(res,'response from sociallogin api page')
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        })
    }).catch(err => {
        console.log(err,'error page')
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}