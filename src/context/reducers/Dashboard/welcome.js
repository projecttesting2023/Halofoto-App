import * as ActionTypes from '../../../constants/ActionTypes'

const checkReferrer = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.WELCOME_PENDING:
            return {
                ...state,
                showGreet: false,
            }
        case ActionTypes.WELCOME_SUCCESS:
            return {
                ...state,
                showGreet: true,
            }
       
        default:
            return state
    }
}

export default checkReferrer