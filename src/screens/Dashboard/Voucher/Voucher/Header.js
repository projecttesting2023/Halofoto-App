import {
    View,
    Text,
    Pressable,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import YellowPoints from "../../../Helper/SvgImg/YellowPoints"
import BluePoints from "../../../Helper/SvgImg/BluePoints"
import Clock from "../../../Helper/SvgImg/Clock"
import Plus from "../../../Helper/SvgImg/Plus"
import StaticText from "../../../../global/StaticText"
import Colors from "../../../../global/Colors"
import styles from "./listingStyle"
import { HISTORY, REDEMPTION_CENTRE } from "../../../../constants/RouteNames"


const Header = ({ data, onPress }) => {

    return (
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
                            <Text style={styles.textDigitPoints}>{data?.user_points?.halofoto_points?.point}</Text>
                            <Text style={styles.textCardSmall}>{data?.user_points?.halofoto_points?.name}</Text>
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
                            <Text style={styles.textDigitPoints}>{data?.user_points?.blue_points?.point}</Text>
                            <Text style={styles.textCardSmall}> {data?.user_points?.blue_points?.name}</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>

            <View style={styles.buttonWrapp}>
                <Pressable style={styles.btnBox} onPress={() => onPress(HISTORY)}>
                    <Clock />
                    <Text style={styles.textBannerSmall}>{StaticText.screen.my_profile.content.history}</Text>
                </Pressable>
                <Pressable style={styles.btnBox} onPress={() => onPress(REDEMPTION_CENTRE)}>
                    <Plus />
                    <Text style={styles.textBannerSmall}>{StaticText.screen.my_profile.content.earn_more_points}</Text>
                </Pressable>
            </View>
        </LinearGradient>
    )
}
export default Header