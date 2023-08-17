import React, { useEffect, useRef, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'

import OtpVerificationScreen from '../../../screens/Common/OTPVerification'
import { Alert } from 'react-native'
import StaticText from '../../../global/StaticText'
import { RESET_PASSWORD } from '../../../constants/RouteNames'

const OtpVerification = ({ route, navigation }) => {
  const TIMER = 60
  const { otp, user, phone, country_code } = route.params
  const pin1 = useRef()
  const pin2 = useRef()
  const pin3 = useRef()
  const pin4 = useRef()
  const [pin, setPin] = useState([])
  const [delay, setDelay] = useState(false)
  const [seconds, setSeconds] = useState(TIMER)
  const [otpData, setOtpData] = useState(otp)
  const [userData, setUserData] = useState({ phone, country_code })

  const isFocused = useIsFocused()
  useEffect(() => {
    const interval = setInterval(() => {
      !delay && seconds > 0 && setSeconds(seconds => seconds - 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [seconds || delay])

  useEffect(() => {
    let enteredPin = pin.join('').toString()
    if (enteredPin?.length && enteredPin?.length == 4 && seconds > 0) {
      if (enteredPin == otpData) {
        setDelay(true)
        navigation.navigate(RESET_PASSWORD, { user })
      }
      else {
        Alert.alert(StaticText.alert.error_heading, StaticText.alert.error_invalied_otp, [
          { text: StaticText.button.ok, onPress: () => { } },
        ])
      }
    } else if (seconds <= 0) {
      Alert.alert(StaticText.alert.error_heading, StaticText.alert.otp_time_out, [
        { text: StaticText.button.ok, onPress: () => { } },
      ])
    }
  }, [pin])

  const resendOtp = () => {
    setDelay(false)
    setPin([])
    setOtpData('4321')
    pin1.current.focus()
    setSeconds(TIMER)
  }

  return (
    <OtpVerificationScreen
      pin={pin}
      pin1={pin1}
      pin2={pin2}
      pin3={pin3}
      pin4={pin4}
      setPin={setPin}
      seconds={seconds}
      resendOtp={resendOtp}
      userData={userData}
    />
  )
}

export default OtpVerification