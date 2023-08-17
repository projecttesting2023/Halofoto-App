import React, { useContext, useEffect, useRef, useState, useCallback } from "react"
import { useFocusEffect, useIsFocused } from '@react-navigation/native'
import { InteractionManager } from 'react-native'
import { GlobalContext } from "../../../context/Provider"
import VoucherDetailsScreen from "../../../screens/Dashboard/Voucher/VoucherDetails"
import { hideNavigation } from "../../../context/actions/common/manageNavigation"
import { Alert } from "react-native"
import StaticText from "../../../global/StaticText"
import reedemVoucher, { clearVoucherState } from "../../../context/actions/dashboard/reedemVoucher"
import voucherDetails from "../../../context/actions/dashboard/voucherDetails"

const VoucherDetails = ({ route, navigation }) => {
    const {
        voucherDetailsState: { error, loading, data },
        voucherDetailsDispatch, 
        navigationDispatch, navigationState: { display }
    } = useContext(GlobalContext)

    const { voucherId } = route.params
    const isFocused = useIsFocused()
    

    // useFocusEffect(
    //     useCallback(() => {
    //         const task = InteractionManager.runAfterInteractions(() => {
    //             hideNavigation()(navigationDispatch)
    //             redemptionCentreDetail(voucherId)(redemptionCentreDetailDispatch)
    //         })
    //         return () => task.cancel();
    //     }, [])
    // )
    // useEffect(() => {
    //     !isFocused && (
    //     clearVoucherState()(reedemVoucherDispatch)
    //  )}, [isFocused])

    useEffect(() => {
        hideNavigation()(navigationDispatch)
        voucherDetails(voucherId)(voucherDetailsDispatch)
    }, [])

    const onPress = routes => routes ? navigation.navigate(routes) : navigation.goBack()

    // useEffect(() =>{
    //     reedemVoucherError?.message?.length &&
    //     Alert.alert(StaticText.alert.error_heading, reedemVoucherError?.message, [
    //         { text: StaticText.button.ok, onPress: () => { } },
    //     ] )
    // },[reedemVoucherError])
    // useEffect(() => {
    //     error?.message?.length &&
    //         Alert.alert(StaticText.alert.error_heading, error?.message, [
    //             { text: StaticText.button.ok, onPress: () => { } },
    //         ])
    // }, [error])

  

    return (
        <VoucherDetailsScreen
            data={data}
            loading={loading}
            onPress={onPress}
            // onSubmit={onSubmit}
            // reedemVoucherData={reedemVoucherData}
            // reedemVoucherLoading={reedemVoucherLoading}
        />
    )
}
export default VoucherDetails