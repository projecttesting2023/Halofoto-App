import * as ActionTypes from '../../../constants/ActionTypes'

const resetPassword = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.RESET_PASSWORD_LOADING:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case ActionTypes.RESET_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        case ActionTypes.CLEAR_RESET_PASSWORD_STATE:
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

export default resetPassword