import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native"

import { SafeAreaView } from "react-native-safe-area-context"
import { LOGIN } from "../../../constants/RouteNames"
import Container from "../../Helper/Container"
import AppSettings from "../../../global/AppSettings"
import StaticText from "../../../global/StaticText"
import InputSmall from "../../Helper/Form/InputSmall"
import Submit from "../../Helper/Button/Submit"
import CountryExtCodeModal from "../../Helper/Modal/CountryExtCodeModal"
import styles from "./style"
import NavigationHeader from "../../Helper/NavigationHeader"
import LinearGradient from 'react-native-linear-gradient';


export default function ForgotPassword({
  form,
  countryList,
  countryListloading,
  onPress,
  onSubmit,
  onChange,
  showLoader,
  errors,
  error,
}) {
  return (
    <Container style={styles.container}>
      {/* <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image}
      > */}
      <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
        <SafeAreaView style={styles.containerWrap}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
            style={styles.containerWrap}
          >
            <NavigationHeader
              previosPageLabel={StaticText.screen.forgot_password.heading}
              previousBtnOnpress={() => onPress(LOGIN)}
            />

            <ScrollView
              scrollEventThrottle={16}
              style={styles.serollWrap}
              keyboardShouldPersistTaps={"handled"}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.formWrapp}>
                <View style={[styles.callWrapp]}>
                  <Text style={[styles.labelText, styles.labelTextSingle]}>
                    {StaticText.screen.forgot_password.form.phone}</Text>
                  <View style={[styles.callWrappInner]}>
                    <CountryExtCodeModal
                      wrapperStyle={[styles.inputWrapSmall]}
                      heading={StaticText.screen.forgot_password.form.country_code}
                      value={
                        form?.phone_country_code?.code
                          ? `${form?.phone_country_code?.code} - ${form?.phone_country_code?.ext_code}`
                          : ``
                      }
                      fields={countryList}
                      loadStatus={countryListloading}
                      onSelect={(value) => {
                        onChange({ name: "phone_country_code", value });
                      }}
                      style={styles}
                      error={
                        errors?.phone_country_code ||
                        error?.errors?.phone_country_code?.[0]
                      }
                    />

                    <InputSmall
                      wrapperStyle={[styles.inputWrapNumber]}
                      labeStyle={styles.labelTextSmall}
                      inputStyle={styles.inputSmall}
                      keyboardType={"phone-pad"}
                      autoCapitalize="none"
                      icon="call"
                      inputContainerStyle={styles.inputContainerSmall}
                      returnKeyType="go"
                      onChangeText={(value) => {
                        onChange({ name: "phone", value });
                      }}
                      style={styles}
                      onSubmitEditing={() => onSubmit}
                      error={errors?.phone || error?.errors?.phone?.[0]}
                    />
                  </View>
                </View>

                <Submit
                  onPress={onSubmit}
                  label={StaticText.button.send}
                  labelStyle={styles.buttonText}
                  btnStyle={styles.buttonWrap}
                  disabled={showLoader}
                  showLoader={showLoader}
                />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
        </LinearGradient>
      {/* </ImageBackground> */}
    </Container>
  )
}
