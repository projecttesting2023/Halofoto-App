import * as ActionTypes from '../../../constants/ActionTypes'

const myProfile = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.MY_PROFILE_LOADING:
            return {
                ...state,
                profileLoading: true,
                profileError: null,
            }
        case ActionTypes.MY_PROFILE_SUCCESS:
            return {
                ...state,
                profileLoading: false,
                profileData: payload,
                profileError: null,
            }
        case ActionTypes.MY_PROFILE_FAIL:
            return {
                ...state,
                profileLoading: false,
                profileError: payload,
            }
        default:
            return state
    }
}

export default myProfile