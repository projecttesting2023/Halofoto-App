import { useContext, useEffect } from "react";
import auth from '@react-native-firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { GlobalContext } from '../../../context/Provider'
import socialLogin from '../../../context/actions/auth/socialLogin'
import { useNavigation } from '@react-navigation/native'
import AppleLoginScreen from '../../../screens/Auth/AppleLogin'
import { LOGIN } from '../../../constants/RouteNames';



const AppleLogin = () => {
    const { navigate } = useNavigation()
    const { authDispatch, authState: { error, loading, data } } = useContext(GlobalContext)

    useEffect(() => {
        
        (async () => {
            const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGIN,
                requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
            });

            if (!appleAuthRequestResponse.identityToken) {
                navigate(LOGIN)
            }

            const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
            if (credentialState === appleAuth.State.AUTHORIZED) {

                const fcmToken = await AsyncStorage.getItem("fcm_token")
                const { identityToken, nonce, email, user, fullName } = appleAuthRequestResponse;
                const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);
                await auth().signInWithCredential(appleCredential);
                
                let form = {
                    email: !!email ? email : `${user}@apple.com`,
                    name: (!!fullName.familyName && !!fullName.givenName) ? `${fullName.givenName} ${fullName.familyName}` : `Halofoto User`,
                    profile_image: '',
                    logon_type: 'apple',
                    notification_token: fcmToken,
                    social_login_id: user
                }
                socialLogin(form)(authDispatch)
            } else {
                navigate(LOGIN)
            }
        })()
    }, [])
    return (<AppleLoginScreen />)
}

export default AppleLogin