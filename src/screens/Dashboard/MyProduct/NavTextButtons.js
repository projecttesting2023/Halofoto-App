import { Text, Animated, Pressable, View } from 'react-native'
import { E_REPAIR, REVIEW_CENTER_SINGLE } from "../../../constants/RouteNames"
import Repair from "../../Helper/SvgImg/Repair"
import Star from "../../Helper/SvgImg/Star"
import Download from "../../Helper/SvgImg/Download"
import styles from "./singleProductStyle"

const NavTextButtons = ({ menu, item, onPress, onPressTab }) => {
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
        }).start(() => {
            if (menu.name == 'bill') {
                onPressTab('bill', item?.product?.invoice)
            }
            else if (menu.name == 'repair') {
                onPress(E_REPAIR, item?.warranty_details?.id, true)
            }
            else if (menu.name == 'review') {
                onPress(REVIEW_CENTER_SINGLE)
            }
        })
    }

    switch (menu.name) {
        case 'bill':
            CurrentComponent = Download
            break
        case 'repair':
            CurrentComponent = Repair
            break
        case 'review':
            CurrentComponent = Star
            break
    }

    return (
        <Pressable onPressIn={fadeIn} onPressOut={fadeOut} unstable_pressDelay={100}>
            <Animated.View style={[styles.infoWrap, { opacity: animated }]}>
                <View style={styles.icolBox}>
                    <CurrentComponent />
                </View>
                <Text style={styles.textDataSmall}>{menu.label}</Text>
            </Animated.View>
        </Pressable>
    )
}
export default NavTextButtons