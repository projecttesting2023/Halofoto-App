import { ABOUT_US_LOADING, ABOUT_US_SUCCESS, ABOUT_US_FAIL } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from "../../../global/StaticText"

export default () => dispatch => {
    dispatch({
        type: ABOUT_US_LOADING
    })

    axiosInstance.get ('/page/about-us').then(res=> {
    
        dispatch({
            type: ABOUT_US_SUCCESS,
            payload: res.data.description
        })

    }).catch(err => {
        dispatch({
            type: ABOUT_US_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error}
        })
    })
}