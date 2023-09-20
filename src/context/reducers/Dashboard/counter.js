import * as ActionTypes from '../../../constants/ActionTypes'

const counter = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.MY_COUNTER_LOADING:
            return {
                ...state,
                counterLoading: true,
                counterError: null,
            }
        case ActionTypes.MY_COUNTER_SUCCESS:
            return {
                ...state,
                counterLoading: false,
                counterData: payload,
                counterError: null,
            }
        case ActionTypes.MY_COUNTER_FAIL:
            return {
                ...state,
                counterLoading: false,
                counterError: payload,
            }
        default:
            return state
    }
}

export default counter