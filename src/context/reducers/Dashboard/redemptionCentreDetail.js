import * as ActionTypes from "../../../constants/ActionTypes";

const redemptionCentreDetail = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.REDEMPTION_CENTRE_DETAIL_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.REDEMPTION_CENTRE_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null,
      };
    case ActionTypes.REDEMPTION_CENTRE_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export default redemptionCentreDetail;