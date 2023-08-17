import {
    Text,
    Animated,
    Pressable,
    View,
} from "react-native"
import SingleManBlue from "../../Helper/SvgImg/SingleManBlue"
import Lock from "../../Helper/SvgImg/Lock"
import DoubleMan from "../../Helper/SvgImg/DoubleMan"
import styles from "./style"
import Colors from "../../../global/Colors"

const ProfileButtons = ({
    menu = {
        name: ``,
        label: ``,
        color: ``,
        route: ``,
    },
    onPress
}) => {

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
        }).start(() => onPress(menu?.route?.length ? menu?.route : ``))
    }

    switch (menu?.name) {
        case 'my_profile':
            CurrentComponent = SingleManBlue
            break
        case 'logout':
        case 'change_password':
            CurrentComponent = Lock
            break
        case 'share_profile':
            CurrentComponent = DoubleMan
            break
    }

    return (
        <Pressable onPressIn={fadeIn} onPressOut={fadeOut} unstable_pressDelay={100}>
            <Animated.View style={[styles.tabOption, { opacity: animated }]}>
                <View style={styles.logoWrap}>
                    {menu?.color?.length ? <CurrentComponent color={Colors?.azure_radiance_1} /> : <CurrentComponent />}
                </View >
                {menu?.label?.length && <Text style={styles.textTab}>{menu?.label}</Text>}
            </Animated.View>
        </Pressable>
    )
}
export default ProfileButtons