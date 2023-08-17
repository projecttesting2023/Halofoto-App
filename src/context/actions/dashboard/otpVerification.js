import AsyncStorage from "@react-native-async-storage/async-storage"
import { OTP_VERIFY_SUCCESS, OTP_VERIFY_FAIL, OTP_VERIFY_LOADING } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'
import Toast from "react-native-root-toast";

export default (enteredPin) => dispatch => onSuccess => {
    dispatch({
        type: OTP_VERIFY_LOADING
    })

    //console.log(enteredPin,'enteredPin')
    let formData = new FormData()
    formData.append('otp', enteredPin)

    axiosInstance.post('/mobile/update-otp-status', formData).then(res => {
        //console.log(res.data,'response from otpverification api')
        if(res.data.status == 1){
            AsyncStorage.removeItem("user")
            AsyncStorage.setItem("user", JSON.stringify(res?.data?.user))
            dispatch({
                type: OTP_VERIFY_SUCCESS,
                payload: res?.data?.user,
            })
    
            onSuccess(res.data)
        }else if(res.data.status == 0){
            Toast.show(StaticText.alert.otp_invalid)
        }
        
    }).catch(err => {
        dispatch({
            type: OTP_VERIFY_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}