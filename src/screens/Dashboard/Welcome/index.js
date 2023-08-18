import { LinearGradient } from "expo-linear-gradient"
import { Text, View, ImageBackground, Pressable } from "react-native"
import AppSettings from "../../../global/AppSettings"
import Tick from "../../Helper/SvgImg/Tick"
import StaticText from "../../../global/StaticText"
import styles from "./style"
import RoundedCornerReferralButton from "../../Helper/Button/RoundedCornerReferalButton"

const Welcome = ({onPress, showLoader}) => {
  
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image}
      > */}
      <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
        <View style={styles.contentWrap}>
          <Tick />
          <View style={styles.textContentWrap}>
            <Text style={styles.textSize}>
              {StaticText.screen.welcome.heading}
            </Text>
            <Text style={styles.text}>{StaticText.screen.welcome.content}</Text>
          </View>
        </View>

        <View style={styles.uploadButtonWrap}>
          <RoundedCornerReferralButton
            label={StaticText.button.ok}
            onPress={() => onPress()}
            disabled={false}
            showLoader={showLoader}
          />
        </View>

        </LinearGradient>
      {/* </ImageBackground> */}
    </View>
  );
};
export default Welcome;
