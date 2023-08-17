import { SETTINGS_LOADING, SETTINGS_SUCCESS, SETTINGS_FAIL } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from "../../../global/StaticText"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default ({ sound = '', channel_id = '' }) => dispatch => onSuccess => {
    dispatch({
        type: SETTINGS_LOADING
    })

    let formData = new FormData()
    formData.append('notification_sound', !!sound ? sound : '')
    formData.append('notification_channel_id', !!channel_id ? channel_id : '')
    
    axiosInstance.post('/mobile/sound-settings', formData).then(res => {
        AsyncStorage.removeItem("user")
        AsyncStorage.setItem("user", JSON.stringify(res.data.user))
        dispatch({
            type: SETTINGS_SUCCESS,
            payload: res.data,
        })
        onSuccess(res.data)
    }).catch(err => {
        dispatch({
            type: SETTINGS_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error }
        })
    })
}