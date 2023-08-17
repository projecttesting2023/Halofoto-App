import * as ActionTypes from '../../../constants/ActionTypes'

const productWarrantyRegisterStepSecond = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.WARRANTY_REGISTER_STEP_SECOND_LOADING:
            return {
                ...state,
                stepSecondLoading: true,
                stepSecondError: null,
            }
        case ActionTypes.WARRANTY_REGISTER_STEP_SECOND_SUCCESS:
            return {
                ...state,
                stepSecondLoading: false,
                stepSecondData: payload,
                stepSecondError: null,
            }
        case ActionTypes.WARRANTY_REGISTER_STEP_SECOND_FAIL:
            return {
                ...state,
                stepSecondLoading: false,
                stepSecondError: payload,
            }
        default:
            return state
    }
}

export default productWarrantyRegisterStepSecond