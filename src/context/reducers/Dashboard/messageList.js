import * as ActionTypes from '../../../constants/ActionTypes'

const messageList = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.MESSAGE_LIST_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ActionTypes.MESSAGE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case ActionTypes.MESSAGE_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        default:
            return state
    }
}

export default messageList