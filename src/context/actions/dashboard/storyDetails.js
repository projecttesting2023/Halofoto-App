import { HALO_STORY_DETAILS_LOADING, HALO_STORY_DETAILS_SUCCESS, HALO_STORY_DETAILS_FAIL } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from "../../../global/StaticText"

export default (storyId) => dispatch => onSuccess => {
    dispatch({
        type: HALO_STORY_DETAILS_LOADING
    })

    axiosInstance.get (`/mobile/story/${storyId}`).then(res=> {
       
        dispatch({
            type: HALO_STORY_DETAILS_SUCCESS,
            payload: res.data
        })
        onSuccess(res.data)
    }).catch(err => {
        dispatch({
            type: HALO_STORY_DETAILS_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error}
        })
    })
}