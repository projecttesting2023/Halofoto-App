import React, {
    useState,
    useContext,
    useEffect,
    useRef,
} from "react"
import { Alert } from "react-native"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import Toast from 'react-native-root-toast'

import ManagePasswordScreen from "../../../screens/Dashboard/MyProfile/ManagePassword"
import { GlobalContext } from "../../../context/Provider"
import { showNavigation } from "../../../context/actions/common/manageNavigation"
import managePassword from "../../../context/actions/dashboard/managePassword"
import StaticText from "../../../global/StaticText"

const ManagePassword = () => {
    const {
        profileManagePasswordDispatch,
        profileManagePasswordState: { error, loading, data },
        navigationDispatch, navigationState: { display }
    } = useContext(GlobalContext)
    const { navigate, goBack } = useNavigation()
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const isFocused = useIsFocused()
    const inptNewPassword = useRef()
    const inptConfirmPassword = useRef()

    const onPress = (route) => (route ? navigate(route) : goBack())

    useEffect(() => {
        showNavigation()(navigationDispatch)
    }, [isFocused])

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

        if (name == "new_password" && value.length < 8) {
            setErrors((prev) => {
                return { ...prev, [name]: StaticText.alert.error_password_length };
            })
        }

        else if (name == "confirm_password" && value.length < 8) {
            setErrors((prev) => {
                return { ...prev, [name]: StaticText.alert.error_password_length };
            })
        }

        else if (value !== "") {
            setErrors((prev) => {
                return { ...prev, [name]: null }
            })
        }
    }

    const onSubmit = () => {
        if (Object.values(form).length == 3 && Object.values(errors).every((item) => !item)) {
            managePassword(form)(profileManagePasswordDispatch)(response => {
                Toast.show(StaticText.alert.record_update_success)
                setForm({})
            })
        }
    }

    return (
        <ManagePasswordScreen
            onChange={onChange}
            onSubmit={onSubmit}
            inptNewPassword={inptNewPassword}
            inptConfirmPassword={inptConfirmPassword}
            form={form}
            errors={errors}
            error={error}
            onPress={onPress}
            loading={loading}
        />
    )
}
export default ManagePassword
