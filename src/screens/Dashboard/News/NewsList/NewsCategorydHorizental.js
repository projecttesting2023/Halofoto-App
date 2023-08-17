import { Pressable, Animated } from 'react-native'
import { CATEGORY_NEWS } from '../../../../constants/RouteNames'
import { GradientHelper } from '../../../Helper/Button/GradientHelper'
import styles from "./style"

const NewsCategorydHorizental = ({ item, onPress }) => {
    const AnimatedLinearGradient = Animated.createAnimatedComponent(GradientHelper)
    const animated = new Animated.Value(1)

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
            onPress(CATEGORY_NEWS, {
                categoryName: item?.name,
                categorySlug: item?.slug,
            })
        })
    }

    return (
        <Pressable onPressIn={fadeIn} onPressOut={fadeOut} unstable_pressDelay={200} style={styles.categoryBtn}>
            <AnimatedLinearGradient
                color1={item?.colour_code1?.length ? item?.colour_code1 : "#83A7FE"}
                color2={item?.colour_code2?.length ? item?.colour_code2 : "#4874F7"}
                btnStyle={[styles.btnActive]}
                label={item?.name}
                labelStyle={[styles.categoryBtnWrap]}
                opacity={animated}
            />
        </Pressable>
    )
}
export default NewsCategorydHorizental