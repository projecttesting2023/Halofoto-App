import React, { useEffect, useRef, useState, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation, useIsFocused } from '@react-navigation/native'

import { CHECK_REFERRAL_GENERAL_USER } from "../../../constants/RouteNames"
import OtpVerificationScreen from '../../../screens/Common/OTPVerification'
import { GlobalContext } from '../../../context/Provider'
import otpVerification from '../../../context/actions/dashboard/otpVerification'
import otpResend from '../../../context/actions/dashboard/otpResend'
import { Alert } from 'react-native'
import StaticText from '../../../global/StaticText'

const OtpVerification = () => {
  const TIMER = 120
  const { otpVerificationDispatch, otpVerificationState: { error, loading, data } } = useContext(GlobalContext)
  const pin1 = useRef()
  const pin2 = useRef()
  const pin3 = useRef()
  const pin4 = useRef()
  const [pin, setPin] = useState([])
  const [delay, setDelay] = useState(false)
  const [seconds, setSeconds] = useState(TIMER)
  const [otpData, setOtpData] = useState('')
  const [userData, setUserData] = useState({ phone: '', country_code: '' })
  const isFocused = useIsFocused()
  const { navigate, goBack } = useNavigation()

  useEffect(() => {
    (async () => {
      try {
        const user = await AsyncStorage.getItem('user')
        if (user) {
          let user_data = JSON.parse(user)
          setUserData({ ...userData, ['phone']: `${user_data.phone}`, ['country_code']: user_data.country_code })
          setPhoneNoVerified((user_data) ? user_data?.phone_verify_status : 0)
        }
        // const otp = await AsyncStorage.getItem('otp')
        // if (otp) {
        //   setOtpData(JSON.parse(otp))
        // } else {
        //   setOtpData(null)
        // }
      } catch (error) {

      }
    })()

    setOtpData('1234')

    return () => { }
  }, [isFocused])


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
      // if (enteredPin == otpData) {
      //   setDelay(true)
      //   // otpVerification(true)(otpVerificationDispatch)(response => {
      //   navigate(CHECK_REFERRAL_GENERAL_USER, {
      //     userType: 'general'
      //   })
      //   // })
      // }
      // else {
      //   Alert.alert(StaticText.alert.error_heading, StaticText.alert.error_invalied_otp, [
      //     { text: StaticText.button.ok, onPress: () => { } },
      //   ])
      // }
      otpVerification(enteredPin)(otpVerificationDispatch)(response => {
        //console.log('resssssssssss', response)
        if (response.status == 1) {
          setDelay(true)
          navigate(CHECK_REFERRAL_GENERAL_USER, {
            userType: 'general'
          })
        } else {
          Alert.alert(StaticText.alert.error_heading, StaticText.alert.error_invalied_otp, [
            { text: StaticText.button.ok, onPress: () => { } },
          ])
        }
      })

    } else if (seconds <= 0) {
      Alert.alert(StaticText.alert.error_heading, StaticText.alert.otp_time_out, [
        { text: StaticText.button.ok, onPress: () => { } },
      ])
    }
  }, [pin])

  const resendOtp = async () => {
    setSeconds(TIMER)
    try {
      const user = await AsyncStorage.getItem("user")
      if (user) {
        let user_data = JSON.parse(user)
        //console.log(user_data?.id)
        otpResend(user_data?.id)(otpVerificationDispatch)(response => {
          //console.log(response, 'resend otp response')
          setDelay(false)
          setPin([])
          pin1.current.focus()
          //setSeconds(TIMER)
        })
        // setDelay(false)
        // setPin([])
        // setOtpData('4321')
        // pin1.current.focus()
        // setSeconds(TIMER)
      }
    } catch (error) {
      console.log(error)
    }

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