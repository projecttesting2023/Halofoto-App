import { Animated, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { DASHBOARD } from "../../../constants/RouteNames"
import StaticText from '../../../global/StaticText'
import styles from './PackageQrCodeStyle'
import Colors from '../../../global/Colors'
import RoundedCornerGradientStyleBlueFullWidth from '../../Helper/Button/RoundedCornerGradientStyleBlueFullWidth'

const PackageQrCode = ({
    scanned,
    handleBarCodeScanned,
    setAnimationLineHeight,
    focusLineAnimation,
    animationLineHeight,
    setScanned,
    scannedData,
    onPress,
}) => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.topBar]}>
                <View style={[styles.iconWrap]}>
                    <TouchableOpacity onPress={() => onPress(DASHBOARD)}>
                        <Text style={[styles.icoClose]}>{StaticText.button.close}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: Colors.white, fontSize: 25, textAlign: 'center', marginBottom: 10, fontFamily: 'Montserrat-Medium' }}>{StaticText.screen.warranty.qr_screen.heading}</Text>
                <Text style={{ color: Colors.white, fontSize: 15, textAlign: 'center', fontFamily: 'Montserrat-Regular' }}>{StaticText.screen.warranty.qr_screen.content}</Text>
            </View>
            {scanned &&
                <BarCodeScanner
                    onBarCodeScanned={handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            }
            <View style={[styles.overlay]}>
                <View style={styles.unfocusedContainer}></View>
                <View style={[styles.middleContainer]}>
                    <View style={[styles.unfocusedContainer]}></View>
                    <View style={styles.topLeft} />
                    <View style={styles.topRight} />
                    <View
                        onLayout={e => setAnimationLineHeight(e.nativeEvent.layout.height)}
                        style={[styles.focusedContainer, { borderRadius: 20 }]}>
                        {scannedData == null && (
                            <Animated.View
                                style={[
                                    styles.animationLineStyle,
                                    {
                                        transform: [
                                            {
                                                translateY: focusLineAnimation.interpolate({
                                                    inputRange: [0, 1],
                                                    outputRange: [0, animationLineHeight],
                                                }),
                                            },
                                        ],
                                    },
                                ]}
                            />
                        )}
                    </View>
                    <View style={styles.bottomLeft} />
                    <View style={styles.bottomRight} />
                    <View style={styles.unfocusedContainer}></View>
                </View>
                <View style={styles.unfocusedContainer}>
                    <View style={styles.buttonWrap}>
                        <RoundedCornerGradientStyleBlueFullWidth
                            label={StaticText.button.manual_registration_warranty}
                            onPress={onPress}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PackageQrCode