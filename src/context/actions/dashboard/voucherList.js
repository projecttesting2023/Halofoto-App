import {
  VOUCHER_LIST_SUCCESS,
  VOUCHER_LIST_LOADING,
  VOUCHER_LIST_FAIL,
} from "../../../constants/ActionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor";
import StaticText from "../../../global/StaticText";

export default ({ page, categgory, screen }) =>
  (dispatch) => {
    dispatch({
      type: VOUCHER_LIST_LOADING,
    });

    let url = screen == "history" ? `mobile/use-histories`:`mobile/get-vouchers`

    if (categgory) {
      url = `${url}/${categgory}`;
    }

    url = `${url}?page=${page}`;

    axiosInstance
      .get(url)
      .then((res) => {    
        dispatch({
          type: VOUCHER_LIST_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
       
        dispatch({
          type: VOUCHER_LIST_FAIL,
          payload: err.response
            ? err.response.data
            : { error: StaticText.axios.error },
        });
      });
  };
