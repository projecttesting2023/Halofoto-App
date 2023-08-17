import { useState, useContext, useCallback, useRef, useEffect } from 'react'
import { Alert } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage"
import LoginScreen from '../../../screens/Auth/Login'
import StaticText from '../../../global/StaticText'
import { GlobalContext } from '../../../context/Provider'
import login, { clearAuthState } from '../../../context/actions/auth/login'
import { LOGIN } from '../../../constants/RouteNames'


const Login = () => {
  const { navigate, goBack } = useNavigation()
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  const [staySignIn, setStaySignIn] = useState(false)
  const { authDispatch, authState: { error, loading, data } } = useContext(GlobalContext)
  const onPress = route => route ? navigate(route) : goBack()
  const inptPassword = useRef()
  useFocusEffect(
    useCallback(() => {
      return () => {
        if (data) {
          clearAuthState()(authDispatch)
        }
      }
    }, [data])
  )

  useEffect(() => {
    (async () => {
      const fcmToken = await AsyncStorage.getItem("fcm_token")
      setForm(form => {
        return { ...form, fcmToken: !!fcmToken ? fcmToken : '' }
      })
    })()
    return () => { }
  }, [])


  const onChange = ({ name, value }) => {
    setForm(form => {
      return { ...form, [name]: value }
    })

    if (value !== '') {
      setErrors(prev => {
        return { ...prev, [name]: null }
      })
    } else {
      setErrors(prev => {
        return { ...prev, [name]: StaticText.alert.error }
      })
    }
  }

  const onSubmit = async () => {
    if (!form.email) {
      setErrors(prev => {
        return { ...prev, email: StaticText.alert.error }
      })
    }
    if (!form.password) {
      setErrors(prev => {
        return { ...prev, password: StaticText.alert.error }
      })
    }

    if (form.email && form.password) {
      login(form)(authDispatch)
    }
  }

  useEffect(() => {
    error?.message?.length && Alert.alert(StaticText.alert.error_heading, error?.message, [
      {
        text: StaticText.button.ok, onPress: () => {
          GoogleSignin.signOut().then(() => navigate(LOGIN))
        }
      },
    ])
  }, [error])


  const onClickStaySignIn = () => {
    setStaySignIn(!staySignIn)
    AsyncStorage.removeItem("stay_signin")
    AsyncStorage.setItem("stay_signin", staySignIn ? 'no' : 'yes')
  }

  return (
    <LoginScreen
      onChange={onChange}
      onSubmit={onSubmit}
      errors={errors}
      error={error}
      onPress={onPress}
      inptPassword={inptPassword}
      loading={loading}
      onClickStaySignIn={onClickStaySignIn}
      staySignIn={staySignIn}
    />
  )
}
export default Login