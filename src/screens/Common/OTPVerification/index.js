import { Text, View, Pressable, ImageBackground, TextInput,useColorScheme } from 'react-native'
import AppSettings from '../../../global/AppSettings';
import StaticText from '../../../global/StaticText';
import styles from './style'
import Colors from '../../../global/Colors';
import LinearGradient from 'react-native-linear-gradient';

const OtpVerification = ({
  pin,
  setPin,
  pin1,
  pin2,
  pin3,
  pin4,
  seconds,
  userData,
  formatedTxt,
  resendOtp
}) => {

  const theme = useColorScheme()
  const isDarkTheme = theme === 'dark'
  
  return (
    // <ImageBackground resizeMode="cover" style={styles.overlayWrap} source={AppSettings.background_inner_image}>
      <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
      <View style={[styles.modalWrap]}>
        <View style={[styles.container]}>
          <View style={[styles.headerContent]}>
            <Text style={[styles.headerText,{color: isDarkTheme ? Colors.black:  Colors.black }]}>{StaticText.screen.otp_verification.heading}</Text>
            {userData?.country_code?.length > 0 && userData?.phone?.length && <Text style={[styles.headerContentText]}>{`${StaticText.screen.otp_verification.sub_heading} +${userData?.country_code} ${userData?.phone?.slice(-4).padStart(userData?.phone?.length, '*')}`}</Text>}
          </View>
          <View style={[styles.inputWrap]}>
            <TextInput
              style={[styles.textWrap,{color: isDarkTheme ? Colors.black:  Colors.black }]}
              maxLength={1}
              keyboardType={'number-pad'}
              ref={pin1}
              value={pin[0]}
              onChangeText={value => {
                if (value?.length) {
                  setPin(pin => [...pin, value])
                  pin2.current.focus()
                } else {
                  setPin(pin => pin.filter((p, index) => index !== 0))
                }
              }}
            ></TextInput>
            <TextInput
              style={[styles.textWrap,{color: isDarkTheme ? Colors.black:  Colors.black }]}
              maxLength={1}
              keyboardType={'number-pad'}
              ref={pin2}
              onChangeText={value => {
                if (value?.length) {
                  setPin(pin => [...pin, value])
                  pin3.current.focus()
                } else {
                  setPin(pin => pin.filter((p, index) => index !== 1))
                  pin1.current.focus()
                }
              }}
              value={pin[1]}
            ></TextInput>
            <TextInput
              style={[styles.textWrap,{color: isDarkTheme ? Colors.black:  Colors.black }]}
              maxLength={1}
              keyboardType={'number-pad'}
              ref={pin3}
              onChangeText={value => {
                if (value?.length) {
                  setPin(pin => [...pin, value])
                  pin4.current.focus()
                } else {
                  setPin(pin => pin.filter((p, index) => index !== 2))
                  pin2.current.focus()
                }
              }}
              value={pin[2]}
            ></TextInput>
            <TextInput
              style={[styles.textWrap,{color: isDarkTheme ? Colors.black:  Colors.black }]}
              maxLength={1}
              keyboardType={'number-pad'}
              ref={pin4}
              onChangeText={value => {
                if (value?.length) {
                  setPin(pin => [...pin, value])
                } else {
                  setPin(pin => pin.filter((p, index) => index !== 3))
                  pin3.current.focus()
                }
              }}
              value={pin[3]}
            ></TextInput>
          </View>

          <View style={[styles.resendOtpWrap]}>
            <Text style={[styles.resendOtpText]}>{`${StaticText.screen.otp_verification.timer_alert} ${seconds} ${StaticText.screen.otp_verification.timer_alert_unit}`}</Text>
            <Text style={[styles.headerContentText]}>{StaticText.screen.otp_verification.resend_otp}</Text>
            <Pressable onPress={resendOtp}>
              <Text style={[styles.resendOtpText]}>{StaticText.button.resend_otp}</Text>
            </Pressable>
          </View>
        </View>
      </View>
      </LinearGradient>
    // </ImageBackground >
  );
}

export default OtpVerification