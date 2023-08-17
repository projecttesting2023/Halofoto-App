import { Pressable, Animated } from 'react-native'
import { GradientHelper } from '../../../Helper/Button/GradientHelper'
import styles from "./listingStyle"


const PointCategorydHorizental = ({ item, onChangeCategory, currentCategory }) => {
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
        }).start(() => onChangeCategory(item?.id))
    }


    return (
        <Pressable onPressIn={fadeIn} onPressOut={fadeOut} unstable_pressDelay={100} style={styles.categoryBtn}>
            <AnimatedLinearGradient
                // color1={item?.colour_code1?.length ? item?.colour_code1 : "#114EED"}
                // color2={item?.colour_code2?.length ? item?.colour_code2 : "#6A50E7"}
                color1={item?.id == currentCategory ? '#114EED' : '#364261'}
                color2={item?.id == currentCategory ? '#6A50E7' : '#364261'}
                // btnStyle={[styles.btnActive]}
                btnStyle={[styles.btnNormal]}
                label={item?.category_name}
                labelStyle={[styles.categoryBtnWrap]}
                opacity={animated}
            />
        </Pressable>
    )
}
export default PointCategorydHorizental