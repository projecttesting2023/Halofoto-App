import { Text, Animated, Pressable } from 'react-native'
import { E_REPAIR, MY_PRODUCT_DETAILS } from "../../../constants/RouteNames"
import Repair from "../../Helper/SvgImg/Repair"
import CertificateIcon from "../../Helper/SvgImg/CertificateIcon"
import Download from "../../Helper/SvgImg/Download"
import Video from "../../Helper/SvgImg/Video"
import styles from "./style"
import ERepairModal from './ERepair'

const NavButtons = ({ menu, item, onPress, onPressTab }) => {
    const animated = new Animated.Value(1)
    let CurrentComponent = ''
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
            if (menu.name == 'certificate') {
                onPress(MY_PRODUCT_DETAILS, item?.warranty_details?.id, true)
            }
            else if (menu.name == 'bill') {
                onPressTab('invoice', item?.warranty_details?.invoice)
            }
            else if (menu.name == 'video') {
                onPressTab('video', item?.product?.video, item?.product_image?.path)
            }
            else if (menu.name == 'e_repair') {
                onPress(E_REPAIR, item?.warranty_details?.id, true)
            }
            else {
            }
        })
    }

    switch (menu.name) {
        case 'certificate':
            CurrentComponent = CertificateIcon
            break
        case 'bill':
            CurrentComponent = Download
            break
        case 'video':
            CurrentComponent = Video
            break
        case 'e_repair':
            CurrentComponent = Repair
            break
    }

    return (
        <Pressable onPressIn={fadeIn} onPressOut={fadeOut} unstable_pressDelay={100}>
            <Animated.View style={[styles.certificateWrap, { opacity: animated }]}>
                <CurrentComponent  />
                <Text style={styles.textCard}>{menu.label}</Text> 
            </Animated.View>
        </Pressable>
    )
}
export default NavButtons