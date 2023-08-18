import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HOME } from "../../../constants/RouteNames";
import Container from "../../Helper/Container";
import AppSettings from "../../../global/AppSettings";
import StaticText from "../../../global/StaticText";
import styles from "./style";
import LockBG from "../../Helper/SvgImg/LockBG";
import EditIcon from "../../Helper/SvgImg/EditIcon";
import RoundedCornerGradientStyleBlueFullWidth from "../../Helper/Button/RoundedCornerGradientStyleBlueFullWidth";
import NoContentIcon from "../../Helper/SvgImg/NoContent";
import LinearGradient from 'react-native-linear-gradient';

export default function NoContentPage({
  onPress,
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
            <ScrollView
              scrollEventThrottle={16}
              contentContainerStyle={styles.scrollWrap}
              keyboardShouldPersistTaps={"handled"}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.logoWrap}>
                <View style={styles.lockBg}>
                  <LockBG />
                </View>
                <View style={styles.lock}>
                  <NoContentIcon />
                </View>
              </View>
              <View style={styles.contentWrap}>
                <Text style={styles.textContent}>{StaticText.screen.no_content_page.heading}</Text>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
        </LinearGradient>
      {/* </ImageBackground> */}
    </Container>
  );
}