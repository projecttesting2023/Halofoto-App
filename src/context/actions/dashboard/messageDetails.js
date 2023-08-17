import {
    MESSAGE_DETAILS_SUCCESS,
    MESSAGE_DETAILS_FAIL,
    MESSAGE_DETAILS_LOADING,
  } from "../../../constants/ActionTypes";
  import axiosInstance from "../../../helpers/axiosInterceptor";
  import StaticText from "../../../global/StaticText";
  
  export default (messageId) =>
    (dispatch) => {
      dispatch({
        type: MESSAGE_DETAILS_LOADING,
      });
  

      axiosInstance
        .get(`/mobile/message-details/${messageId}`)
        .then((res) => {  
          dispatch({
            type: MESSAGE_DETAILS_SUCCESS,
            payload: res.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: MESSAGE_DETAILS_FAIL,
            payload: err.response
              ? err.response.data
              : { error: StaticText.axios.error },
          });
        });
    };