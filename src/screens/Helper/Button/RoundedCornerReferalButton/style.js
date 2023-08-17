import { StyleSheet } from "react-native"
import Colors from "../../../../global/Colors"

export default StyleSheet.create({
    linearGradient: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        height: 60,
        width: '100%',
        borderRadius: 60,
        marginRight: 10,
    },
    
    labelTxt: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '700',
    }
})