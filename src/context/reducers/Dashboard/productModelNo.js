import * as ActionTypes from '../../../constants/ActionTypes'

const productModelNo = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.WARRANTY_REGISTER_MODEL_NO_LOADING:
            return {
                ...state,
                modelLoading: true,
                modelError: null,
            }
        case ActionTypes.WARRANTY_REGISTER_MODEL_NO_SUCCESS:
            return {
                ...state,
                modelLoading: false,
                modelData: payload,
                modelError: null,
            }
        case ActionTypes.WARRANTY_REGISTER_MODEL_NO_FAIL:
            return {
                ...state,
                modelLoading: false,
                modelError: payload,
            }
        default:
            return state
    }
}
export default productModelNo