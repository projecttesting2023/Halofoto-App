import { DASHBOARD_BANNER_SUCCESS, DASHBOARD_BANNER_FAIL, DASHBOARD_BANNER_LOADING } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default () => dispatch => {
    dispatch({
        type: DASHBOARD_BANNER_LOADING
    })
    axiosInstance.get('/mobile/dashboard').then(res => {
       
        dispatch({
            type: DASHBOARD_BANNER_SUCCESS,
            payload: res?.data?.banners,
        })
    }).catch(err => {
     
        dispatch({
            type: DASHBOARD_BANNER_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}