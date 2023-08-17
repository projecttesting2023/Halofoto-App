import { View, Image, Text, Pressable } from 'react-native'
// import { NEWS_DETAILS } from "../../../constants/RouteNames"

import StaticText from '../../../global/StaticText'
import AppSettings from '../../../global/AppSettings'
import styles from "./style"
import { PRODUCT_CATALOG_DETAILS } from '../../../constants/RouteNames'

const ListItem = ({ item, onPress }) => {
    return (
        <Pressable onPress={() => onPress(PRODUCT_CATALOG_DETAILS, {
            productId: item?.id
        })} unstable_pressDelay={100}>
            <View style={[styles.hotDealsSlide, styles.hotDealsList]}>
                <View style={[styles.productCard, styles.productCardSingle]}>
                    <View style={styles.productListVerical}>
                        {item?.product_images && item?.product_images?.length > 0 && <View style={[styles.productWrap, styles.productWrapSingle]}>
                            <Image
                                source={{
                                    uri: item?.product_images[0]?.path,
                                }}
                                loadingIndicatorSource={AppSettings.loader_image}
                                style={[styles.productImg, styles.productImgSmall]}
                            />
                        </View>}
                        <View style={[styles.productDetails, styles.productDetails]}>
                            <View style={styles.productDetailsInner}>
                                {item?.product_series?.name?.length && (
                                    <View style={styles.lensType}>
                                        <Text style={styles.productModel}>
                                            {item?.product_series?.name}
                                        </Text>
                                    </View>
                                )}

                                {item?.compatible_mounts &&
                                    <Text style={styles.textCompatiableMount}>
                                        {item?.compatible_mounts}
                                    </Text>}
                            </View>
                            {item?.name && (
                                <Text style={styles.productTitle}>{item?.name}</Text>
                            )}
                            <View style={styles.productDetailsInnerSmall}>
                                {item?.model_no && (
                                    <Text style={styles.textProductModel}>
                                        {StaticText.screen.product_catelog.content.model}: {item?.model_no}
                                    </Text>
                                )}
                                {item?.rating && item?.rating?.length > 0 &&
                                    <View style={styles.productReating}>
                                        <Image
                                            source={AppSettings.Star}
                                            style={styles.starRating}
                                        />
                                        <Text style={styles.reviews}>
                                            {item?.rating}
                                        </Text>
                                    </View>}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}
export default ListItem