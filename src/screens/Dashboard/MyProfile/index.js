import {
  ActivityIndicator,
  ImageBackground,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppSettings from "../../../global/AppSettings";

import ProfileButtons from "./ProfileButtons";
import StaticText from "../../../global/StaticText";
import Colors from "../../../global/Colors";
import BackBtn from "../../Helper/SvgImg/BackBtn";
import CopyIcon from "../../Helper/SvgImg/CopyIcon";
import YellowPoints from "../../Helper/SvgImg/YellowPoints";
import BluePoints from "../../Helper/SvgImg/BluePoints";
import Clock from "../../Helper/SvgImg/Clock";
import EditSmall from "../../Helper/SvgImg/EditSmall";
import Plus from "../../Helper/SvgImg/Plus";
import {
  HISTORY,
  MY_PROFILE_MANAGE,
  MY_PROFILE_MANAGE_PASSWORD,
  REDEMPTION_CENTRE,
} from "../../../constants/RouteNames";
import styles from "./style";

const MyProfile = ({
  pickDocument,
  data,
  loading,
  onShare,
  onPress,
  onSignOut,
  profileImageLoad,
  copyToClipboard,
}) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image_dark}
      >
        <SafeAreaView>
          <View style={styles.topHeader}>
            <View style={styles.titleHolder}>
              <Pressable style={styles.backWrap} onPress={() => onPress()}>
                <BackBtn />
              </Pressable>
              <Pressable style={styles.titleIconWrap} onPress={() => onPress()}>
                <Text style={styles.pageHeading}>
                  {StaticText.screen.my_profile.heading}
                </Text>
              </Pressable>
            </View>
          </View>
          <ScrollView style={styles.mainScroll}>
            {loading ? (
              <View style={styles.bannerMainWrap}>
                <ActivityIndicator size="large" color={Colors.royal_blue} />
              </View>
            ) : (
              <>
                <View style={styles.nameCard}>
                  <Pressable
                    style={styles.nameContentWrap}
                    onPress={() => pickDocument()}
                  >
                    <LinearGradient
                      colors={[Colors.spring_green, Colors.royal_blue_3]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.profileTitleOuter}
                    >
                      {profileImageLoad ? (
                        <ActivityIndicator
                          size="small"
                          color={Colors.royal_blue}
                        />
                      ) : data?.user?.profile_image ? (
                        <Image
                          source={{
                            uri: `${data?.user?.profile_image}`,
                          }}
                          style={styles.profileImage}
                          resizeMode="cover"
                          resizeMethod="resize"
                          loadingIndicatorSource={
                            <ActivityIndicator
                              size="small"
                              color={Colors.royal_blue}
                            />
                          }
                        />
                      ) : (
                        <Text style={styles.profileTitle}>
                          {data?.user?.name?.match(/\b(\w)/g).join("")}
                        </Text>
                      )}
                    </LinearGradient>
                    {!profileImageLoad && (
                      <View style={styles.editIconWrap}>
                        <EditSmall />
                      </View>
                    )}
                  </Pressable>
                  <Text style={styles.textName}>{data?.user?.name}</Text>
                  <Pressable
                    style={styles.idWrap}
                    onPress={() => copyToClipboard(data?.user?.membership_code)}
                  >
                    <Text style={styles.textId}>
                      {StaticText.screen.my_profile.content.id}:{" "}
                      {data?.user?.membership_code}
                    </Text>
                    <CopyIcon />
                  </Pressable>
                </View>
                <View style={styles.mainBodyWrap}>
                  <LinearGradient
                    colors={[Colors.blue_ribbon, Colors.royal_blue_2]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.couponBanner}
                  >
                    <View style={styles.pointsWrapmain}>
                      <LinearGradient
                        colors={[Colors.blue_ribbon, Colors.royal_blue_2]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.pointsWrap}
                      >
                        <View style={styles.yellowPointsWrap}>
                          <View style={styles.iconWrap}>
                            <YellowPoints />
                          </View>
                          <View style={styles.pointsContent}>
                            <Text style={styles.textDigitPoints}>
                              {data?.user_points?.halofoto_points?.point}
                            </Text>
                            <Text style={styles.textCardSmall}>
                              {data?.user_points?.halofoto_points?.name}
                            </Text>
                          </View>
                        </View>
                      </LinearGradient>
                      <View style={styles.separatorVertical}></View>
                      <LinearGradient
                        colors={[Colors.blue_ribbon, Colors.royal_blue_2]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[styles.pointsWrap, styles.bluePoints]}
                      >
                        <View style={styles.bluePointsWrap}>
                          <View style={styles.iconWrap}>
                            <BluePoints />
                          </View>
                          <View style={styles.pointsContent}>
                            <Text style={styles.textDigitPoints}>
                              {data?.user_points?.blue_points?.point}
                            </Text>
                            <Text style={styles.textCardSmall}>
                              {" "}
                              {data?.user_points?.blue_points?.name}
                            </Text>
                          </View>
                        </View>
                      </LinearGradient>
                    </View>

                    <View style={styles.buttonWrapp}>
                      <Pressable style={styles.btnBox} onPress={() => onPress(HISTORY)}>
                        <Clock />
                        <Text style={styles.textBannerSmall}>
                          {StaticText.screen.my_profile.content.history}
                        </Text>
                      </Pressable>
                      <Pressable style={styles.btnBox} onPress={() => onPress(REDEMPTION_CENTRE)}>
                        <Plus />
                        <Text style={styles.textBannerSmall}>
                          {
                            StaticText.screen.my_profile.content
                              .earn_more_points
                          }
                        </Text>
                      </Pressable>
                    </View>
                  </LinearGradient>
                  <View style={styles.tabWrap}>
                    <ProfileButtons
                      key={`prof-button-${Math.random()}`}
                      menu={{
                        name: "my_profile",
                        label:
                          StaticText.screen.my_profile.content
                            .my_profile_details,
                        color: Colors.azure_radiance_1,
                        route: MY_PROFILE_MANAGE,
                      }}
                      onPress={onPress}
                    />

                    <ProfileButtons
                      key={`prof-button-${Math.random()}`}
                      menu={{
                        name: "change_password",
                        label:
                          StaticText.screen.my_profile.content.change_password,
                        route: MY_PROFILE_MANAGE_PASSWORD,
                      }}
                      onPress={onPress}
                    />

                    <ProfileButtons
                      key={`prof-button-${Math.random()}`}
                      menu={{
                        name: "share_profile",
                        label:
                          StaticText.screen.my_profile.content.invite_friend,
                      }}
                      onPress={onShare}
                    />

                    <ProfileButtons
                      key={`prof-button-${Math.random()}`}
                      menu={{
                        name: "logout",
                        label:
                          StaticText.screen.my_profile.content.logout,
                      }}
                      onPress={onSignOut}
                    />
                  </View>
                </View>
              </>
            )}
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default MyProfile;
