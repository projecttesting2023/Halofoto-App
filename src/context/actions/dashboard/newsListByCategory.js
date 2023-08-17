import { NEWS_LIST_BY_CATEGORY_SUCCESS, NEWS_LIST_BY_CATEGORY_LOADING, NEWS_LIST_BY_CATEGORY_FAIL, CLEAR_NEWS_LIST_BY_CATEGORY_STATE } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'


export const clearNewsListByCategory = () => dispatch => {
    dispatch({
        type: CLEAR_NEWS_LIST_BY_CATEGORY_STATE,
    })
}

export default ({
    page,
    categgory,
    show_popular,
    show_latest,
}) => dispatch => {
    dispatch({
        type: NEWS_LIST_BY_CATEGORY_LOADING
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
        dispatch({
            type: NEWS_LIST_BY_CATEGORY_SUCCESS,
            payload: res.data,

        })
    }).catch(err => {

        dispatch({
            type: NEWS_LIST_BY_CATEGORY_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}