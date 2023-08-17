import { Text, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import ArrowRight from '../../SvgImg/ArrowRight'

import styles from './style'

const CircleGradient = ({
    onPress,
    label,
    gardientColor1,
    gardientColor2,
    style
}) => {
    return (
        <Pressable style={style.buttonWrap} onPress={() => onPress()}>
            <Text style={style.buttonText}>{label}</Text>
            <LinearGradient colors={[gardientColor1,gardientColor2]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={style.iconBox}>
                <ArrowRight />
            </LinearGradient>
        </Pressable>
    )
}

export default CircleGradient