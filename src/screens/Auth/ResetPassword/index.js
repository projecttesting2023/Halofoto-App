import {
  ImageBackground,
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
import Input from "../../Helper/Form/Input"
import Submit from "../../Helper/Button/Submit"
import styles from "./style"
import NavigationHeader from "../../Helper/NavigationHeader"
import LinearGradient from 'react-native-linear-gradient';


export default function ResetPassword({
  form,
  inptNewPassword,
  inptConfPassword,
  showLoader,
  onPress,
  onSubmit,
  onChange,
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
              previosPageLabel={StaticText.screen.reset_password.heading}
              previousBtnOnpress={() => onPress(LOGIN)}
            />

            <ScrollView
              scrollEventThrottle={16}
              style={styles.serollWrap}
              keyboardShouldPersistTaps={"handled"}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.formWrapp}>
                <Input
                  wrapperStyle={styles.inputWrapp}
                  labelText={StaticText.screen.reset_password.form.new_password}
                  labeStyle={styles.labelText}
                  inputStyle={styles.input}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  icon="eye"
                  inputContainerStyle={styles.inputContainer}
                  returnKeyType="next"
                  onChangeText={(value) => {
                    onChange({ name: "new_password", value });
                  }}
                  autoFocus={true}
                  ref={inptNewPassword}
                  onSubmitEditing={() => inptConfPassword.current.focus()}
                  error={errors?.new_password || error?.errors?.new_password?.[0]}
                />

                <Input
                  wrapperStyle={styles.inputWrapp}
                  labelText={StaticText.screen.reset_password.form.confirm_password}
                  labeStyle={styles.labelText}
                  inputStyle={styles.input}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  icon="eye"
                  inputContainerStyle={styles.inputContainer}
                  returnKeyType="go"
                  onChangeText={(value) => {
                    onChange({ name: "confirm_password", value });
                  }}
                  ref={inptConfPassword}
                  onSubmitEditing={() => onSubmit}
                  error={errors?.confirm_password || error?.errors?.confirm_password?.[0]}
                />
                <Submit
                  onPress={onSubmit}
                  label={StaticText.button.next}
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
