import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import appleAuth from '@invertase/react-native-apple-authentication';
import { logout } from "../context/actions/auth/login"

export const manageUserControl = async (backgroundStateTimer, profileData, authDispatch) => {

    const backgroundDuration = (new Date().getTime() - backgroundStateTimer) / 1000

    if (backgroundDuration > 300) {
        AsyncStorage.removeItem("user")
        AsyncStorage.removeItem("token")
        AsyncStorage.removeItem("otp")
        AsyncStorage.removeItem("fcmToken")
        AsyncStorage.removeItem("background_duration")
        AsyncStorage.removeItem("stay_signin")

        if (!!profileData?.user?.logon_type && (profileData?.user?.logon_type == 'google' || profileData?.user?.logon_type == 'apple' || profileData?.user?.logon_type == 'facebook')) {
            profileData?.user?.logon_type == 'google' && await GoogleSignin.signOut()
            profileData?.user?.logon_type == 'apple' && await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGOUT,
            });
            await auth().signOut();
        }
        logout()(authDispatch)
    }
}