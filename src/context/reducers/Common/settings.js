import * as ActionTypes from '../../../constants/ActionTypes'

const settings = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.SETTINGS_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ActionTypes.SETTINGS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case ActionTypes.SETTINGS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        default:
            return state
    }
}

export default settings