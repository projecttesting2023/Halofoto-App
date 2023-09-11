import { Text, View, Image, Pressable, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MY_PROFILE } from "../../../constants/RouteNames";
import styles from "./style";
import Colors from "../../../global/Colors";
import AppSettings from "../../../global/AppSettings";
import LogoInner from "../SvgImg/LogoInner";
import StaticText from "../../../global/StaticText";
import { SafeAreaView } from "react-native-safe-area-context";

const DashboardHeader = ({
  profileData = {
    profile_status: true,
    profile_info: null,
  },
  onPress,
}) => {
 
  return (
    <SafeAreaView style={styles.headerWrap}>
      <View style={styles.logoWrap}>
      <LogoInner/>
      </View>
      <Pressable style={styles.profileWrap} onPress={() => onPress(MY_PROFILE)}>
        <View style={styles.profilePoints}>
          <Image source={AppSettings.Points} style={styles.pointsLogo} />
          {profileData?.profile_status ? (
            <ActivityIndicator
              size="small"
              color={Colors.royal_blue}
              // style={{ marginBottom: 16 }}
            />
           
          ) : (
            <Text style={styles.profileTitle}>
              {StaticText.screen.dashboard.header.hello},{" "}
              {profileData?.profile_info?.user?.name}
            </Text>
          )}
        </View>
        {profileData?.profile_info?.user?.profile_image ? (
          <Image
            style={styles.profileTitleOuter}
            source={{
              uri: profileData?.profile_info?.user?.profile_image,
            }}
          />
        ) : (
          <LinearGradient
            colors={[Colors.spring_green, Colors.royal_blue_3]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.profileTitleOuter}
          >
            <Text style={styles.profileTitle}>
              {profileData?.profile_info?.user?.name?.match(/\b(\w)/g).join("")}
            </Text>
          </LinearGradient>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default DashboardHeader;
