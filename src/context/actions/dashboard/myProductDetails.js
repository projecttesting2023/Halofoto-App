import { MY_PRODUCT_DETAILS_LOADING, MY_PRODUCT_DETAILS_SUCCESS, MY_PRODUCT_DETAILS_FAIL
} from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default (warrantyId) => dispatch => {  
   dispatch({
       type: MY_PRODUCT_DETAILS_LOADING
   })   
 
   axiosInstance.get(`/mobile/get-register-product-details/${warrantyId}`).then(res => {  
       dispatch({
           type: MY_PRODUCT_DETAILS_SUCCESS,
           payload: res.data,
       })
   }).catch(err => { 
       dispatch({
           type: MY_PRODUCT_DETAILS_FAIL,
           payload: err.response ? err.response.data : { error: StaticText.axios.error },
       })
   })
}