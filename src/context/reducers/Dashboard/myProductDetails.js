import * as ActionTypes from '../../../constants/ActionTypes'

const myProductDetails = (state, { type, payload}) =>{
    switch (type) {
        case ActionTypes.MY_PRODUCT_DETAILS_LOADING:
            return{
                ...state,
                loading: true,
                error: null
            }
        case ActionTypes.MY_PRODUCT_DETAILS_SUCCESS:
            return{
                ...state,
                loading: false,
                data: payload,
                error: null
            }    
        case ActionTypes.MY_PRODUCT_DETAILS_FAIL:
            return{
                ...state,
                loading: false,
                error:payload
            } 
        default:
            return state       
    }
}

export default myProductDetails