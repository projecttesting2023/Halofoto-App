import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_LOADING,
} from "../../../constants/ActionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor";
import StaticText from "../../../global/StaticText";

export default ({ page, filter }) =>
  (dispatch) => {
    dispatch({
      type: PRODUCT_LIST_LOADING,
    });

    let url = ``;

    if (filter) {
      url = `/mobile/product-list?page=${page}&${filter}`;
    } else {
      url = `/mobile/product-list?page=${page}`;
    }
 
    axiosInstance
      .get(url)
      .then((res) => {
        dispatch({
          type: PRODUCT_LIST_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: PRODUCT_LIST_FAIL,
          payload: err.response
            ? err.response.data
            : { error: StaticText.axios.error },
        });
      });
  };
