import * as ActionTypes from '../../../constants/ActionTypes'

const otpVerification = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.OTP_VERIFY_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ActionTypes.OTP_VERIFY_SUCCESS:
            return {
                ...state,
                loading: false,
                isPhoneNoVerified:true,
                data: payload,
                error: null,
            }
        case ActionTypes.OTP_VERIFY_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        default:
            return state
    }
}

export default otpVerification