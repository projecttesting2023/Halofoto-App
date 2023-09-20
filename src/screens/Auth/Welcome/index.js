import { Image, ImageBackground, Platform,Text,View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Container from '../../Helper/Container'
import AppSettings from '../../../global/AppSettings'
import StaticText from '../../../global/StaticText'
import Colors from '../../../global/Colors'
import CircleGradient from '../../Helper/Button/CircleGradient'
import styles from './style'
import LinearGradient from 'react-native-linear-gradient';


export default function Welcome({ onPress }) {
    return (
        <Container style={styles.container}>
            {/* <ImageBackground resizeMode="cover" style={styles.overlayWrap} source={AppSettings.background_image}> */}
            <LinearGradient colors={['#FFFFFF', '#CAD8FF', '#E1E9FD', '#7AB4F5']} start={{x: 0, y: 1}} end={{x: 1, y: 0}}  style={styles.overlayWrap}>
                    <Image source={AppSettings.logo} style={styles.logoWrap} />
                    <CircleGradient
                        onPress={onPress}
                        label={StaticText.button.get_started}
                        gardientColor1={Colors.blue_ribbon}
                        gardientColor2={Colors.royal_blue_2}
                        style={styles}
                    />
                </LinearGradient>
            {/* </ImageBackground> */}
        </Container>
    )
}

