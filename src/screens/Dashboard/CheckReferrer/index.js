import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  ActivityIndicator,
  useColorScheme
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import LinearGradient from 'react-native-linear-gradient';
import AppSettings from "../../../global/AppSettings"
import StaticText from "../../../global/StaticText"
import Input from "../../Helper/Form/Input"

import { WELCOME } from "../../../constants/RouteNames"

import ReferralCode from "../../Helper/SvgImg/ReferralCode"
import TickGreen from "../../Helper/SvgImg/TickGreen"
import styles from "./style"
import RoundedCornerReferralButton from "../../Helper/Button/RoundedCornerReferalButton"
import Colors from "../../../global/Colors"

export default function CheckReferrer({
  onChange,
  onSubmit,
  form,
  loading,
  data,
  onPress,
  error,
}) {

  const theme = useColorScheme()
  const isDarkTheme = theme === 'dark'

  return (
    // <ImageBackground
    //   resizeMode="cover"
    //   style={styles.overlayWrap}
    //   source={AppSettings.background_inner_image}
    // >
    <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
      <View style={styles.modalWrap}>
        <ImageBackground
          source={isDarkTheme ? AppSettings.background_inner_image_dark : AppSettings.background_image}
          style={styles.modalBgWrap}
        >
          <SafeAreaView>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : ""}
              style={styles.container}
            >
              <ScrollView
                keyboardShouldPersistTaps={"handled"}
                showsVerticalScrollIndicator={false}
              >
                <View style={styles.headerContent}>
                  <Text style={[styles.headerText,{color: isDarkTheme ? Colors.white:  Colors.black }]}>
                    {StaticText.screen.check_referrer.heading}
                  </Text>
                  {!loading && data?.status != 1 && (
                    <Pressable onPress={() => onPress(WELCOME)}>
                      <Text style={styles.headerContentText}>
                        {StaticText.button.skip}
                      </Text>
                    </Pressable>
                  )}
                </View>
                <View style={styles.imageWrap}>
                  <ReferralCode />
                </View>

                <Text style={[styles.textInputWrap,{color: isDarkTheme ? Colors.white:  Colors.black }]}>{StaticText.screen.check_referrer.form.heading}</Text>
                <Input
                  wrapperStyle={styles.inputWrap}
                  placeholder={StaticText.screen.check_referrer.form.code}
                  placeholderTextColor={isDarkTheme? Colors.white:  Colors.black}
                  inputStyle={styles.textInput}
                  keyboardType="default"
                  autoCapitalize="none"
                  returnKeyType="go"
                  onSubmitEditing={onSubmit}
                  autoFocus={true}
                  onChangeText={(value) => {
                    onChange({ name: "referral_code", value });
                  }}
                  //onSubmitEditing={() => inptPassword.current.focus()}
                  //error={errors?.email || error?.email?.[0]}
                />
                {!loading && data?.status != 1 && (
                  <View style={styles.buttonWrap}>
                    <RoundedCornerReferralButton
                      label={StaticText.button.insert}
                      onPress={onSubmit}
                      disabled={(typeof form?.referral_code == 'undefined' || form?.referral_code?.length <= 0) ? true : false}
                    />
                  </View>
                )}

                {loading && <ActivityIndicator size="large" />}
                {data?.status == 1 && <TickGreen />}
                <View style={styles.footerTextWrap}>
                  <Text style={[styles.textButtonFooter,,{color: isDarkTheme ? Colors.white:  Colors.black }]}>
                    {StaticText.screen.check_referrer.form.disclaimer}
                  </Text>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </ImageBackground>
      </View>
      </LinearGradient>
    // </ImageBackground>
  );
}
