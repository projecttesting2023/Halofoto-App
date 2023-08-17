import * as ActionTypes from '../../../constants/ActionTypes'

const checkReferrer = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.CHECK_REFERRER_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ActionTypes.CHECK_REFERRER_SUCCESS:
            return {
                ...state,
                loading: false,
                isReferred: true,
                data: payload,
                error: null,
            }
        case ActionTypes.CHECK_REFERRER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        case ActionTypes.CHECK_REFERRER_SKIP:
            return {
                ...state,
                loading: false,
                error: null,
                isReferred: true,
            }
        
        default:
            return state
    }
}

export default checkReferrer