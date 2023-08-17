import { COUNTRYLIST_SUCCESS, COUNTRYLIST_FAIL, COUNTRYLIST_LOADING } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default () => dispatch => onSuccess =>  {  

    dispatch({
        type: COUNTRYLIST_LOADING
    })          

    axiosInstance.get('/mobile/list-country').then(res => {  
        dispatch({
            type: COUNTRYLIST_SUCCESS,
            payload: res.data.countries,
        })
        onSuccess(res.data.countries)
    }).catch(err => { 
        dispatch({
            type: COUNTRYLIST_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}