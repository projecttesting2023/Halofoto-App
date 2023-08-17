import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

import AppSettings from "../../../global/AppSettings";
import CongratsLogo from "../../Helper/SvgImg/CongratsLogo";
import Tick from "../../Helper/SvgImg/Tick";
import styles from "./style";

const RegistrationUpdate = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image}
      >
        <View style={styles.contentWrap}>
          {/* <LinearGradient
            colors={["#114EED", "#6A50E7"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.logoWrap}
          >
            <Tick />
          </LinearGradient>
          <View style={styles.textContentWrap}>
            <Text style={styles.textSize}>Thank you!</Text>
            <Text style={styles.text}>
              Our team will review your document. We will notify you when its
              approved.
            </Text>
          </View> */}
          <View style={styles.congratsLogoWrap}>
          <CongratsLogo/>
          </View>
          <View style={styles.textContentWrap}>
            <Text style={styles.textSize}>Congratulations!</Text>
            <View style={styles.pointsWrap}>
            <Text style={styles.textPointsSize}>1,000</Text>
            <Text style={styles.text1}>Points</Text>
            </View>
            <Text style={styles.text}>
            You have have collected your points by registering your products.
            </Text>
          </View>
        </View>
        <View style={styles.uploadButtonWrap}>
          <LinearGradient
            colors={["#114EED", "#6A50E7"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonWrap}
          >
            <Text
              // title="Log In"
              style={styles.buttonText}
              // onPress={() => onPress(REGISTER_PRODUCT)}
            >
              Ok
            </Text>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
};
export default RegistrationUpdate;
