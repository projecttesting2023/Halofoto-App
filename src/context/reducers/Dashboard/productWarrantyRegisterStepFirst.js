import * as ActionTypes from '../../../constants/ActionTypes'

const productWarrantyRegisterStepFirst = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.WARRANTY_REGISTER_STEP_FIRST_LOADING:
            return {
                ...state,
                stepFirstLoading: true,
                stepFirstError: null,
            }
        case ActionTypes.WARRANTY_REGISTER_STEP_FIRST_SUCCESS:
            return {
                ...state,
                stepFirstLoading: false,
                stepFirstData: payload,
                stepFirstError: null,
            }
        case ActionTypes.WARRANTY_REGISTER_STEP_FIRST_FAIL:
            return {
                ...state,
                stepFirstLoading: false,
                stepFirstError: payload,
            }
        case ActionTypes.CLEAR_WARRANTY_REGISTER_STEP_FIRST:
            return {
                ...state,
                stepFirstLoading: false,
                stepFirstData: null,
                stepFirstError: null,
            }
        default:
            return state
    }
}

export default productWarrantyRegisterStepFirst