import * as ActionTypes from '../../../constants/ActionTypes'

const dashboardBanner = (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.DASHBOARD_BANNER_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ActionTypes.DASHBOARD_BANNER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null,
            }
        case ActionTypes.DASHBOARD_BANNER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }
        default:
            return state
    }
}

export default dashboardBanner