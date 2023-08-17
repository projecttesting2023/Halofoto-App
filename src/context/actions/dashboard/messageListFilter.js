import { MESSAGE_LIST_FILTER_SUCCESS, MESSAGE_LIST_FILTER_FAIL, MESSAGE_LIST_FILTER_LOADING } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default () => dispatch => {
    dispatch({
        type: MESSAGE_LIST_FILTER_LOADING
    })

    axiosInstance.get(`/mobile/message-categories`).then(res => { 
        dispatch({
            type: MESSAGE_LIST_FILTER_SUCCESS,
            payload: res.data,
            
        })
    }).catch(err => {
        dispatch({
            type: MESSAGE_LIST_FILTER_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}