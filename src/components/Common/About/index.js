import React, { useContext, useEffect, useState } from "react"
import { useIsFocused, useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage"

import AboutScreen from '../../../screens/Common/About'
import aboutUs from "../../../context/actions/common/aboutUs"
import { GlobalContext } from "../../../context/Provider"

const About = () => {
  const isFocused = useIsFocused()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const {
    aboutUsDispatch,
    aboutUsState: { error, loading, data },
  } = useContext(GlobalContext);
  const { navigate } = useNavigation()

  useEffect(() => {
    (async () => {
      try {
        const user = await AsyncStorage.getItem("user")
        if (!!user) {
          setIsLoggedIn(!!user)
        }
      } catch (error) {
      } finally {

      }
    })()
    return () => { }
  }, [])

  useEffect(() => {
    isFocused && (
      aboutUs()(aboutUsDispatch)
    )
  }, [isFocused]);

  const onPress = (route) => navigate(route)

  return (
    <AboutScreen onPress={onPress} data={data} isLoggedIn={isLoggedIn} />
  )
}

export default About
