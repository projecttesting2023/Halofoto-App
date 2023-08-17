import { useContext, useEffect } from "react";
import auth from '@react-native-firebase/auth';
import { LoginManager, AuthenticationToken, Profile } from 'react-native-fbsdk-next';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native'
import { sha256 } from 'react-native-sha256'
import { GlobalContext } from '../../../context/Provider'
import socialLogin from '../../../context/actions/auth/socialLogin'
import FacebookLoginScreen from '../../../screens/Auth/FacebookLogin'
import { LOGIN } from '../../../constants/RouteNames';


const FacebookLogin = () => {
  const { navigate } = useNavigation()
  const { authDispatch, authState: { error, loading, data } } = useContext(GlobalContext)

  useEffect(() => {
    (async () => {
      await signIn();
    })()
  }, [])

  const signIn = async () => {
    try {
      const nonce = '123456';
      const nonceSha256 = await sha256(nonce);
      const result = await LoginManager.logInWithPermissions(
        ['public_profile', 'email'],
        'limited',
        nonceSha256,
      );
      const data = await AuthenticationToken.getAuthenticationTokenIOS();
      const facebookCredential = auth.FacebookAuthProvider.credential(data.authenticationToken, nonce);
      await auth().signInWithCredential(facebookCredential);

      const currentProfile = await Profile.getCurrentProfile()
      
      // const fcmToken = await AsyncStorage.getItem("fcm_token")
      // let form = {
      //   email: user?.email,
      //   name: user?.name,
      //   profile_image: user?.photo,
      //   logon_type: 'google',
      //   notification_token: fcmToken,
      //   social_login_id: user?.id
      // }
      // socialLogin(form)(authDispatch)
    } catch (error) {
      navigate(LOGIN)
    }

  }



  return (<FacebookLoginScreen />)
}
export default FacebookLogin