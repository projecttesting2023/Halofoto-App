import React, {
    useState,
    useContext,
    useEffect,
    useRef,
} from "react"
import { Alert } from "react-native"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Toast from 'react-native-root-toast'
import * as DocumentPicker from 'expo-document-picker'


import ManageProfileScreen from "../../../screens/Dashboard/MyProfile/ManageProfile"
import { GlobalContext } from "../../../context/Provider"
import { showNavigation } from "../../../context/actions/common/manageNavigation"
import manageProfile from "../../../context/actions/dashboard/manageProfile"
import country from "../../../context/actions/common/country"
import StaticText from "../../../global/StaticText"
import manageProfileImage from "../../../context/actions/dashboard/manageProfileImage"

const ManageProfile = () => {
    const {
        profileUpdateDispatch,
        profileUpdateState: { error, loading, data },
        profileImageUpdateDispatch,
        countryListState: { countryListerror, countryListloading, countryListData },
        countryListDispatch,
        navigationDispatch, navigationState: { display }
    } = useContext(GlobalContext)
    const { navigate, goBack } = useNavigation()
    const [form, setForm] = useState({})
    const [cities, setCities] = useState([])
    const [profileImage, setProfileImage] = useState(``)
    const [isTamronUser, setIsTamronUser] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const isFocused = useIsFocused()
    const inptEmail = useRef()
    const inptPhone = useRef()
    const inptAddressLine1 = useRef()
    const MAX_FILE_UPLOAD_SIZE = (1024 * 1024) * 2

    const onPress = (route) => (route ? navigate(route) : goBack())

    useEffect(() => {
        (async () => {
            try {
                const user = await AsyncStorage.getItem("user")
                if (user) {
                    let user_data = JSON.parse(user)

                    setForm({
                        name: user_data?.name,
                        email: user_data?.email,
                        profile_image: user_data?.profile_image,
                        gender: user_data?.gender,
                        dob: user_data?.dob,
                        phone_country_code: user_data?.phone_country_code,
                        phone: user_data?.phone_country_code ? user_data?.phone?.substring(user_data?.phone_country_code?.length) : user_data?.phone,
                        occupation: user_data?.occupation,
                        tamron_user: user_data?.tamron_user,
                        address_line1: user_data?.address_lines ? user_data?.address_lines[0]?.address_line1 : ``,
                        state: {
                            name: user_data?.address_lines ? user_data?.address_lines[0]?.state : ``,
                        },
                        city: {
                            name: user_data?.address_lines ? user_data?.address_lines[0]?.city : ``,
                        },
                        zip: user_data?.address_lines ? user_data?.address_lines[0]?.zip : ``,
                        insta_id: user_data?.insta_id,
                    })
                    setIsTamronUser(user_data?.tamron_user)

                    country()(countryListDispatch)(response => {
                        setIsLoading(false)

                        let filterCountryResult = response?.length && user_data?.address_lines?.length && response.filter(data => data.id == user_data?.address_lines[0]?.country_id)

                        let filterCountryCodeResult = response?.length && user_data?.phone_code && response.filter((data) => data.ext_code == user_data?.phone_code)

                        setForm(form => ({
                            ...form, country: {
                                code: filterCountryResult ? filterCountryResult[0]?.code : ``,
                                countrycode: filterCountryResult ? filterCountryResult[0]?.countrycode : ``,
                                ext_code: filterCountryResult ? filterCountryResult[0]?.ext_code : ``,
                                id: filterCountryResult ? filterCountryResult[0]?.id : ``,
                                name: filterCountryResult ? filterCountryResult[0]?.name : ``,
                            }
                        }))
                        setForm(form => ({
                            ...form, phone_country_code: {
                                code: filterCountryCodeResult ? filterCountryCodeResult[0]?.code : ``,
                                countrycode: filterCountryCodeResult ? filterCountryCodeResult[0]?.countrycode : ``,
                                ext_code: filterCountryCodeResult ? filterCountryCodeResult[0]?.ext_code : ``,
                                id: filterCountryCodeResult ? filterCountryCodeResult[0]?.id : ``,
                                name: filterCountryCodeResult ? filterCountryCodeResult[0]?.name : ``,
                            }
                        }))

                        if (filterCountryResult && filterCountryResult[0]?.id == 103) {
                            let filterProvince = filterCountryResult[0].provinces.filter(data => data.province_name == user_data?.address_lines[0]?.state)
                            filterProvince && setCities(filterProvince[0]?.cities)
                        }
                    })

                }
            } catch (error) {
            } finally {
            }
        })()
        setIsLoading(true)
        showNavigation()(navigationDispatch)
        return () => { }
    }, [isFocused])

    useEffect(() => {
        error?.reg_message?.length &&
            Alert.alert(StaticText.alert.error_heading, error?.reg_message, [
                { text: StaticText.button.ok, onPress: () => { } },
            ])
    }, [error])

    const onChange = ({ name, value }) => {
        // console.log(value.uri,'image uri from file upload')
        // console.log(name)
        if (name == 'profile_image') {
            setForm((form) => {
                return {
                    ...form, [name]: {
                        uri: value.uri,
                        mimeType: getFileMimeType(value.uri),
                        name: getFileName(value.uri),
                        size: value?.size?.length ? value?.size : null
                    }
                }
            })
        } else {
            setForm((form) => {
                return { ...form, [name]: value }
            })
        }

        if (value?.size > MAX_FILE_UPLOAD_SIZE) {
            setErrors(prev => {
                return { ...prev, [name]: StaticText.alert.error }
            })
            Toast.show(StaticText.alert.upload_limit_error)
        }
        else if (value !== "") {
            manageProfileImage({
                value
            })(profileImageUpdateDispatch)((response) => {
                Toast.show(StaticText.alert.record_update_success)
            })

            if (name == "phone_country_code" && !value?.ext_code) {
                setErrors((prev) => {
                    return { ...prev, [name]: StaticText.alert.error_phone_ext_length }
                })
            } else if (name == "country" && !value?.id) {
                setErrors((prev) => {
                    return { ...prev, [name]: StaticText.alert.error }
                })
            } else {
                setErrors((prev) => {
                    return { ...prev, [name]: null }
                })
            }
        } else if (name !== "insta_id" && name !== "city" && name !== "state") {
            setErrors((prev) => {
                return { ...prev, [name]: StaticText.alert.error }
            })
        }


    }

    const onSubmit = () => {
        if (!form.name) {
            setErrors((prev) => {
                return { ...prev, name: StaticText.alert.error }
            })
        }
        if (!form.email) {
            setErrors((prev) => {
                return { ...prev, email: StaticText.alert.error }
            })
        }

        if (!form.dob) {
            setErrors((prev) => {
                return { ...prev, dob: StaticText.alert.error }
            })
        }
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
        if (!form.country?.id) {
            setErrors((prev) => {
                return { ...prev, country: StaticText.alert.error }
            })
        }
        if (form.country?.id == 103 && !form.state) {
            setErrors((prev) => {
                return { ...prev, state: StaticText.alert.error }
            })
        }
        if (form.country?.id == 103 && !form.city) {
            setErrors((prev) => {
                return { ...prev, city: StaticText.alert.error }
            })
        }
        if (!form.address_line1) {
            setErrors((prev) => {
                return { ...prev, address_line1: StaticText.alert.error }
            })
        }
        if (!form.gender) {
            setErrors((prev) => {
                return { ...prev, gender: StaticText.alert.error }
            })
        }

        if (Object.values(form).length >= 9 && Object.values(errors).every((item) => !item)) {

            manageProfile(form)(profileUpdateDispatch)(response => Toast.show(StaticText.alert.record_update_success))
        }
    }

    const getFileMimeType = fileUri => {
        let fileExt = fileUri.split('.').pop()
        if (fileExt == 'jpeg' || fileExt == 'jpg' || fileExt == 'JPEG' || fileExt == 'JPG') {
            return 'image/jpeg'
        } else if (fileExt == 'PNG' || fileExt == 'png') {
            return 'image/png'
        } else if (fileExt == 'GIF' || fileExt == 'gif') {
            return 'image/gif'
        }
    }

    const getFileName = fileUri => {
        return fileUri.split('/').pop()
    }

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            type: 'image/*'
        })
        if (result?.mimeType == "image/jpeg" || result?.mimeType == "image/png") {
            if (result?.name && result.name != '' && result?.size) {
                result?.size <= MAX_FILE_UPLOAD_SIZE && setProfileImage(result?.uri)
                console.log(result, 'result from pickDocument')
                onChange({ name: 'profile_image', value: result })

            }
        } else {
            Alert.alert('Warring', 'You need to use JPEG or PNG file', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ])
        }
    }

    return (
        <ManageProfileScreen
            onChange={onChange}
            onSubmit={onSubmit}
            inptEmail={inptEmail}
            inptPhone={inptPhone}
            inptAddressLine1={inptAddressLine1}
            form={form}
            errors={errors}
            error={error}
            onPress={onPress}
            showLoader={loading}
            countryList={countryListData}
            countryListloading={countryListloading}
            isTamronUser={isTamronUser}
            setIsTamronUser={setIsTamronUser}
            setCities={setCities}
            cities={cities}
            loading={isLoading}
            pickDocument={pickDocument}
            profileImage={profileImage}
        />
    )
}
export default ManageProfile
