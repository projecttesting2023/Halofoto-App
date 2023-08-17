import { HALO_STORY_LIST_LOADING, HALO_STORY_LIST_SUCCESS, HALO_STORY_LIST_FAIL } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from "../../../global/StaticText"

export default (page) => dispatch => {
    dispatch({
        type: HALO_STORY_LIST_LOADING
    })

    axiosInstance.get (`/mobile/story?page=${page}`).then(res=> {
        dispatch({
            type: HALO_STORY_LIST_SUCCESS,
            payload: res.data
        })
    }).catch(err => {
        dispatch({
            type: HALO_STORY_LIST_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error}
        })
    })
}