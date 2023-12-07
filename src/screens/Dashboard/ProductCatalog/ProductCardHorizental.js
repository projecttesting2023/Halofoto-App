import { View, Image, Text, Pressable } from "react-native";
import { PRODUCT_CATALOG_DETAILS } from "../../../constants/RouteNames";
import StaticText from "../../../global/StaticText";
import styles from "./style";
import AppSettings from "../../../global/AppSettings";

const ProductCardHorizental = ({ item, onPress }) => {
  //console.log(item?.product_images[0]?.path)
  return (
    <Pressable
      onPress={() =>
        onPress(PRODUCT_CATALOG_DETAILS, {
          productId: item?.id,
        })
      }
      unstable_pressDelay={100}
    >
      <View style={styles.hotDealsSlide}>
        <View style={styles.productCard}>
          <View style={styles.categoryTagWrap}>
            <Text style={styles.categoryTag}>
             {StaticText.screen.product_catelog.content.deal_list_heading}
            </Text>
          </View>
          {item?.product_images && item?.product_images?.length > 0 && (
            <View style={styles.productWrap}>
              {(item?.product_images && item?.product_images[0]) ? (
                <Image
                  source={{
                    uri: item?.product_images[0]?.path,
                  }}
                  loadingIndicatorSource={AppSettings.loader_image}
                  style={[styles.productImg, styles.productImgSmall]}
                />
              ) : (
                <Image
                  source={AppSettings.noImage}
                  style={[styles.productImg, styles.productImgSmall]}
                />
              )}
            </View>
          )}

          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>{item?.name}</Text>
            <View style={styles.productDetailsInner}>
              {item?.model_no && (
                <Text style={styles.productModel}>{item?.model_no}</Text>
              )}

              {item?.rating && item?.rating?.length > 0 && (
                <View style={styles.productReating}>
                  <Image source={AppSettings.Star} style={styles.starRating} />
                  <Text style={styles.reviews}>{item?.rating}</Text>
                </View>
              )}
            </View>
            <View style={styles.productDetailsInner}>
              {item?.product_series?.name && (
                <View style={styles.lensType}>
                  <Text style={styles.productModel}>
                    {item.product_series.name}
                  </Text>
                </View>
              )}

              {item?.compatible_mounts && (
                <Text style={styles.productModel}>
                  {item.compatible_mounts}
                </Text>
              )}
            </View>
            <View style={[styles.productDetailsInner, styles.priceWrap]}>
              {item?.original_price && (
                <View style={styles.originalPrice}>
                  <Text style={styles.priceTag}>
                    {item?.selling_price?.length
                      ? StaticText.screen.product_catelog.content.selling_price
                      : StaticText.screen.product_catelog.content.price}
                  </Text>
                  <Text style={styles.price}>
                    {StaticText.currency} {item.original_price}
                  </Text>
                </View>
              )}

              {item?.selling_price && item?.selling_price?.length && (
                <Text style={styles.salePrice}>
                  {StaticText.currency} {item?.selling_price}
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCardHorizental;
