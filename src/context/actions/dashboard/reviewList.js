import { REVIEW_LIST_LOADING, REVIEW_LIST_SUCCESS, REVIEW_LIST_FAIL } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from "../../../global/StaticText"

export default ({
    page,
}) => dispatch => {
    dispatch({
        type: REVIEW_LIST_LOADING
    })
    
    axiosInstance.get(`/mobile/review-list?page=${page}`).then(res=> {

        dispatch({
            type: REVIEW_LIST_SUCCESS,
            payload: res?.data
        })
    }).catch(err => {
       
        dispatch({
            type: REVIEW_LIST_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error}
        })
    })
}