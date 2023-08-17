import React, {
    useState,
    useContext,
    useCallback,
    useEffect,
} from "react"
import { Alert } from "react-native"
import { useFocusEffect, useNavigation } from "@react-navigation/native"

import { GlobalContext } from "../../../context/Provider"
import country from "../../../context/actions/common/country"
import forgotPasswordValidateUser, { clearForgotPasswordState } from "../../../context/actions/auth/forgotPasswordValidateUser"
import ForgotPasswordScreen from "../../../screens/Auth/ForgotPassword"
import StaticText from "../../../global/StaticText"
import { OTP_VERIFICATION } from "../../../constants/RouteNames"

const ForgotPassword = () => {
    const {
        forgotPasswordDispatch,
        forgotPasswordState: { error, loading, data },
        countryListState: { countryListerror, countryListloading, countryListData },
        countryListDispatch,
    } = useContext(GlobalContext)

    const { navigate, goBack } = useNavigation()
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const onPress = (route) => (route ? navigate(route) : goBack())

    useFocusEffect(
        useCallback(() => {
            return () => {
                if (data) {
                    clearForgotPasswordState()(forgotPasswordDispatch)
                }
            }
        }, [data])
    )
    useEffect(() => {
        country()(countryListDispatch)(response => {
          return ''
        })
      }, [])

    useEffect(() => {
        error?.message?.length &&
            Alert.alert(StaticText.alert.error_heading, error?.message, [
                { text: StaticText.button.ok, onPress: () => { } },
            ])
    }, [error])

    const onChange = ({ name, value }) => {
        setForm((form) => {
            return { ...form, [name]: value }
        })

        if (value !== "") {
            if (name == "phone_country_code" && !value?.ext_code) {
                setErrors((prev) => {
                    return { ...prev, [name]: StaticText.alert.error_phone_ext_length }
                })
            } else {
                setErrors((prev) => {
                    return { ...prev, [name]: null }
                })
            }
        } else {
            setErrors((prev) => {
                return { ...prev, [name]: StaticText.alert.error }
            })
        }
    }

    const onSubmit = () => {
        if (!form.phone_country_code?.ext_code) {
            setErrors((prev) => {
                return { ...prev, phone_country_code: StaticText.alert.error }
            })
        }

        if (!form.phone) {
            setErrors((prev) => {
                return { ...prev, phone: StaticText.alert.error }
            })
        }

        if (
            Object.values(form).length == 2 &&
            Object.values(form).every(item => item || item?.trim()?.length > 0) &&
            Object.values(errors).every((item) => !item)
        ) {
            forgotPasswordValidateUser(form)(forgotPasswordDispatch)(response => {
                setForm(form => {
                    return {}
                })
                navigate(OTP_VERIFICATION, {
                    otp: response?.otp,
                    user: response?.user?.id,
                    phone: response?.user?.phone,
                    country_code: response?.user?.country_code
                })
            })
        }
    }

    return (
        <ForgotPasswordScreen
            onChange={onChange}
            onSubmit={onSubmit}
            form={form}
            errors={errors}
            error={error}
            onPress={onPress}
            showLoader={loading}
            countryList={countryListData}
            countryListloading={countryListloading}
        />
    )
}
export default ForgotPassword
