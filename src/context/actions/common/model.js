import { MODEL_NUMBER_LIST_SUCCESS, MODEL_NUMBER_LIST_FAIL, MODEL_NUMBER_LIST_LOADING } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default () => dispatch => onSuccess =>  {  

    dispatch({
        type: MODEL_NUMBER_LIST_LOADING
    })          

    axiosInstance.get('/mobile/get-product-models').then(res => {  
     
        dispatch({
            type: MODEL_NUMBER_LIST_SUCCESS,
            payload: res.data,
        })
    }).catch(err => { 

        dispatch({
            type: MODEL_NUMBER_LIST_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}