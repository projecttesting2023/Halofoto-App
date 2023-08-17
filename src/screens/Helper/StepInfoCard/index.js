import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../../global/Colors'
import styles from './style'
import Information from '../SvgImg/Information'

const StepInfoCard = ({ labelTxt, infoContent, pogressBarStyle }) => {
    return (
        <View style={[styles.cardWrap]}>
            <Text style={[styles.cardTextHeader]}>{labelTxt}</Text>
            <View style={[styles.cardContentWrap]}>
                <Information />
                <Text style={[styles.cardText]}>{infoContent}</Text>
            </View>
            <View style={[styles.loader]}>
                <LinearGradient
                    colors={[Colors.blue_ribbon, Colors.royal_blue_2]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[pogressBarStyle]}
                ></LinearGradient>
            </View>
        </View>
    )
}
export default StepInfoCard