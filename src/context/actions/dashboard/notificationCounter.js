import { MY_COUNTER_SUCCESS, MY_COUNTER_LOADING, MY_COUNTER_FAIL } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default () => dispatch =>  {
    dispatch({
        type: MY_COUNTER_LOADING
    })
    axiosInstance.get(`/mobile/unread-message`).then(res => {
        //console.log(res.data,'conter data')
        dispatch({
            type: MY_COUNTER_SUCCESS,
            payload: res.data.unread_message,
        })

    }).catch(err => {
       
        dispatch({
            type: MY_COUNTER_FAIL,
            payload: err.response ? err.response.data : { conterError: StaticText.axios.error },
        })
    })
}