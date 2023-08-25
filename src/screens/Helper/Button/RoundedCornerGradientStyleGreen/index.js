import { Text, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../../../global/Colors'
import styles from './style'


const RoundedCornerGradientStyleGreen = ({
    onPress,
    label,
    ...props
}) => {
    return (
        <Pressable onPress={() => onPress()} {...props}>
            <LinearGradient
                colors={[Colors.spring_green,Colors.spring_green, Colors.royal_blue]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.linearGradient}>
                <Text style={styles.labelTxt}>{label}</Text>
            </LinearGradient>
        </Pressable>
    )
}

export default RoundedCornerGradientStyleGreen