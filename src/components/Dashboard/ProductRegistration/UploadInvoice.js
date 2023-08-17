import React, { useContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import * as DocumentPicker from 'expo-document-picker'
import { Camera } from "expo-camera"
import { useIsFocused } from '@react-navigation/native'
import { GlobalContext } from '../../../context/Provider'
import UploadInvoiceScreen from '../../../screens/Dashboard/ProductRegistration/UploadInvoice'
import productWarrantyRegisterStepSecond from '../../../context/actions/dashboard/productWarrantyRegisterStepSecond'
import StaticText from '../../../global/StaticText'
import { WARENTY_REGISTRATION_THANK_YOU } from '../../../constants/RouteNames'
import { hideNavigation } from '../../../context/actions/common/manageNavigation'


const UploadInvoice = ({ route, navigation }) => {
    const { productWarrantyRegisterStepSecondDispatch, productWarrantyRegisterStepSecondState: { stepSecondData, stepSecondError, stepSecondLoading }, navigationDispatch, navigationState: { display } } = useContext(GlobalContext)
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const [camera, setShowCamera] = useState(false)
    const [hasPermission, setHasPermission] = useState(null)
    const [cameraRef, setCameraRef] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back)

    const isFocused = useIsFocused()
    const { warrantyId } = route.params
    const MAX_FILE_UPLOAD_SIZE = (1024 * 1024) * 2

    

    const onPress = route => { route ? navigation.navigate(route) : navigation.goBack() }

    const resetFile = () => {
        setForm({})
        setErrors({})
    }

    useEffect(() => {
        isFocused && hideNavigation()(navigationDispatch)
    }, [isFocused])

    useEffect(() => {

        let data = ``
        if(stepSecondError?.invoice && typeof stepSecondError?.invoice[0] != 'undefined'){
            data += stepSecondError?.invoice[0]
        }
       
        if(stepSecondError?.error){
            data += stepSecondError?.error
        }

        data?.length > 0 && Alert.alert(StaticText.alert.error_heading, data,[
            { text: StaticText.button.ok, onPress: () => { } },
        ])

    }, [stepSecondError])

    const onChange = ({ name, value }) => {
        setForm(form => {
            return {
                ...form, [name]: {
                    uri: value.uri,
                    mimeType: getFileMimeType(value.uri),
                    name: getFileName(value.uri),
                    size: value?.size?.length ? value?.size : null
                }
            }
        })

        if (value?.size > MAX_FILE_UPLOAD_SIZE) {
            setErrors(prev => {
                return { ...prev, [name]: StaticText.alert.error }
            })
        }
        else {
            setErrors(prev => {
                return { ...prev, [name]: null }
            })
        }
    }

    const onSubmit = () => {
        if (Object.values(errors).every(item => !item)
            && Object.values(form).every(item => item || item?.trim()?.length > 0)
        ) {
            productWarrantyRegisterStepSecond(warrantyId, form)(productWarrantyRegisterStepSecondDispatch)(response => {
                navigation.navigate(WARENTY_REGISTRATION_THANK_YOU, {
                    approvalStatus: response?.warranty?.approval_status,
                    pointsAccumulate: response?.points
                })
            })
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

        if (result?.name && result.name != '' && result?.size) {
            onChange({ name: 'invoice', value: result })
        }
    }

    return (
        <UploadInvoiceScreen
            pickDocument={pickDocument}
            setShowCamera={setShowCamera}
            cameraRef={cameraRef}
            setCameraRef={setCameraRef}
            type={type}
            setType={setType}
            camera={camera}
            isFocused={isFocused}
            onChange={onChange}
            onSubmit={onSubmit}
            onPress={onPress}
            form={form}
            errors={errors}
            resetFile={resetFile}
            loading={stepSecondLoading}
        />
    )
}
export default UploadInvoice