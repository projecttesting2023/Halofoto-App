import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from '@react-native-firebase/messaging';
// import { Alert } from "react-native";
import Toast from "react-native-root-toast";
import { navigate } from './NavigationService';
import { MESSAGE_LIST, MESSAGE_DETAILS, VOUCHER, VOUCHER_DETAILS } from "../constants/RouteNames";

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        getFcmToken()
    }
}

const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcm_token')
    if (!fcmToken) {
        try {
            fcmToken = await messaging().getToken()
            if (fcmToken) {
                AsyncStorage.setItem('fcm_token', fcmToken)
            }
        } catch (error) {

        }
    }
}

export const notificationListener = async () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        const { navigation, param } = remoteMessage.data;
        switch (navigation) {
            case 'MESSAGE_LIST':
                navigate(MESSAGE_LIST)
                break;
            case 'MESSAGE_DETAILS':
                navigate(MESSAGE_DETAILS, param)
                break;
            case 'VOUCHER':
                navigate(VOUCHER)
                break;
            case 'VOUCHER_DETAILS':
                navigate(VOUCHER_DETAILS, param)
                break;
        }
        //console.log(navigation, param)
        // !!remoteMessage?.data?.navigation &&
        //     navigate(MESSAGE_LIST, !!remoteMessage?.data?.param && remoteMessage?.data?.param)
        // navigate(navigation, param)
    });
    messaging().onMessage(async remoteMessage => {
        Toast.show(remoteMessage.notification.body, {
            position: Toast.positions.TOP
        })
        // Alert.alert('Notification', remoteMessage.notification.body)
    })
    messaging().getInitialNotification().then(remoteMessage => {
        // navigate(MESSAGE_LIST)
    }).catch(err => { });
}