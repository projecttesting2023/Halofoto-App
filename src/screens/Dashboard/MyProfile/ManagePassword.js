import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Animated,
  ActivityIndicator,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Container from "../../Helper/Container";
import AppSettings from "../../../global/AppSettings";
import StaticText from "../../../global/StaticText";
import Colors from "../../../global/Colors";
import Input from "../../Helper/Form/Input";
import InputSmall from "../../Helper/Form/InputSmall";
import Submit from "../../Helper/Button/Submit";
import NavigationHeader from "../../Helper/NavigationHeader";

import styles from "./manageProfileStyle";
import RoundedCornerGradientStyleBlueFullWidth from "../../Helper/Button/RoundedCornerGradientStyleBlueFullWidth";

const ManageProfile = ({
  onChange,
  onSubmit,
  inptNewPassword,
  inptConfirmPassword,
  form,
  errors,
  error,
  onPress,
  loading,
}) => {
  let AnimatedHeader = new Animated.Value(0);
  const Header_Maximum_Height = 56;
  const Header_Min_Height = 56;

  return (
    <Container style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image}
      >
        <SafeAreaView style={styles.containerWrap}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
            style={styles.containerWrap}
          >
            <NavigationHeader
              AnimatedHeader={AnimatedHeader}
              headerMaxHeight={Header_Maximum_Height}
              headerMinHeight={Header_Min_Height}
              previosPageLabel={StaticText.screen.manage_password.heading}
              previousBtnOnpress={() => onPress()}
            />

            <ScrollView
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: { y: AnimatedHeader },
                    },
                  },
                ],
                { useNativeDriver: false }
              )}
              style={styles.serollWrap}
              keyboardShouldPersistTaps={"handled"}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.formWrapp}>
                <Input
                  wrapperStyle={styles.inputWrapp}
                  labelText={StaticText.screen.manage_password.form.password}
                  labeStyle={styles.labelText}
                  inputStyle={styles.input}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  icon="eye"
                  inputContainerStyle={styles.inputContainer}
                  returnKeyType="next"
                  onChangeText={(value) => {
                    onChange({ name: "password", value });
                  }}
                  autoFocus={true}
                  onSubmitEditing={() => inptNewPassword.current.focus()}
                  error={errors?.password || error?.errors?.password?.[0]}
                  value={form?.password ? form?.password : ``}
                />

                <Input
                  wrapperStyle={styles.inputWrapp}
                  labelText={
                    StaticText.screen.manage_password.form.new_password
                  }
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
                  ref={inptNewPassword}
                  onSubmitEditing={() => inptConfirmPassword.current.focus()}
                  error={
                    errors?.new_password || error?.errors?.new_password?.[0]
                  }
                  value={form?.new_password ? form?.new_password : ``}
                />

                <Input
                  wrapperStyle={styles.inputWrapp}
                  labelText={
                    StaticText.screen.manage_password.form.confirm_password
                  }
                  labeStyle={styles.labelText}
                  inputStyle={styles.input}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  icon="eye"
                  inputContainerStyle={styles.inputContainer}
                  returnKeyType="next"
                  onChangeText={(value) => {
                    onChange({ name: "confirm_password", value });
                  }}
                  ref={inptConfirmPassword}
                  onSubmitEditing={onSubmit}
                  error={
                    errors?.confirm_password ||
                    error?.errors?.confirm_password?.[0]
                  }
                  value={form?.confirm_password ? form?.confirm_password : ``}
                />
                <View style={styles.buttonWrap}>
                  <RoundedCornerGradientStyleBlueFullWidth
                    onPress={onSubmit}
                    label={StaticText.button.update_profile}
                    disabled={loading}
                    showLoader={loading}
                  />
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </Container>
  );
};

export default ManageProfile;
