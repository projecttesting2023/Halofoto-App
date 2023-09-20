import {
    SafeAreaView,
    Text,
    View,
    Image,
    ImageBackground,
    Pressable,
    ActivityIndicator,
} from "react-native"
// import { REVIEW_LIST } from "../../../constants/RouteNames"
import AppSettings from "../../../global/AppSettings"
import StaticText from "../../../global/StaticText"
import RoundedCornerGradientStyleBlueFullWidth from "../../Helper/Button/RoundedCornerGradientStyleBlueFullWidth"
import BackBtn from "../../Helper/SvgImg/BackBtn"
import ReviewDetailsStar from "../../Helper/SvgImg/ReviewDetailsStar"
import ReviewDetailsBlankStar from "../../Helper/SvgImg/ReviewDetailsBlankStar"
import TickGreen from "../../Helper/SvgImg/TickGreen"
import styles from "./singleReviewstyle"
import Colors from "../../../global/Colors"
import InformationBlue from "../../Helper/SvgImg/InformationBlue"
import { MY_PRODUCT_DETAILS } from "../../../constants/RouteNames"
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from "react-native-gesture-handler"

const ReviewDetails = ({
    data,
    loading,
    starRating,
    setStarRating,
    submitReview,
    reviewLoading,
    reviewData,
    onPress,
    warrantyId,
}) => {
   
    const listRating = rating => {
        let ratings = [];
        for (let r = 1; r <= 5; r++) {
            ratings.push(r <= rating ? <Pressable key={r} onPress={() => setStarRating(r)}><ReviewDetailsStar /></Pressable> : <Pressable key={r} onPress={() => setStarRating(r)}><ReviewDetailsBlankStar key={r} /></Pressable>)
        }
        return ratings
    }

    return (
        <View style={styles.container}>
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
                            onPress={() => onPress()}
                        >
                            <View style={styles.backWrap}>
                                <BackBtn />
                            </View>
                            <Text style={styles.pageHeading}>
                                {StaticText.screen.review_details.heading}
                            </Text>
                        </Pressable>
                    </View>
                    <ScrollView>
                    <View style={styles.contentWrap}>
                        {loading ? (
                            <ActivityIndicator size="large" color={Colors.royal_blue} />
                        ) : (
                            <>
                                <View style={styles.imageWrap}>
                                    <Image
                                        source={{
                                            uri: data?.product?.product_images[0]?.thumbnail,
                                        }}
                                        loadingIndicatorSource={AppSettings.loader_image}
                                        style={styles.productImg}
                                    />
                                </View>
                                <View style={styles.textWrap}>
                                    <Pressable style={styles.headingNameWrap} onPress={() => onPress(MY_PRODUCT_DETAILS)}>
                                        <Text style={styles.textContentHeading}>{data?.product?.name}</Text>
                                        <InformationBlue />
                                    </Pressable>
                                    <Text style={styles.textContentSerial}>
                                        {StaticText.screen.review_details.content.sn} : {data?.product?.product_serials?.serial}
                                    </Text>
                                    <Text style={styles.textContentRating}>{StaticText.screen.review_details.content.rate}</Text>
                                </View>
                                <View style={styles.reviewWrap}>{listRating(starRating)}</View>

                                <View style={styles.buttonWrap}>
                                    {reviewData?.message?.length ? <View style={styles.buttonTickWrap}><TickGreen /></View> :
                                        <RoundedCornerGradientStyleBlueFullWidth
                                            label={(data?.product_rating?.user_warrenty_id && data?.product_rating?.user_warrenty_id == warrantyId) ? StaticText.button.edit_review : StaticText.button.submit_review}
                                            onPress={submitReview}
                                            disabled={reviewLoading ? true : starRating <= 0 ? true : false}
                                            showLoader={reviewLoading}
                                        />}
                                </View>
                            </>
                        )}
                    </View>
                    </ScrollView>
                </SafeAreaView>
                </LinearGradient>
            {/* </ImageBackground> */}
        </View>
    )
}

export default ReviewDetails
