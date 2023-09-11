import React from "react"
import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  Pressable,
  Linking,
  Platform,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Container from "../../Helper/Container"
import AppSettings from "../../../global/AppSettings"
import StaticText from "../../../global/StaticText"
import styles from "./style"
import LinearGradient from 'react-native-linear-gradient';

import { DASHBOARD, LOGIN, SOFTWARE_LICENSE } from "../../../constants/RouteNames"
import BackBtn from "../../Helper/SvgImg/BackBtn"
import CheckBox from "../../Helper/SvgImg/CheckBox"
import CheckBoxTick from "../../Helper/SvgImg/CheckBoxTick"
import Colors from "../../../global/Colors"

const Settings = ({
  onPress,
  onPressFrame,
  navMenus,
  songs,
  previewNotification,
  loading,
  currentNotificationSound,
  isLoggedIn,
  trackLoading
}) => {

  return (
    <Container style={styles.container}>
      {/* <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image}
      > */}
      <LinearGradient colors={['#284369', '#162B4D', '#1C387E', '#051434']} style={styles.overlayWrap}>
        <SafeAreaView>
          <View style={styles.topHeader}>
            <Pressable
              style={styles.titleHolder}
              onPress={() => onPress(isLoggedIn ? DASHBOARD : LOGIN)}
            >
              <View style={styles.backWrap}>
                <BackBtn />
              </View>
              <Text style={styles.pageHeading}>
                {StaticText.screen.settings.heading}
              </Text>
            </Pressable>
          </View>
          <ScrollView
            style={styles.scrollWrap}
            keyboardShouldPersistTaps={"handled"}
          >
            <View style={styles.buttonSwitchWrap}>
              <Text style={styles.textLink}>
                {StaticText.screen.settings.tabs.settings}
              </Text>
              <Text style={styles.textLinkSmall} onPress={() => Linking.openSettings()}>
                {StaticText.screen.settings.notification_txt}
              </Text>
            </View>

            {isLoggedIn &&
              <>
              {Platform.OS === 'android' ? 
                <View style={styles.tuneWrap}>
                  <Text style={styles.textHeadingDropDown}>
                    {StaticText.screen.settings.tabs.sound}
                  </Text>
                  {!!songs && songs.length && !trackLoading && songs.map(song =>
                    <Pressable
                      style={styles.checkBoxWrap}
                      onPress={() => previewNotification(song)}
                      key={song.id}
                    >
                      {!!currentNotificationSound && currentNotificationSound == song?.sound ?
                        <CheckBoxTick stroke={Colors.white} />
                        :
                        <CheckBox stroke={Colors.white} />
                      }
                      <Text style={styles.textCategory}>{song?.title}</Text>
                    </Pressable>
                  )}
                </View>:
                <Pressable onPress={()=>Linking.openSettings()}>
                  <Text style={[styles.textConditionLink,{marginLeft:20}]}>Settings</Text>
                </Pressable>
                }
                <View style={styles.conditionWrap} >
                  {navMenus.length && navMenus.map((item, index) =>
                    <Text style={styles.textConditionLink} key={index} onPress={() => onPressFrame(item.url)}>
                      {item.label}
                    </Text>
                  )}
                  {/* <Text style={styles.textConditionLink} onPress={() => onPress(SOFTWARE_LICENSE)} >
                  {StaticText.screen.settings.tabs.software_license}
                  </Text> */}
                </View>
              </>
            }
          </ScrollView>
        </SafeAreaView>
        </LinearGradient>
      {/* </ImageBackground> */}
    </Container>
  )
}
export default Settings