import AsyncStorage from "@react-native-async-storage/async-storage"
import { WELCOME_SUCCESS, WELCOME_PENDING } from "../../../constants/ActionTypes"


export default () => dispatch => {
    dispatch({
        type: WELCOME_SUCCESS
    })
}