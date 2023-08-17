import { LinearGradient } from "expo-linear-gradient"
import {
    Text,
    View,
    ImageBackground,
} from "react-native"

import AppSettings from "../../../global/AppSettings"
import StaticText from "../../../global/StaticText"
import RoundedCornerGradientStyleBlueFullWidth from "../../Helper/Button/RoundedCornerGradientStyleBlueFullWidth"
import CongratsLogo from "../../Helper/SvgImg/CongratsLogo"
import Tick from "../../Helper/SvgImg/Tick"
import styles from "./ThankYouStyle"

const RegistrationUpdate = ({
    onPress,
    approvalStatus,
    pointsAccumulate,
}) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                style={styles.overlayWrap}
                source={AppSettings.background_inner_image}
            >
                <View style={styles.contentWrap}>
                    {approvalStatus != 'accept' ?
                        <>
                            <LinearGradient
                                colors={["#114EED", "#6A50E7"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.logoWrap}
                            >
                                <Tick />
                            </LinearGradient>
                            <View style={styles.textContentWrap}>
                                <Text style={styles.textSize}>{StaticText.screen.warranty.step_3.waiting.heading}</Text>
                                <View style={styles.successWrap}>
                                    <Text style={styles.text}>{StaticText.screen.warranty.step_3.waiting.content}</Text>
                                </View>
                            </View>
                        </> :
                        <>
                            <View style={styles.congratsLogoWrap}>
                                <CongratsLogo />
                            </View>
                            <View style={styles.textContentWrap}>
                                <Text style={styles.textSize}>{StaticText.screen.warranty.step_3.success.heading}</Text>
                                <View style={styles.pointsWrap}>
                                    <Text style={styles.textPointsSize}>{pointsAccumulate}</Text>
                                    <Text style={styles.text1}>{StaticText.screen.warranty.step_3.success.point}</Text>
                                </View>
                                <View style={styles.successWrap}>
                                    <Text style={styles.text}>{StaticText.screen.warranty.step_3.success.content}</Text>
                                </View>
                            </View>
                        </>
                    }
                </View>
                <View style={styles.uploadButtonWrap}>
                    <RoundedCornerGradientStyleBlueFullWidth
                        onPress={onPress}
                        label={StaticText.button.ok}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};
export default RegistrationUpdate;
