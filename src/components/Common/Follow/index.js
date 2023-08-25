import { useNavigation } from '@react-navigation/native'
import { WEB_FRAME } from '../../../constants/RouteNames'
import StaticText from '../../../global/StaticText'
import FollowScreen from '../../../screens/Common/Follow'
import env from '../../../config/env'
import { Linking } from 'react-native'

const Follow = () => {
    const { navigate } = useNavigation()
    const onPress = route => navigate(route)
    const onPressFrame = async (route, uri, linking) => {
        //console.log(route)
        //console.log(uri)
        //console.log(linking)
        if (linking) {
            const supported = await Linking.canOpenURL(uri);
            if (supported) {
                await Linking.openURL(uri);
            }else{
                await Linking.openURL(uri);
            }
        } else {
            //navigate(route, { uri })
            await Linking.openURL(uri);
        }
    }   

    const navMenus = [
        {
            name: 'follow_us_facebook',
            label: StaticText.screen.follow_us.tabs.follow_us,
            navigation: WEB_FRAME,
            linking: true,
            url: env.FACEBOOK_URL

        },
        {
            name: 'follow_us_whatsapp',
            label: StaticText.screen.follow_us.tabs.follow_us2,
            navigation: WEB_FRAME,
            linking: false,
            url: env.WHATSAPP_URL

        },
        {
            name: 'follow_us_instagram',
            label: StaticText.screen.follow_us.tabs.follow_us3,
            navigation: WEB_FRAME,
            linking: true,
            url: env.INSTAGRAM_URL

        },
        {
            name: 'check_website',
            label: StaticText.screen.follow_us.tabs.check_website,
            navigation: WEB_FRAME,
            url: env.WEB_URL,
            linking: false,
        },
        {
            name: 'contact_hotline',
            label: StaticText.screen.follow_us.tabs.contact_hotline,
            navigation: WEB_FRAME,
            url: `${env.WEB_URL}/page/contact-us`,
            linking: false,
        },
        {
            name: 'dealer_locator',
            label: StaticText.screen.follow_us.tabs.dealer_locator,
            navigation: WEB_FRAME,
            url: `${env.WEB_URL}/page/contact-us`,
            linking: false,
        },
        {
            name: 'authorized_center',
            label: StaticText.screen.follow_us.tabs.authorized_center,
            navigation: WEB_FRAME,
            url: `${env.WEB_URL}/page/contact-us`,
            linking: false,
        },
    ]

    return (
        <FollowScreen onPress={onPress} onPressFrame={onPressFrame} navMenus={navMenus} />
    )
}

export default Follow