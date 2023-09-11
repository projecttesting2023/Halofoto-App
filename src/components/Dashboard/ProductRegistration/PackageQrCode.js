import React, { useContext, useEffect, useState } from 'react'
import { Text, Animated, Alert,Linking } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useNavigation, useIsFocused } from '@react-navigation/native'

import { GlobalContext } from '../../../context/Provider'
import { WARENTY_REGISTRATION_PRODUCT_WARRANTY } from '../../../constants/RouteNames'
import { hideNavigation } from '../../../context/actions/common/manageNavigation'
import PackageQrCodeScreen from '../../../screens/Dashboard/ProductRegistration/PackageQrCode'

const PackageQrCode = () => {
    const { navigationDispatch, navigationState: { display } } = useContext(GlobalContext)
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)
    const [scannedData, setScannedDate] = useState(null)
    const { navigate, goBack } = useNavigation()
    const [animationLineHeight, setAnimationLineHeight] = useState(0)
    const [focusLineAnimation, setFocusLineAnimation] = useState(new Animated.Value(0))
    const isFocused = useIsFocused()

    const onPress = route => {
        setScanned(false)
        route ? navigate(route) : navigate(WARENTY_REGISTRATION_PRODUCT_WARRANTY, {
            serialNo: ``
        })
    }

    const getPermissionsAsync = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        //console.log('ooooo', status)
        if (status == 'denied') {
            Alert.alert('Warning', 'You need to allow your camera permission to enable scanner.', [
                { text: 'OK', onPress: () => Linking.openSettings() },
            ])
        }
        setHasPermission(status === 'granted');
    }

    useEffect(() => {
        isFocused && (
            hideNavigation()(navigationDispatch),
            hasPermission !== 'granted' && (
                //console.log('permission ---', hasPermission),
                getPermissionsAsync(),
                animateLine()
            ),
            setScanned(true),
            setScannedDate(null)
        )
    }, [isFocused])

    const animateLine = () => {
        Animated.sequence([
            Animated.timing(focusLineAnimation, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }), Animated.timing(focusLineAnimation, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start(animateLine)
    }


    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(false)
        setScannedDate(data)
        navigate(WARENTY_REGISTRATION_PRODUCT_WARRANTY, {
            serialNo: data
        })
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }


    return (
        <PackageQrCodeScreen
            scanned={scanned}
            scannedData={scannedData}
            handleBarCodeScanned={handleBarCodeScanned}
            setAnimationLineHeight={setAnimationLineHeight}
            focusLineAnimation={focusLineAnimation}
            animationLineHeight={animationLineHeight}
            setScanned={setScanned}
            onPress={onPress}
        />
    )
}


export default PackageQrCode