import React, {
    useState,
    useContext,
    useCallback,
    useEffect,
    useRef,
} from "react";
import { Alert } from "react-native"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { GlobalContext } from "../../../context/Provider"
import resetPassword, {clearResetPasswordState} from "../../../context/actions/auth/resetPassword"
import ResetPasswordScreen from "../../../screens/Auth/ResetPassword"
import StaticText from "../../../global/StaticText"
import { LOGIN } from "../../../constants/RouteNames"

const ResetPassword = ({ route, navigation }) => {
    const {
        resetPasswordDispatch,
        resetPasswordState: { error, loading, data },
    } = useContext(GlobalContext)

    const { user } = route.params
    const inptNewPassword = useRef()
    const inptConfPassword = useRef()
    const { navigate, goBack } = useNavigation()
    const [form, setForm] = useState({ user_id: user })
    const [errors, setErrors] = useState({})

    useFocusEffect(
        useCallback(() => {
            return () => {
                if (data) {
                    clearResetPasswordState()(resetPasswordDispatch);
                }
            };
        }, [data])
    )

    const onPress = (route) => (route ? navigate(route) : goBack())

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
            if (name == "new_password" && value.length < 8) {
                setErrors((prev) => {
                    return { ...prev, [name]: StaticText.alert.error_password_length }
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
        if (!form.new_password) {
            setErrors((prev) => {
                return { ...prev, new_password: StaticText.alert.error }
            })
        }

        if (!form.confirm_password) {
            setErrors((prev) => {
                return { ...prev, confirm_password: StaticText.alert.error }
            })
        }

        if (
            Object.values(form).length == 3 &&
            Object.values(form).every(item => item || item?.trim()?.length > 0) &&
            Object.values(errors).every((item) => !item)
        ) {

            resetPassword(form)(resetPasswordDispatch)(response => {
                Alert.alert(StaticText.screen.reset_password.success_heading, StaticText.screen.reset_password.success_text, [
                    { text: StaticText.button.ok, onPress: () => navigate(LOGIN) },
                ])
            })
        }
    }

    return (
        <ResetPasswordScreen
            onChange={onChange}
            onSubmit={onSubmit}
            form={form}
            errors={errors}
            error={error}
            onPress={onPress}
            showLoader={loading}
            inptNewPassword={inptNewPassword}
            inptConfPassword={inptConfPassword}
        />
    );
};
export default ResetPassword
