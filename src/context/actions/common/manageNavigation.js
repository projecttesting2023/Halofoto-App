import { SHOW_NAVIGATION, HIDE_NAVIGATION } from "../../../constants/ActionTypes"

export const showNavigation = () => dispatch => {
    dispatch({
        type: SHOW_NAVIGATION,
    })
}

export const hideNavigation = () => dispatch => {
    dispatch({
        type: HIDE_NAVIGATION,
    })
}