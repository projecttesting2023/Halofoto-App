import * as ActionTypes from '../../../constants/ActionTypes'

const messageList = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.E_REPAIR_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ActionTypes.E_REPAIR_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case ActionTypes.E_REPAIR_FAIL:
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