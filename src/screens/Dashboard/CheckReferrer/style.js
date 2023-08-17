import { StyleSheet, StatusBar } from "react-native"
import Colors from "../../../global/Colors"

export default StyleSheet.create({
    overlayWrap: {
        height: '100%'
    },
    modalWrap: {
        display: "flex",
        height: "85%",
        marginTop: "auto",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        overflow: 'hidden',
        
    },
    modalBgWrap: {
        height: "100%",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    container: {
        display: 'flex',
        height: '100%',
        marginLeft: 20,
        marginRight: 20,
    },

    headerContent: {
        marginTop: -20,
        height: 76,
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        // borderColor:'red',
        // borderRadius:20,
        // borderWidth:1,
        // borderStyle:'solid'
    },
    imageWrap: {
        width: "100%",
        height: 224,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    inputWrap: {
        marginTop: 20,
        marginBottom: 94,
        height: 60,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },

    buttonWrap: {
        width: '100%',
        marginBottom: 20,
    },
    svgWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerTextWrap: {
        marginBottom: 20
    },
    headerText: {
        fontSize: 18,
        fontWeight: "600",
        fontFamily: "Montserrat-SemiBold",
    },
    headerContentText: {
        fontSize: 18,
        fontWeight: "600",
        fontFamily: "Montserrat-Regular",
        color: Colors.azure_radiance_1,
    },
    textInputWrap: {
        fontSize: 16,
        fontWeight: "400",
        fontFamily: "Montserrat-Regular",
    },
    textInput: {
        height: 60,
        borderRadius: 20,
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: "500",
        fontFamily: "Montserrat-Regular",
        color: Colors.silver_chalice,
        borderColor: Colors.silver_chalice,
        borderStyle: "solid",
        borderWidth: 1,
    },
    textButtonFooter: {
        fontSize: 11,
        fontWeight: "400",
        fontFamily: "Montserrat-Regular",
        textAlign: "center",
    },
})

