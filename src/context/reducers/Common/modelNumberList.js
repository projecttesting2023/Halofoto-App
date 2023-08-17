import * as ActionTypes from '../../../constants/ActionTypes'

const modelNumberList = (state, { type, payload}) =>{
    switch (type) {
        case ActionTypes.MODEL_NUMBER_LIST_LOADING:
            return{
                ...state,
                modelListloading: true,
                modelListerror: null
            }
        case ActionTypes.MODEL_NUMBER_LIST_SUCCESS:
            return{
                ...state,
                modelListloading: false,
                modelListData: payload,
                modelListerror: null
            }    
        case ActionTypes.MODEL_NUMBER_LIST_FAIL:
            return{
                ...state,
                modelListloading: false,
                modelListerror:payload
            } 
        default:
            return state       
    }
}

export default modelNumberList