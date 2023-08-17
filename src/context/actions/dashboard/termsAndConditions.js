import { TERMS_AND_CONDITIONS_LOADING, TERMS_AND_CONDITIONS_SUCCESS, TERMS_AND_CONDITIONS_FAIL } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from "../../../global/StaticText"

export default () => dispatch => {
    dispatch({
        type: TERMS_AND_CONDITIONS_LOADING
    })

    axiosInstance.get ('/page/terms-conditions').then(res=> {
       
        dispatch({
            type: TERMS_AND_CONDITIONS_SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        dispatch({
            type: TERMS_AND_CONDITIONS_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error}
        })
    })
}