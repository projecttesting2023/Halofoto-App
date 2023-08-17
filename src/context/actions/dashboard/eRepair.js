import { E_REPAIR_SUCCESS, E_REPAIR_FAIL, E_REPAIR_LOADING } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default ({
    subject,
    message
},warrantyId) => dispatch => onSuccess=> {

    dispatch({
        type: E_REPAIR_LOADING
    })
    
    let formData = new FormData()
    formData.append('subject', subject)
    formData.append('message', message)
    formData.append('warrenty_id', warrantyId)

    axiosInstance.post('/mobile/request-e-repair', formData).then(res => {
         dispatch({
            type: E_REPAIR_SUCCESS,
            payload: res.data,
        })
        onSuccess(res.data)
    }).catch(err => {

        dispatch({
            type: E_REPAIR_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}