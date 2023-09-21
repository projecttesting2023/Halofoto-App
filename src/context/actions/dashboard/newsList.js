import { NEWS_LIST_SUCCESS, NEWS_LIST_LOADING, NEWS_LIST_FAIL, CLEAR_NEWS_LIST_STATE } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'


export const clearNewsList = () => dispatch => {
    dispatch({
        type: CLEAR_NEWS_LIST_STATE,
    })
}

export default ({
    page,
    categgory,
    show_popular,
    show_latest,
}) => dispatch => {
    dispatch({
        type: NEWS_LIST_LOADING
    })

    let url = `/mobile/news-list`

    if(categgory?.length){
        url = `${url}/${categgory}`
    }

    url = `${url}?page=${page}`

    if(show_popular){
        url = `${url}&show_popular=1}`
    }

    if(show_latest){
        url = `${url}&show_latest=1}`
    }

    axiosInstance.get(url).then(res => {

        //console.log(res.data?.recent_news,'recent news')
        dispatch({
            type: NEWS_LIST_SUCCESS,
            payload: res.data,

        })
    }).catch(err => {

        dispatch({
            type: NEWS_LIST_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}