import { StyleSheet, StatusBar, Platform } from "react-native"
import Colors from "../../../global/Colors"
import Constants from 'expo-constants'

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
        flexDirection: 'row',
    },

    containerWrap: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },

    topHeader: {
        display: 'flex',
        alignItems:'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        height:Constants.statusBarHeight+(Platform.OS === 'ios' ? 50 : 60),
        paddingBottom:Platform.OS === 'ios' ? 20 : 20,
        width:'100%',
    
      },
    titleHolder: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    },

    backWrap: {
        display: "flex",
        justifyContent: "center",
        height: 24,
        width: 24,
        marginRight: 5,
    },

    backArrow: {
        height: 14,
        width: 8,
    },

    pageHeading: {
        fontSize: 22,
        color: Colors.white,
        fontFamily: "Montserrat-Medium",
        fontWeight: "500",
        lineHeight: 27,
    },

    serollWrap: {
        display: 'flex',
        width: '100%',
    },

    logoWrap: {
        height: 45,
        width: '100%',
        marginBottom: 55,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: StatusBar.currentHeight,
    },

    logoSmall: {
        height: 40,
        width: 97,
    },

    headerText: {
        fontSize: 36,
        color: Colors.white,
        textTransform: 'capitalize',
        // fontWeight: '300',
        marginBottom: 30,
        fontFamily: 'Montserrat-Light',
        textAlign: "center",
    },

    formWrapp: {
        width: '100%',
        paddingLeft: 25,
        paddingRight: 25,
    },

    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    inputWrapp: {
        paddingLeft: 22,
        paddingRight: 22,
        paddingTop: 20,
        paddingBottom: 10,
        fontSize: 14,
        backgroundColor: Colors.alto_1,
        color: Colors.white,
        borderRadius: 20,
        marginBottom: 20,
    },

    labelText: {
        fontSize: 14,
        color: Colors.white,
        textTransform: 'capitalize',
        fontWeight: '300',
        marginBottom: 10,
    },

    input: {
        height: 25,
        fontSize: 20,
        color: Colors.white,
        flex: 1,
    },

    formWrappFooter: {
        height: 35,
        fontSize: 20,
        color: Colors.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkbox: {
        alignSelf: 'center',
    },
    checkLabel: {
        fontSize: 14,
        color: Colors.silver_chalice,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textLink: {
        margin: 8,
        fontSize: 14,
        color: Colors.silver_chalice,
    },

    buttonWrap: {
        backgroundColor: Colors.blue_ribbon,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 60,
        borderRadius: 60,
    },

    buttonText: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '700',
    },
    socialMediaLogin: {
        padding: 20,
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        height: 168,
        borderTopColor: Colors.denim,
        borderTopWidth: 1,

    },
    textWrap: {
        margin: 0,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    iconBox: {
        backgroundColor: Colors.deep_cove,
        height: 76,
        width: 76,
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginLeft: 10,
    },
    iconBoxWrap: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    iconWrap: {
        height: 17,
        width: 20,
    },

    labelSignUp: {
        color: Colors.azure_radiance_1
    }

})