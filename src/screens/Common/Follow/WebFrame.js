import {
  Dimensions,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native"
import WebView from "react-native-webview"
import { DASHBOARD_WEBVIEW_MAIN } from "../../../constants/RouteNames"
import AppSettings from "../../../global/AppSettings"
import StaticText from "../../../global/StaticText"
import BackBtn from "../../Helper/SvgImg/BackBtn"
import styles from "./WebFrameStyle"

const WebFrame = ({ onPress, uri }) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image_dark}
      >
        <View style={styles.topHeader}>
          <Pressable style={styles.titleHolder} onPress={() => onPress(DASHBOARD_WEBVIEW_MAIN)}>
            <View style={styles.backWrap}>
              <BackBtn />
            </View>
            <Text style={styles.pageHeading}>
              {StaticText.screen.follow_us.heading}
            </Text>
          </Pressable>
        </View>
        {uri?.length > 0 && <WebView source={{ uri }}/>}
      </ImageBackground>
    </View>
  )
}

export default WebFrame
