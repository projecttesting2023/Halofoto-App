import React, { useContext, useEffect, useState, useRef } from "react"
import { ActivityIndicator, AppState, Linking, PermissionsAndroid, Platform } from "react-native"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as Font from "expo-font"
import { RootSiblingParent } from "react-native-root-siblings"
import { GlobalContext } from "../context/Provider"
import AuthNavigator from "./AuthNavigator"
import DashboardVerificationNavigator from "./DashboardVerificationNavigator"
import DashboardTabNavigator from "./DashboardTabNavigator"
import DashboardReferrerNavigator from "./DashboardReferrerNavigator"
import AppSettings from "../global/AppSettings"
import AuthWelcomeNavigator from "./AuthWelcomeNavigator"
import { requestUserPermission, notificationListener } from "../helpers/notificationServices"
import { navigationRef } from '../helpers/NavigationService';
import { manageUserControl } from "../helpers/AppStateAuth"

const AppNavContainer = () => {
  const {
    authState: { isLoggedIn, isLoggedOut },
    welcomeState: { showGreet },
    myProfileState: { profileError, profileLoading, profileData },
    authDispatch
  } = useContext(GlobalContext)

  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn)
  const [isFontLoaded, setIsFontLoaded] = useState(false)
  const [showWelcome, setShowWelcome] = useState(1)
  const [authLoaded, setAuthLoaded] = useState(false)
  const [phoneNoVerified, setPhoneNoVerified] = useState(0)
  const [userLogonType, setUserLogonType] = useState(null)

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {

    (async () => {
      try {
        const user = await AsyncStorage.getItem("user")
        const show_welcome_screen = await AsyncStorage.getItem("show_welcome")
        let show_welcome_screen_data = JSON.parse(show_welcome_screen)
        if (show_welcome_screen_data == 0) {
          setShowWelcome(show_welcome_screen_data)
        }

        if (user) {
          let user_data = JSON.parse(user)
          setIsAuthenticated(true)
          setPhoneNoVerified(user_data ? (user_data?.logon_type == 'general' ? user_data?.phone_verify_status : show_welcome_screen == 1 ? 1 : 0) : 0)
          setUserLogonType(user_data ? user_data?.logon_type : null)
        } else {
          setIsAuthenticated(false)
        }
      } catch (error) {
      } finally {
        setAuthLoaded(true)
      }
    })()
    return () => { }
  }, [isLoggedIn, showGreet, isLoggedOut])

  console.log('isAuthenticated', isAuthenticated)

  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync({
          "Montserrat-Bold": require("../assets/Fonts/Montserrat/Montserrat-Bold.ttf"),
          "Montserrat-ExtraLight": require("../assets/Fonts/Montserrat/Montserrat-ExtraLight.ttf"),
          "Montserrat-Light": require("../assets/Fonts/Montserrat/Montserrat-Light.ttf"),
          "Montserrat-Medium": require("../assets/Fonts/Montserrat/Montserrat-Medium.ttf"),
          "Montserrat-Regular": require("../assets/Fonts/Montserrat/Montserrat-Regular.ttf"),
          "Montserrat-SemiBold": require("../assets/Fonts/Montserrat/Montserrat-SemiBold.ttf"),
        })
      } catch (e) {
      } finally {
        setIsFontLoaded(true)
      }
    })()
  }, [])


  useEffect(() => {
    let OsVer = Platform.constants['Release']
    if (Platform.OS == 'android' && OsVer > 12) {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS).then((res) => {
        if (!!res && res == 'granted') {
          requestUserPermission()
          notificationListener()
        }
      }).catch(error => { })
    } else {
      requestUserPermission()
      notificationListener()
    }
  }, [])

  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', nextAppState => {
  //     isAuthenticated && handleStateChange(nextAppState)
  //     appState.current = nextAppState;
  //     setAppStateVisible(appState.current)
  //   });
  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  const handleStateChange = async newState => {
    if (newState === "active") {
      let backgroundStateTimer = await AsyncStorage.getItem("background_duration")
      let staySignin = await AsyncStorage.getItem("stay_signin")
      staySignin == 'yes' && await manageUserControl(backgroundStateTimer, profileData, authDispatch)
    } else {
      AsyncStorage.removeItem("background_duration")
      AsyncStorage.setItem("background_duration", new Date().getTime().toString())
    }
  }

  return (
    <>
      <StatusBar
        style={AppSettings.statusbar_bar_style}
        backgroundColor={AppSettings.statusbar_background_color}
        translucent={AppSettings.statusbar_bar_translucent}
      />
      {console.log(userLogonType)}
      <RootSiblingParent>
        {authLoaded && isFontLoaded ? (
          <NavigationContainer ref={navigationRef}>
            {isAuthenticated ? (
              phoneNoVerified == 1 ? (
                <DashboardTabNavigator />
              ) : userLogonType == "general" ? (
                <DashboardVerificationNavigator />
              ) : (
                <DashboardReferrerNavigator />
              )
            ) : showWelcome == 1 ? (
              <AuthWelcomeNavigator />
            ) : (
              <AuthNavigator />
            )}
          </NavigationContainer>
        ) : (
          <ActivityIndicator
            size="large"
            color={AppSettings.activity_indicator_color}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />
        )}
      </RootSiblingParent>
    </>
  )
}
export default AppNavContainer
