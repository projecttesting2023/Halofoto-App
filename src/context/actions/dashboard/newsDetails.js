import { NEWS_DETAIL_SUCCESS, NEWS_DETAIL_LOADING, NEWS_DETAIL_FAIL, CLEAR_NEWS_DETAIL_STATE } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'


export const clearNewsDetail = () => dispatch => {
    dispatch({
        type: CLEAR_NEWS_DETAIL_STATE,
    })
}

export default (news_slug) => dispatch => {
    dispatch({
        type: NEWS_DETAIL_LOADING
    })

    let url = `/mobile/news`
    
    if (news_slug?.length) {
        url = `${url}/${news_slug}`
    }

    axiosInstance.get(url).then(res => {
        dispatch({
            type: NEWS_DETAIL_SUCCESS,
            payload: res.data,

        })
    }).catch(err => {

        dispatch({
            type: NEWS_DETAIL_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}