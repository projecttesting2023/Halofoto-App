import {
    Text,
    View,
    ScrollView,
} from "react-native"

import LockBG from "../../Helper/SvgImg/LockBG"
import EditIcon from "../../Helper/SvgImg/EditIcon"
import RoundedCornerGradientStyleBlueFullWidth from "../../Helper/Button/RoundedCornerGradientStyleBlueFullWidth"
import styles from "./noResultStyle"
import StaticText from "../../../global/StaticText"

export default function MyProductNoList({
    onPressRegister,
}) {
    return (
        <ScrollView
            scrollEventThrottle={16}
            contentContainerStyle={styles.scrollWrap}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.logoWrap}>
                <View style={styles.lockBg}>
                    <LockBG />
                </View>
                <View style={styles.lock}>
                    <EditIcon />
                </View>
            </View>
            <View style={styles.contentWrap}>
                <Text style={styles.textContent}>{StaticText.screen.my_product_list.content.no_product.heading}</Text>
                <Text style={styles.textContentSmall}>{StaticText.screen.my_product_list.content.no_product.content}</Text>
            </View>
            <View style={styles.buttonWrap}>
                <RoundedCornerGradientStyleBlueFullWidth label={StaticText.button.product_registration} onPress={onPressRegister}/>
            </View>
        </ScrollView>
    )
}