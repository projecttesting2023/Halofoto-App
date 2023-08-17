import React, { useCallback } from "react";
import {
  SafeAreaView,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import AppSettings from "../../../../global/AppSettings";
import styles from "./styles";
import StaticText from "../../../../global/StaticText";
import AnimatedHeader from "../../../Helper/AnimatedHeader";
import Colors from "../../../../global/Colors";
import NoContentPage from "../../../Common/NoContentPage";
import moment from "moment";

const MessageDetails = ({ data, loading, onPress }) => {
  
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.overlayWrap}
        source={AppSettings.background_inner_image_dark}
      >
        <AnimatedHeader
          label={StaticText.screen.message_list.heading}
          mainWrapperStyle={styles.topHeader}
          innerWraperStyle={styles.titleHolder}
          buttonWrapStyle={styles.backWrap}
          labelStyle={styles.pageHeading}
          onPress={onPress}
        />
        <View style={styles.mainScroll}>
          {loading ? (
            <ActivityIndicator size="large" color={Colors.royal_blue} />
          ) : data?.message ? (
            <>
              <View style={[styles.newsCardWrap]}>
                <View style={styles.mainBodyWrap}>
                  <View style={styles.messageListWrap}>
                    <View style={styles.messageCard}>
                      <View style={styles.messageContent}>
                        <Text style={styles.textContentHeader}>
                          {data?.message?.subject}
                        </Text>

                        <View style={styles.messageMeta}>
                          <Text style={styles.textContentTime}>
                            {moment(data?.message?.created_at).format("dddd")}
                          </Text>
                          <View style={styles.metaDots}></View>
                          <Text style={styles.textContentTime}>
                            {moment(data?.message?.created_at).format("HH:mm")}
                          </Text>
                        </View>
                        <Text style={styles.textContent}>
                          {data?.message?.message}
                        </Text>
                      </View>
                    </View>
                        <View style={styles.messageInfo}>
                          <LinearGradient
                            colors={["#4874F7", "#83A7FE"]}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                            style={styles.messageCategory}
                          >
                            <Text style={styles.textMessageCategory}>
                              {data?.message?.message_category?.name}
                            </Text>
                          </LinearGradient>
                        </View>
                  </View>
                </View>
              </View>
            </>
          ) : (
            <>
              <NoContentPage />
            </>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default MessageDetails;
