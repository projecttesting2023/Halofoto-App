import { Image, View, Pressable, Text } from "react-native";
import AppSettings from "../../../../global/AppSettings";
import RoundedCornerGradientStyleBlueFullWidth from "../../../Helper/Button/RoundedCornerGradientStyleBlueFullWidth";
import styles from "./style";
import { REVIEW_CENTER_SINGLE } from "../../../../constants/RouteNames";
import StaticText from "../../../../global/StaticText";

const BannerCard = ({ item, onPress }) => {
  return (
    <>
      {item && item.id && (
        <View style={styles.hotDealsWrap}>
          <View style={styles.hotDealsSlide} >
            <View style={styles.productCard}>
              <View style={styles.productWrap}>
                <Image
                  source={{
                    uri: item?.product?.product_images[0]?.thumbnail,
                  }}
                  loadingIndicatorSource={AppSettings.loader_image}
                  style={styles.productImg}
                />
              </View>
              <View style={styles.productDetails}>
                <Text style={styles.productTitle} numberOfLines={2}>{item?.product?.name}</Text>
                <View style={styles.productDetailsInner}>
                  <Text style={styles.productModel}>
                    {StaticText.screen.review.content.model} {item?.product?.model_no}
                  </Text>
                  <View style={styles.productReating}></View>
                </View>
                <View style={styles.productDetailsInner}>
                  <View style={styles.lensType}>
                    <Text style={styles.productModel}>
                      {item?.product?.product_series?.name}
                    </Text>
                  </View>
                  <Text style={styles.productModel}>
                    {item?.product?.compatible_mounts}
                  </Text>
                </View>
                <RoundedCornerGradientStyleBlueFullWidth label={StaticText.screen.review.content.review} onPress={() => onPress(REVIEW_CENTER_SINGLE, { warrantyId: item?.id })} style={styles.buttonWrap} unstable_pressDelay={100} />
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default BannerCard;
