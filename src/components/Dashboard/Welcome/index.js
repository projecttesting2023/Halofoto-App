import React, { useContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { GlobalContext } from "../../../context/Provider"
import otpVerification from '../../../context/actions/dashboard/otpVerification'
import welcome from "../../../context/actions/dashboard/welcome"
import WelcomeScreen from "../../../screens/Dashboard/Welcome"
import { Platform } from "react-native"

const Welcome = () => {
  const { otpVerificationDispatch, otpVerificationState: { error, loading, data } } = useContext(GlobalContext)
  const {
    welcomeDispatch,
    welcomeState: { showGreet },
  } = useContext(GlobalContext)

  useEffect(() => {
    if (Platform.OS == 'ios') {
      const timerId = setTimeout(() => {
        AsyncStorage.setItem("show_welcome", '1')
        welcome()(welcomeDispatch)
      }, 4000);
      return () => clearTimeout(timerId);
    }

  }, [])

  const onPress = () => {
    AsyncStorage.setItem("show_welcome", '1')
    // otpVerification(true)(otpVerificationDispatch)(response => {
    welcome()(welcomeDispatch)
    //})
  }

  return <WelcomeScreen onPress={onPress}
    showLoader={loading ? loading : showGreet}
  />
}
export default Welcome
