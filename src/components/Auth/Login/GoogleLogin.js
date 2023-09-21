import { useContext, useEffect } from "react";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalContext } from '../../../context/Provider'
import socialLogin from '../../../context/actions/auth/socialLogin'
import { useNavigation } from '@react-navigation/native'
import GoogleLoginScreen from '../../../screens/Auth/GoogleLogin'
import { LOGIN } from '../../../constants/RouteNames';
import env from '../../../config/env'
import { Alert } from "react-native";


const GoogleLogin = () => {
  const { navigate } = useNavigation()
  const { authDispatch, authState: { error, loading, data } } = useContext(GlobalContext)

  useEffect(() => {
    (async () => {
      await GoogleSignin.configure({
        webClientId: env.GOOGLE_CLIENTID,
      });
      await signIn();
    })()
  }, [])

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken, user } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      const fcmToken = await AsyncStorage.getItem("fcm_token")
       //console.log(user, 'data from google signin')
       //Alert.alert(JSON.stringify(user))
      let form = {
        email: user?.email,
        name: user?.name,
        profile_image: user?.photo,
        logon_type: 'google',
        notification_token: fcmToken,
        social_login_id: user?.id
      }
      socialLogin(form)(authDispatch)
    } catch (error) {
      navigate(LOGIN)
    }
  };
  return (<GoogleLoginScreen />)
}

export default GoogleLogin