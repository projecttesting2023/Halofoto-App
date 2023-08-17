import { Image, ImageBackground, Text, View, ScrollView, SafeAreaView, useWindowDimensions, Pressable, } from 'react-native'
import RenderHtml from 'react-native-render-html'
import Container from '../../Helper/Container'
import AppSettings from '../../../global/AppSettings'
import StaticText from '../../../global/StaticText'
import styles from './style'
import BackBtn from '../../Helper/SvgImg/BackBtn'
import { DASHBOARD, LOGIN } from '../../../constants/RouteNames'


const AboutUs = ({
    data,
    onPress,
    isLoggedIn
}) => {

    const { width } = useWindowDimensions()
    const contentDetails = {
        html: `<div style="color:white;word-wrap:break-word;font-size:18px;font-weight:400;">${data?.about_contents?.length ? data?.about_contents : ``}</div>`
    }

    return (
        <Container style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.overlayWrap} source={AppSettings.background_inner_image}>
                <SafeAreaView style={styles.containerWrap}>
                    <View style={styles.topHeader}>
                        <Pressable
                            style={styles.titleHolder}
                            onPress={() => onPress(isLoggedIn ? DASHBOARD : LOGIN)}
                        >
                            <View style={styles.backWrap}>
                                <BackBtn />
                            </View>
                            <Text style={styles.pageHeading}>
                                {StaticText.screen.about_us.heading}
                            </Text>
                        </Pressable>
                    </View>
                    <ScrollView style={styles.serollWrap} keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>
                        <View style={{paddingHorizontal:15}}>
                        <Text style={styles.headerText}>{data?.about_titles}</Text>
                        <RenderHtml
                            contentWidth={width}
                            source={contentDetails}
                            enableExperimentalMarginCollapsing={true}
                        />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </Container>
    )
}
export default AboutUs;