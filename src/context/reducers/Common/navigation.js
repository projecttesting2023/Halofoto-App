
import * as ActionTypes from '../../../constants/ActionTypes'
const navigation = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.SHOW_NAVIGATION:
            return {
                ...state,
                display: true,
    
            }
        case ActionTypes.HIDE_NAVIGATION:
            return {
                ...state,
                display: false,
            }
      
        default:
            return state
    }
}

export default navigation