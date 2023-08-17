import React, { useContext } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { GlobalContext } from "../../../context/Provider"
import otpVerification from '../../../context/actions/dashboard/otpVerification'
import welcome from "../../../context/actions/dashboard/welcome"
import WelcomeScreen from "../../../screens/Dashboard/Welcome"

const Welcome = () => {
  const { otpVerificationDispatch, otpVerificationState: { error, loading, data } } = useContext(GlobalContext)
  const {
    welcomeDispatch,
    welcomeState: { showGreet },
  } = useContext(GlobalContext)

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
