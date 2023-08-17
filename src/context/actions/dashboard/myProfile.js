import { MY_PROFILE_SUCCESS, MY_PROFILE_LOADING, MY_PROFILE_FAIL } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'

export default () => dispatch =>  {
    dispatch({
        type: MY_PROFILE_LOADING
    })
    axiosInstance.get(`/mobile/my-profile`).then(res => {

        dispatch({
            type: MY_PROFILE_SUCCESS,
            payload: res.data,
        })

    }).catch(err => {
       
        dispatch({
            type: MY_PROFILE_FAIL,
            payload: err.response ? err.response.data : { profileError: StaticText.axios.error },
        })
    })
}