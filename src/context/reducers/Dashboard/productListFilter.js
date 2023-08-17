import * as ActionTypes from '../../../constants/ActionTypes'

const productListFilter = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.PRODUCT_LIST_FILTER_LOADING:
            return {
                ...state,
                filterLoading: true,
                filterError: null,
            }
        case ActionTypes.PRODUCT_LIST_FILTER_SUCCESS:
            return {
                ...state,
                filterLoading: false,
                filterData: payload,
                filterError: null,
            }
        case ActionTypes.PRODUCT_LIST_FILTER_FAIL:
            return {
                ...state,
                filterLoading: false,
                filterError: payload,
            }
        default:
            return state
    }
}

export default productListFilter