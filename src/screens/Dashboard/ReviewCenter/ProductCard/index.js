import { Image, Pressable, Text, View } from "react-native";
import AppSettings from "../../../../global/AppSettings";
import { REVIEW_CENTER_SINGLE } from "../../../../constants/RouteNames";
import StarYellow from '../../../Helper/SvgImg/StarYellow'
import styles from "./style";
import StaticText from "../../../../global/StaticText";


const ProductCard = ({ item, onPress }) => {

  return (
    <>
      {item && item.id && (
        <Pressable
          onPress={() => onPress(REVIEW_CENTER_SINGLE, { warrantyId: item?.id })}
          unstable_pressDelay={100}
        >
          <View style={[styles.hotDealsSlide, styles.hotDealsSingle]}>
            <View style={styles.productCard}>

              <View style={styles.productListVerical}>
                {item?.product?.product_images && item?.product?.product_images?.length > 0 && (
                  <View style={styles.productWrap}>
                    <Image
                      source={{
                        uri: item?.product?.product_images[0]?.thumbnail,
                      }}
                      loadingIndicatorSource={AppSettings.loader_image}
                      style={styles.image}
                    />
                  </View>
                )}

                <View style={styles.productDetails}>
                  <View style={styles.productDetailsInner}>
                    {item?.product?.product_series?.name?.length && (
                      <View style={styles.lensType}>
                        <Text style={styles.productModel}>
                          {item?.product?.product_series?.name}
                        </Text>
                      </View>
                    )}

                    {item?.product?.compatible_mounts && item?.product?.compatible_mounts?.length &&
                      <Text style={styles.textCompatiableMount}>
                        {item?.product?.compatible_mounts}
                      </Text>
                    }
                  </View>
                  {item?.product?.name?.length && (
                    <Text style={styles.productTitle}>{item?.product?.name}</Text>
                  )}
                  <View style={styles.productDetailsInnerSmall}>
                    {item?.product?.name?.length && (
                      <Text style={styles.textProductModel}>
                        {StaticText.screen.review.content.model} : {item?.product?.model_no}
                      </Text>
                    )}

                    {item?.review?.rating && item?.review?.rating > 0 &&
                      <View style={styles.productReating}>
                        <StarYellow />
                        <Text style={styles.reviews}>
                          {item?.review?.rating?.toFixed(2)}
                        </Text>
                      </View>
                    }

                  </View>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      )}
    </>
  );
};
export default ProductCard;