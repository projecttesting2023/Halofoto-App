import {
  ImageBackground,
  ActivityIndicator,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Container from "../../Helper/Container"
import AppSettings from "../../../global/AppSettings"
import styles from "./style"
import LinearGradient from 'react-native-linear-gradient';

export default function AppleLogin({
  signIn
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
          <ActivityIndicator size="large" color={AppSettings.activity_indicator_color} />
        </SafeAreaView>
        </LinearGradient>
      {/* </ImageBackground> */}
    </Container>
  )
}
