import { WARRANTY_REGISTER_STEP_SECOND_SUCCESS, WARRANTY_REGISTER_STEP_SECOND_FAIL, WARRANTY_REGISTER_STEP_SECOND_LOADING } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default (warrantyId, form) => dispatch => onSuccess => {
    dispatch({
        type: WARRANTY_REGISTER_STEP_SECOND_LOADING
    })

    let { invoice } = form
    let formData = new FormData()
  
    formData.append('invoice', { uri: invoice.uri, name: invoice.name, type: invoice.mimeType })
    axiosInstance.post(`/mobile/register-product-step-2/${warrantyId}`, formData).then(res => {
        dispatch({
            type: WARRANTY_REGISTER_STEP_SECOND_SUCCESS,
            payload: res.data,
        })
        onSuccess(res.data)
    }).catch(err => {
        dispatch({
            type: WARRANTY_REGISTER_STEP_SECOND_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}