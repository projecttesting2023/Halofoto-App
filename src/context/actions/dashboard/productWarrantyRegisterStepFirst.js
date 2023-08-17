import { WARRANTY_REGISTER_STEP_FIRST_SUCCESS, WARRANTY_REGISTER_STEP_FIRST_FAIL, WARRANTY_REGISTER_STEP_FIRST_LOADING, CLEAR_WARRANTY_REGISTER_STEP_FIRST } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'


export const clearProductWarrantyRegisterStepFirst = () => dispatch => {
    dispatch({
        type: CLEAR_WARRANTY_REGISTER_STEP_FIRST,
    })
}

export default ({
    model_no,
    serial_no,
    date_of_purchase,
    seller_name
}) => dispatch => onSuccess => {

    dispatch({
        type: WARRANTY_REGISTER_STEP_FIRST_LOADING
    })

    let formData = new FormData()
    formData.append('model_no', model_no)
    formData.append('serial_no', serial_no)
    formData.append('date_of_purchase', date_of_purchase)
    formData.append('seller_name', seller_name)

    axiosInstance.post('/mobile/register-product-step-1', formData).then(res => {
        dispatch({
            type: WARRANTY_REGISTER_STEP_FIRST_SUCCESS,
            payload: res.data,
        })
       onSuccess(res.data)
    }).catch(err => {        
        dispatch({
            type: WARRANTY_REGISTER_STEP_FIRST_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}