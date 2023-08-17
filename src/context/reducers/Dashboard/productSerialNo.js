import * as ActionTypes from '../../../constants/ActionTypes'

const productSerialNo = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.SERIAL_NUMBER_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ActionTypes.SERIAL_NUMBER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case ActionTypes.SERIAL_NUMBER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        default:
            return state
    }
}

export default productSerialNo