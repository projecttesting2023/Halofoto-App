import { Text, Animated, Pressable } from 'react-native'
import Video from "../../Helper/SvgImg/Video"
import Star from "../../Helper/SvgImg/Star"
import { REVIEW_LIST } from "../../../constants/RouteNames"

import styles from "./style"
import { View } from 'react-native'

const NavButtons = ({ menu, item, onPressTab, onPress }) => {
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
            if (menu.name == 'video') {
                onPressTab('video', item?.product?.video, item?.product_image?.path)
            }
            else if (menu.name == 'rating') {
                onPress(REVIEW_LIST)
            }

        })
    }

    switch (menu.name) {
        case 'video':
            CurrentComponent = Video
            break
        case 'rating':
            CurrentComponent = Star
            break
    }

    return (
        <Pressable onPressIn={fadeIn} onPressOut={fadeOut} unstable_pressDelay={100}>
            <Animated.View style={[styles.certificateWrap, { opacity: animated }]}>
                <CurrentComponent />
                <Text style={styles.textCard}>{menu.label}</Text>
            </Animated.View>
        </Pressable>
    )
}
export default NavButtons