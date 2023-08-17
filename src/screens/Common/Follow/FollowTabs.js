import {
    Pressable,
    Text,
    View,
    Animated,
} from "react-native"
import styles from "./style"
import Lock from "../../Helper/SvgImg/Lock"
import DoubleMan from "../../Helper/SvgImg/DoubleMan"
import Colors from "../../../global/Colors"
import SingleManBlue from "../../Helper/SvgImg/SingleManBlue"
import LocationBlue from "../../Helper/SvgImg/LocationBlue"
import Facebook from "../../Helper/SvgImg/Facebook"
import FacebookWhite from "../../Helper/SvgImg/facebookWhite"
import WhatsApp from "../../Helper/SvgImg/whatsApp"
import Instagram from "../../Helper/SvgImg/instagram"

const FollowTabs = ({ menu, onPressFrame }) => {
    const animated = new Animated.Value(1)
    let CurrentComponent = ''

    const fadeIn = () => {
        Animated.timing(animated, {
            toValue: 0.4,
            duration: 50,
            useNativeDriver: true,
        }).start()
    }
    const fadeOut = () => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 50,
            useNativeDriver: true,
        }).start(() => onPressFrame(menu.navigation, menu.url, menu.linking))
    }

    switch (menu.name) {
        case 'follow_us_facebook':
            CurrentComponent = FacebookWhite
            break
        case 'follow_us_whatsapp':
            CurrentComponent = WhatsApp
            break
        case 'follow_us_instagram':
            CurrentComponent = Instagram
            break
        case 'check_website':
            CurrentComponent = Lock
            break
        case 'contact_hotline':
            CurrentComponent = DoubleMan
            break
        case 'dealer_locator':
            CurrentComponent = LocationBlue
            break
        case 'authorized_center':
            CurrentComponent = DoubleMan
            break
    }
    return (
        <Pressable onPressIn={fadeIn} onPressOut={fadeOut} style={[styles.tabButtonWrap]} unstable_pressDelay={100}>
            <Animated.View style={[styles.tabOption, { opacity: animated }]}>
                <View style={styles.logoWrap}>
                    <CurrentComponent color={Colors.azure_radiance_1} />
                </View>
                <Text style={styles.textTab}>{menu.label}</Text>
            </Animated.View>
        </Pressable>
    )
}

export default FollowTabs