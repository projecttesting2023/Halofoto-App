import { StyleSheet } from "react-native"
import Colors from "../../../global/Colors"

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 0,
        paddingRight: 0,
    },

    overlayWrap: {
        backgroundColor: Colors.black,
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerWrap: {
        height: '100%', 
        width:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoWrap: {
        height: 85,
        width: 200,
    },

    buttonWrap: {
        position: 'absolute',
        bottom: 60,
        right: 45,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },

    buttonText: {
        fontSize: 20,
        color: Colors.deep_cove,
        fontFamily:'Montserrat-Medium',
    },

    iconBox: {
        backgroundColor: Colors.blue_ribbon,
        height: 55,
        width: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 55,
        marginLeft: 10,

    },
})