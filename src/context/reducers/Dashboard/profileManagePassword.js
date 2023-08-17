import * as ActionTypes from '../../../constants/ActionTypes'

const profileManagePassword = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.MY_PROFILE_PASSWORD_UPDATE_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ActionTypes.MY_PROFILE_PASSWORD_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case ActionTypes.MY_PROFILE_PASSWORD_UPDATE_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        default:
            return state
    }
}

export default profileManagePassword