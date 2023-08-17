import { REDEMPTION_CENTRE_LIST_SUCCESS, REDEMPTION_CENTRE_LIST_LOADING, REDEMPTION_CENTRE_LIST_FAIL } from "../../../constants/ActionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor"
import StaticText from '../../../global/StaticText'


export default ({
    page,
    categgory,
}) => dispatch => {
    dispatch({
        type: REDEMPTION_CENTRE_LIST_LOADING
    })

    let url = `/mobile/redemption-centre`

    if(categgory){
        url = `${url}/${categgory}`
    }

    url = `${url}?page=${page}`

    axiosInstance.get(url).then(res => {
        dispatch({
            type: REDEMPTION_CENTRE_LIST_SUCCESS,
            payload: res.data,

        })
    }).catch(err => {
        dispatch({
            type: REDEMPTION_CENTRE_LIST_FAIL,
            payload: err.response ? err.response.data : { error: StaticText.axios.error },
        })
    })
}