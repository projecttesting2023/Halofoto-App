import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  ScrollView,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";

import RenderHtml from "react-native-render-html";
import AppSettings from "../../../../global/AppSettings";
import StaticText from "../../../../global/StaticText";
import BluePoints from "../../../Helper/SvgImg/BluePoints";
import YellowPoints from "../../../Helper/SvgImg/YellowPoints";
import styles from "./style";
import AnimatedHeader from "../../../Helper/AnimatedHeader";
import Colors from "../../../../global/Colors";
import RoundedCornerGradientStyleBlueFullWidth from "../../../Helper/Button/RoundedCornerGradientStyleBlueFullWidth";
import TickGreen from "../../../Helper/SvgImg/TickGreen";
import VoucherCodeModal from "../../../Helper/Modal/VoucherCodeModal";

const SingleRedemption = ({
  data,
  loading,
  onPress,
  onSubmit,
  reedemVoucherLoading,
  reedemVoucherData,
}) => {

  const { width } = useWindowDimensions();
  const contentDetails = {
    html: `<div style="color:white;word-wrap:break-word;font-size:18px;font-weight:400;">${data?.voucher_details?.content?.length
        ? data?.voucher_details?.content
        : ``
      }</div>`,
  };
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          style={styles.overlayWrap}
          source={AppSettings.background_inner_image_dark}
        >
          <AnimatedHeader
            label={StaticText.screen.voucher_details.heading}
            mainWrapperStyle={styles.topHeader}
            mainWrapperConditionalStyle={[
              styles.topHeaderAdditional,
              styles.topHeaderAnimatedActive,
            ]}
            innerWraperStyle={styles.titleHolder}
            buttonWrapStyle={styles.backWrap}
            labelStyle={styles.pageHeading}
            onPress={onPress}
          />
          <ScrollView style={styles.contentWrap}>
            {loading ? (
              <ActivityIndicator size="large" color={Colors.royal_blue} />
            ) : (
              <>
                {data?.voucher_details && (
                  <>
                    <View style={styles.bannerWrap}>
                      <View style={styles.couponContent}>
                        <Text style={styles.textCardHeading}>
                          {StaticText.screen.voucher_details.content.redeem}
                        </Text>
                        <View style={styles.pointsInnerWrap}>
                          <Text style={styles.textDigitSmall}>
                            {data?.voucher_details?.point}
                          </Text>
                          <Text style={styles.textCardSmall}>
                            {StaticText.screen.voucher_details.content.points}
                          </Text>
                          <View style={styles.piontsIcoBanner}>
                            {data?.voucher_details?.point_category?.id == 1 ? <YellowPoints /> : <BluePoints />}
                          </View>
                        </View>
                        <Text style={styles.textCardContent}>
                          {
                            StaticText.screen.voucher_details.content
                              .total_point
                          }{" "}
                          :
                        </Text>
                        <View style={styles.bannerPointsSmallWrap}>
                          <View style={styles.bannerSmallPointWrap}>
                            <Text style={styles.textDigitBottom}>
                              {data?.user_points?.halofoto_points?.point}
                            </Text>
                            <Text style={styles.textCardBottom}>
                              {StaticText.screen.voucher_details.content.points}
                            </Text>
                            <View style={styles.piontsIcoSmall}>
                              <YellowPoints />
                            </View>
                          </View>
                          <View style={styles.bannerSmallPointWrap}>
                            <Text style={styles.textDigitBottom}>
                              {data?.user_points?.blue_points?.point}
                            </Text>
                            <Text style={styles.textCardBottom}>
                              {StaticText.screen.voucher_details.content.points}
                            </Text>
                            <View style={styles.piontsIcoSmall}>
                              <BluePoints />
                            </View>
                          </View>
                        </View>
                      </View>
                      {data?.voucher_details?.voucher_image &&
                        data?.voucher_details?.voucher_image?.length > 0 && (
                          <View style={styles.imageBox}>
                            <Image
                              source={{
                                uri: `${data?.voucher_details?.voucher_image}`,
                              }}
                              loadingIndicatorSource={AppSettings.loader_image}
                              style={styles.couponCardImg}
                              resizeMode="cover"
                              resizeMethod="resize"
                            />
                          </View>
                        )}
                    </View>
                    {data?.voucher_details?.voucher_category && (
                      <Text style={styles.textContentHeading}>
                        {data?.voucher_details?.voucher_category?.name}
                      </Text>
                    )}
                    {data?.voucher_details?.title && (
                      <Text style={styles.textContentName}>
                        {data?.voucher_details?.title}
                      </Text>
                    )}
                    <View style={styles.contentInnerWrap}>
                      <RenderHtml
                        contentWidth={width}
                        source={contentDetails}
                        enableExperimentalMarginCollapsing={true}
                      />
                    </View>

                    {reedemVoucherData?.message?.length && (
                      <View style={styles.buttonTickWrap}>
                        <TickGreen />
                        <Text style={styles.textBottom}>
                          {
                            StaticText.screen.voucher_details.content
                              .success_text
                          }
                        </Text>
                      </View>
                    )}
                  </>
                )}
              </>
            )}
          </ScrollView>
          {!loading && <VoucherCodeModal data={data} />}
        </ImageBackground>
      </View>
    </>
  );
};

export default SingleRedemption;
