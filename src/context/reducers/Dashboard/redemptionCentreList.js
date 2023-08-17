import * as ActionTypes from "../../../constants/ActionTypes";

const redemptionCentreList = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.REDEMPTION_CENTRE_LIST_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.REDEMPTION_CENTRE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null,
      };
    case ActionTypes.REDEMPTION_CENTRE_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export default redemptionCentreList;