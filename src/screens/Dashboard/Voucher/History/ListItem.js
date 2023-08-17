import { View, Image, Text, Pressable, ImageBackground } from "react-native";
import moment from "moment";
import { VOUCHER_DETAILS } from "../../../../constants/RouteNames";
import StaticText from "../../../../global/StaticText";
import AppSettings from "../../../../global/AppSettings";
import YellowPoints from "../../../Helper/SvgImg/YellowPoints";
import BluePoints from "../../../Helper/SvgImg/BluePoints";
import styles from "./listingStyle";
import TickGreen from "../../../Helper/SvgImg/TickGreen";
import Colors from "../../../../global/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const ListItem = ({ item, onPress }) => {
  return (
    <Pressable style={styles.newsCard}>
      <ImageBackground
        resizeMode="cover"
        style={styles.couponCardMain}
        source={AppSettings.coupon_background}
      >
        <SafeAreaView>
        <View style={styles.couponWrapp}>
          {item?.voucher_image && (
            <View style={styles.imageBox}>
              <Image
                source={{
                  uri: `${item.voucher_image}`,
                }}
                loadingIndicatorSource={AppSettings.loader_image}
                style={styles.couponCardImg}
                resizeMode="cover"
                resizeMethod="resize"
              />
            </View>
          )}

          <View style={styles.couponCardContent}>
            {item?.voucher_category?.name && (
              <Text style={styles.couponCategory}>
                {item?.voucher_category?.name}
              </Text>
            )}
            {item?.point && (
              <View style={styles.pointsWrapCard}>
                <Text style={styles.couponPoints}>{item?.point}</Text>
                <View style={styles.pountsWrappBadch}>
                  <Text style={styles.couponPointsSmall}>
                    {StaticText?.screen?.redemption_centre?.content?.points}
                  </Text>
                  <View style={styles.pountsBadch}>
                    {item?.point_category_id == 1 ? (
                      <YellowPoints />
                    ) : (
                      <BluePoints />
                    )}
                  </View>
                </View>
              </View>
            )}
            <Text style={styles.couponTitle}>{item?.title}</Text>
            {item?.expiry_date && (
              <View style={styles.validWrapp}>
                {item?.voucher_use_status == 1 ? (
                  <>
                    <Text style={styles.ValidDate}>
                      {StaticText?.screen?.redemption_centre?.content?.used}{" "}
                    </Text>
                    <Text style={styles.ValidDate}>
                      {moment(item?.voucher_used_at).format("Do MMM YY")}
                    </Text>
                  </>
                ) : (
                  <>
                    <Text style={styles.ValidDate}>
                      {moment(item?.expiry_date) < moment()
                        ? StaticText?.screen?.redemption_centre?.content
                            ?.expired
                        : StaticText?.screen?.redemption_centre?.content
                            ?.validity}
                    </Text>
                    <Text style={styles.ValidDate}>
                      {moment(item?.expiry_date).format("Do MMM YY")}
                    </Text>
                  </>
                )}
              </View>
            )}
          </View>
          <View style={[styles.tickSvg]}>
            <TickGreen color={Colors.white} />
          </View>
        </View>
        </SafeAreaView>
      </ImageBackground>
    </Pressable>
  );
};
export default ListItem;
