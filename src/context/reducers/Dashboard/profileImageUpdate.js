import * as ActionTypes from '../../../constants/ActionTypes'

const profileImageUpdate = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.MY_PROFILE_IMAGE_UPDATE_LOADING:
            return {
                ...state,
                profileImageLoading: true,
                profileImageError: null,
            }
        case ActionTypes.MY_PROFILE_IMAGE_UPDATE_SUCCESS:
            return {
                ...state,
                profileImageLoading: false,
                profileImageData: payload,
                profileImageError: null,
            }
        case ActionTypes.MY_PROFILE_IMAGE_UPDATE_FAIL:
            return {
                ...state,
                profileImageLoading: false,
                profileImageError: payload,
            }
        case ActionTypes.CLEAR_PROFILE_IMAGE_UPDATE:
            return {
                ...state,
                profileImageLoading: false,
                profileImageData: null,
                profileImageError: null,
            }
        default:
            return state
    }
}

export default profileImageUpdate