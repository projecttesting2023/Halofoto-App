import * as ActionTypes from '../../../constants/ActionTypes'

const productReviewSubmit = (state, { type, payload }) => {
    switch (type) {

        case ActionTypes.CLEAR_MY_PRODUCT_REVIEW_STATE:
            return {
                ...state,
                reviewLoading: false,
                reviewError: null,
                reviewData: null,
            }
        
        case ActionTypes.MY_PRODUCT_REVIEW_SUBMIT_LOADING:
            return {
                ...state,
                reviewLoading: true,
                reviewError: null,
            }
        case ActionTypes.MY_PRODUCT_REVIEW_SUBMIT_SUCCESS:
            return {
                ...state,
                reviewLoading: false,
                reviewData: payload,
                reviewError: null,
            }
        case ActionTypes.MY_PRODUCT_REVIEW_SUBMIT_FAIL:
            return {
                ...state,
                reviewLoading: false,
                reviewError: payload,
            }
        default:
            return state
    }
}

export default productReviewSubmit