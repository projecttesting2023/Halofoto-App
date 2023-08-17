import React, { useEffect, useState, useContext } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { DASHBOARD_WELCOME_GENERAL_USER, DASHBOARD_WELCOME_SOCIAL_USER } from "../../../constants/RouteNames"
import { GlobalContext } from '../../../context/Provider'
import CheckReferrerScreen from '../../../screens/Dashboard/CheckReferrer'
import checkReferrer from '../../../context/actions/dashboard/checkReferrer'
import StaticText from '../../../global/StaticText'

const CheckReferrer = ({ route, navigation }) => {
    const { navigate, goBack } = useNavigation()
    const { checkReferrerDispatch, checkReferrerState: { error, loading, data } } = useContext(GlobalContext)
    const { userType } = route.params
    const [form, setForm] = useState({})
    const onPress = () => navigate(userType == 'general' ? DASHBOARD_WELCOME_GENERAL_USER : DASHBOARD_WELCOME_SOCIAL_USER)


    const onChange = ({ name, value }) => {
        setForm(form => {
            return { ...form, [name]: value }
        })
    }

    const onSubmit = () => {
        if (form?.referral_code) {
            checkReferrer(form)(checkReferrerDispatch)(response => {
                navigate(userType == 'general' ? DASHBOARD_WELCOME_GENERAL_USER : DASHBOARD_WELCOME_SOCIAL_USER)
            })
        }
    }

    useEffect(() => {
        error?.length > 0 && Alert.alert(StaticText.alert.error_heading, error, [
            { text: StaticText.button.ok, onPress: () => { } },
        ])
    }, [error])

    return (
        <CheckReferrerScreen
            onChange={onChange}
            onSubmit={onSubmit}
            form={form}
            loading={loading}
            error={error}
            data={data}
            onPress={onPress}
        />
    )
}

export default CheckReferrer