import * as ActionTypes from '../../../constants/ActionTypes'
const countryList = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.COUNTRYLIST_LOADING:
            return {
                ...state,
                countryListloading: true,
                countryListerror: null,
            }
        case ActionTypes.COUNTRYLIST_SUCCESS:
            return {
                ...state,
                countryListloading: false,
                countryListData: payload,
                countryListerror: null,
            }
        case ActionTypes.COUNTRYLIST_FAIL:
            return {
                ...state,
                countryListloading: false,
                countryListerror: payload,
            }
        default:
            return state
    }
}

export default countryList