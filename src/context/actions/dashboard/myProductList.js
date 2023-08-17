import { MY_PRODUCT_LIST_LOADING, MY_PRODUCT_LIST_SUCCESS, MY_PRODUCT_LIST_FAIL
} from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default () => dispatch => {  
   dispatch({
       type: MY_PRODUCT_LIST_LOADING
   })          

   axiosInstance.get('/mobile/get-register-product').then(res => {  
       dispatch({
           type: MY_PRODUCT_LIST_SUCCESS,
           payload: res.data,
           
       })
   }).catch(err => { 
       dispatch({
           type: MY_PRODUCT_LIST_FAIL,
           payload: err.response ? err.response.data : { error: StaticText.axios.error },
       })
   })
}