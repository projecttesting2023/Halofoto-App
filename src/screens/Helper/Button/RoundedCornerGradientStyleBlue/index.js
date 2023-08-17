import { Text, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../../../global/Colors'
import styles from './style'


const RoundedCornerGradientStyleBlue = ({
    onPress,
    label,
    ...props
}) => {
    return (
        <Pressable onPress={() => onPress()} {...props}>
            <LinearGradient
                colors={[Colors.blue_ribbon, Colors.royal_blue_2]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.linearGradient}>
                <Text style={styles.labelTxt}>{label}</Text>
            </LinearGradient>
        </Pressable>
    )
}

export default RoundedCornerGradientStyleBlue