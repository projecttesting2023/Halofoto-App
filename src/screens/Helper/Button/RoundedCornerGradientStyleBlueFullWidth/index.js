import { Text, Pressable, ActivityIndicator, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../../../global/Colors'
import styles from './style'
import AppSettings from '../../../../global/AppSettings'


const RoundedCornerGradientStyleBlueFullWidth = ({
    onPress,
    label,
    disabled,
    showLoader,
    ...props
}) => {
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
        }).start(() => onPress())
    }


    return (
        <Pressable onPressIn={fadeIn} onPressOut={fadeOut} disabled={disabled ? disabled : false} {...props}>
            <Animated.View style={[{ opacity: animated }]}>
                <LinearGradient
                    colors={[Colors.blue_ribbon, Colors.royal_blue_2]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.buttonWrap}
                >
                    <Text style={styles.buttonText}>{label}</Text>
                    {showLoader && <ActivityIndicator size="small" color={AppSettings.activity_indicator_color} />}
                </LinearGradient>
            </Animated.View>
        </Pressable>
    )
}

export default RoundedCornerGradientStyleBlueFullWidth