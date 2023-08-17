import * as ActionTypes from '../../../constants/ActionTypes'

const TermsAndConditions = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.TERMS_AND_CONDITIONS_LOADING:
            return {
                ...state,
                loading:true,
                error: null
            }
        case ActionTypes.TERMS_AND_CONDITIONS_SUCCESS:
            return {
                ...state,
                loading:false,
                data: payload,
                error: null
            }    
        case ActionTypes.TERMS_AND_CONDITIONS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }    
        default:
            return state    
    }
}
export default TermsAndConditions