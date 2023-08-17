import * as ActionTypes from '../../../constants/ActionTypes'

const newsDetail = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.NEWS_DETAIL_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ActionTypes.NEWS_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case ActionTypes.NEWS_DETAIL_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        case ActionTypes.CLEAR_NEWS_DETAIL_STATE:
            return {
                ...state,
                loading: false,
                data: null,
                error: null,
            }
        default:
            return state
    }
}

export default newsDetail