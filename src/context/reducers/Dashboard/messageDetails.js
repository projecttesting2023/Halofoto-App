import * as ActionTypes from '../../../constants/ActionTypes'

const messageDetails = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.MESSAGE_DETAILS_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ActionTypes.MESSAGE_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case ActionTypes.MESSAGE_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        default:
            return state
    }
}

export default messageDetails