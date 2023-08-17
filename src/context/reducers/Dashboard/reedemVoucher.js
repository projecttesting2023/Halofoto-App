import * as ActionTypes from "../../../constants/ActionTypes";

const reedemVoucher = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.REDEMPTION_VOUCHER_LOADING:
      return {
        ...state,
        reedemVoucherLoading: true,
        reedemVoucherError: null,
      };
    case ActionTypes.REDEMPTION_VOUCHER_SUCCESS:
      return {
        ...state,
        reedemVoucherLoading: false,
        reedemVoucherData: payload,
        reedemVoucherError: null,
      };
    case ActionTypes.REDEMPTION_VOUCHER_FAIL:
      return {
        ...state,
        reedemVoucherLoading: false,
        reedemVoucherError: payload,
      };
      case ActionTypes.CLEAR_REDEMPTION_VOUCHER:
      return {
          ...state,
          reedemVoucherLoading: false,
          reedemVoucherData: null,
          reedemVoucherError: null
      }
    default:
      return state;
  }
};
export default reedemVoucher;