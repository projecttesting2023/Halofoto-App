import { StyleSheet } from "react-native"
import Colors from "../../../global/Colors"

export default StyleSheet.create({
    containerWrap: {
        display: 'flex',
        height: '90%',
    },

    modalWrap: {
        display: 'flex',
        height: '100%',
        marginTop: 'auto',
        // backgroundColor: 'red',
        // borderTopRightRadius: 20,
        // borderTopLeftRadius: 20,

    },
    modalBgWrap: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    modalHeaderWrap: {
        // padding: 17,
        // paddingTop: 0,
        // borderBottomColor: Colors.iron,
        // borderBottomWidth: 1,
        // borderBottomStyle: 'solid',
    },

    headerContent: {
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        right: 20,

    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Montserrat-Bold'
    },

    cardWrap: {
        marginTop: 25,
        marginBottom: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    iconWrap: {
        position: 'absolute',
    }
})