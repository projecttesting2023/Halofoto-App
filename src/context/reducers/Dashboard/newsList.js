import * as ActionTypes from '../../../constants/ActionTypes'

const newsList = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.NEWS_LIST_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ActionTypes.NEWS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case ActionTypes.NEWS_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        case ActionTypes.CLEAR_NEWS_LIST_STATE:
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

export default newsList