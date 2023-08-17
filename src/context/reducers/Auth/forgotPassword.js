import * as ActionTypes from '../../../constants/ActionTypes'

const forgotPassword = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.FORGOT_PASSWORD_LOADING:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case ActionTypes.FORGOT_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        case ActionTypes.CLEAR_FORGOT_PASSWORD_STATE:
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

export default forgotPassword