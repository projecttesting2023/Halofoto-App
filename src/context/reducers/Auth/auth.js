import * as ActionTypes from '../../../constants/ActionTypes'

const auth = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.REGISTER_LOADING:
        case ActionTypes.LOGIN_LOADING:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                isLoggedIn: true,
                isLoggedOut: false,
                error: null,
            }
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                isLoggedIn: true,
                isLoggedOut: false,
                error: null,
            }
        case ActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: null,
                isLoggedIn: false,
                isLoggedOut: true,
                error: null,
            }
        case ActionTypes.REGISTER_FAIL:
        case ActionTypes.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        case ActionTypes.CLEAR_AUTH_STATE:
            return {
                ...state,
                loading: false,
                data: null,
                error: null,
                isLoggedOut: false,
            }
        default:
            return state
    }
}

export default auth