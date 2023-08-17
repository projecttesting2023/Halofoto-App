import * as ActionTypes from "../../../constants/ActionTypes";

const voucherList = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.VOUCHER_LIST_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.VOUCHER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null,
      };
    case ActionTypes.VOUCHER_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export default voucherList;