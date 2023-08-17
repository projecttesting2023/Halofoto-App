import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  TextInput,
  SafeAreaView
} from "react-native";


import Container from "../../Helper/Container";
import AppSettings from "../../../global/AppSettings";
import StaticText from "../../../global/StaticText";
import styles from "./eRepairStyle";
import RoundedCornerGradientStyleBlueFullWidth from "../../Helper/Button/RoundedCornerGradientStyleBlueFullWidth";
import AnimatedHeader from "../../Helper/AnimatedHeader";

export default function ERepair({
  onPress,
  onSubmit,
  onChange,
  errors,
  error,
  loading,
  form
}) {
  return (
    <Container style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image}
      >
        <SafeAreaView>
        <AnimatedHeader
          label={StaticText.screen.my_product_list.content.e_repair}
          mainWrapperStyle={styles.topHeader}
          innerWraperStyle={styles.titleHolder}
          buttonWrapStyle={styles.backWrap}
          labelStyle={styles.pageHeading}
          onPress={onPress}
        />
        <ScrollView
          contentContainerStyle={styles.scrollWrap}
          keyboardShouldPersistTaps={"handled"}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formOuterWrap}>
            <Text style={styles.textInputHeader}>{StaticText.screen.e_repair.content.subject}</Text>
            <View style={styles.formWrapp}>

              <TextInput
                style={styles.textInput}
                onChangeText={(value) => {
                  onChange({ name: "subject", value });
                }}
                error={errors?.subject || error?.subject?.[0]}
                value={form?.subject}
              />
            </View>
              <Text style={styles.textInputHeader}>{StaticText.screen.e_repair.content.message}</Text>
            <View style={styles.formWrappMessage}>
              <TextInput
                editable
                multiline
                labelText={StaticText.screen.login.form.password}
                style={styles.textInput}
                onChangeText={(value) => {
                  onChange({ name: "message", value });
                }}
                value={form?.message}
              />
            </View>
           
          </View>
          <View style={styles.buttonWrap}>
            <RoundedCornerGradientStyleBlueFullWidth
              onPress={onSubmit}
              label={StaticText.button.submit}
              disabled={loading}
              showLoader={loading}
            />
          </View>
        </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </Container>
  );
}
