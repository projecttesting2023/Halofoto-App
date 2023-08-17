import {
  Dimensions,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native"
import WebView from "react-native-webview"
import AppSettings from "../../../global/AppSettings"
import StaticText from "../../../global/StaticText"
import BackBtn from "../../Helper/SvgImg/BackBtn"
import styles from "./SettingsWebFrameStyle"
import { SETTINGS_WEBVIEW_MAIN } from "../../../constants/RouteNames"

const SettingsWebFrame = ({ onPress, uri }) => {
   
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image_dark}
      >
        <View style={styles.topHeader}>
          <Pressable style={styles.titleHolder} onPress={() => onPress(SETTINGS_WEBVIEW_MAIN)}>
            <View style={styles.backWrap}>
              <BackBtn />
            </View>
            {uri ===  'http://103.191.209.121:3001/page/privacy-policy' ? 
              <Text style={styles.pageHeading}>
                {StaticText.screen.settings.tabs.privacy_policy}
              </Text>
              : 
              <Text style={styles.pageHeading}>
                {StaticText.screen.settings.tabs.terms_and_condition}
              </Text>

            }
          </Pressable>
        </View>
        {uri?.length > 0 && <WebView source={{ uri }} />}
      </ImageBackground>
    </View>
  )
}

export default SettingsWebFrame
