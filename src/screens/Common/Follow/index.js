import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import LinearGradient from 'react-native-linear-gradient';
import AppSettings from "../../../global/AppSettings"
import StaticText from "../../../global/StaticText"
import BackBtn from "../../../screens/Helper/SvgImg/BackBtn"
import LogoWhite from "../../../screens/Helper/SvgImg/LogoWhite"
import styles from "./style"
import env from '../../../config/env'

import { DASHBOARD } from "../../../constants/RouteNames"
import FollowTabs from "./FollowTabs"

export default function Follow({
  onPress,
  onPressFrame,
  navMenus
}) {
  return (
    <>
      {/* <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image_dark}
      > */}
   <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
        <SafeAreaView>
          <View style={styles.topHeader}>
            <Pressable
              style={styles.titleHolder}
              onPress={() => onPress(DASHBOARD)}
            >
              <View style={styles.backWrap}>
                <BackBtn />
              </View>
              <Text style={styles.pageHeading}>
                {StaticText.screen.follow_us.heading}
              </Text>
            </Pressable>
          </View>
          <ScrollView contentContainerStyle={styles.contentWrap}>
            <LogoWhite />
            <View style={styles.tabWrap}>
              {navMenus.length && navMenus.map((item, index) => <FollowTabs key={item.name} menu={item} onPressFrame={onPressFrame} />)}
            </View>
          </ScrollView>
        </SafeAreaView>
        </LinearGradient>
      {/* </ImageBackground> */}
    </>
  );
}
