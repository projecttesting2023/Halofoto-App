import { WARRANTY_REGISTER_MODEL_NO_LOADING, WARRANTY_REGISTER_MODEL_NO_SUCCESS, WARRANTY_REGISTER_MODEL_NO_FAIL } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default () => dispatch => {
    dispatch({
        type: WARRANTY_REGISTER_MODEL_NO_LOADING
    })

    axiosInstance.get(`/mobile/get-product-models`).then(res => {  
        dispatch({
            type: WARRANTY_REGISTER_MODEL_NO_SUCCESS,
            payload: res.data,
        })
    }).catch(err => {
        dispatch({
            type: WARRANTY_REGISTER_MODEL_NO_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}