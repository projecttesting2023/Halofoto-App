import { MY_PROFILE_IMAGE_UPDATE_SUCCESS, MY_PROFILE_IMAGE_UPDATE_LOADING, MY_PROFILE_IMAGE_UPDATE_FAIL, CLEAR_PROFILE_IMAGE_UPDATE } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from "../../../global/StaticText"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const clearProfileImage= () => dispatch => {
    dispatch({
        type: CLEAR_PROFILE_IMAGE_UPDATE,
    })
}

export default (form) => dispatch => onSuccess => {
    dispatch({
        type: MY_PROFILE_IMAGE_UPDATE_LOADING
    })
    
    let { profile_image } = form
    let formData = new FormData()
    formData.append('profile_image', { uri: profile_image?.uri, name: profile_image?.name, type: profile_image?.mimeType })
    
    axiosInstance.post('/mobile/update-profile-image', formData).then(res => {
      
        AsyncStorage.removeItem("user")
        AsyncStorage.setItem("user", JSON.stringify(res.data.user))
        dispatch({
            type: MY_PROFILE_IMAGE_UPDATE_SUCCESS,
            payload: res.data,
        })
        onSuccess(res.data)
    }).catch(err => {
      
        dispatch({
            type: MY_PROFILE_IMAGE_UPDATE_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error }
        })
    })
}