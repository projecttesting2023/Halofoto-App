import { Dimensions, StyleSheet } from "react-native"
import Colors from "../../../../global/Colors"

export default StyleSheet.create({
    error: {
        color: Colors.red_orange,
        paddingTop: 4,
        fontSize: 10,
        textTransform: 'uppercase',
        marginTop: -10,
        marginBottom: 10,
    },
    containerWrap: {
        display: 'flex',
        height: '90%',
    },

    modalWrap: {
        display: 'flex',
        height: '100%',
        marginTop: 'auto',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    modalBgWrap: {
        height: '100%',
    },

    modalHeaderWrap: {
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        borderBottomColor: Colors.iron,
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
    },

    headerContent: {
        marginTop: 27,
        marginLeft: 20,
        marginRight: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Montserrat-Bold',
    },

    cardWrap: {
        marginTop: 25,
        marginBottom: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    genderCard: {
        height: 108,
        width: 108,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.hawkes_blue,
        borderRadius: 20,
        borderColor: Colors.jordy_blue,
        borderStyle: 'solid',
        borderWidth: 1
    },
    countryItemActive: {
        marginRight: 20,
        height: 50,
        backgroundColor: Colors.jordy_blue,
        borderColor: Colors.blue_ribbon,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10
    },

    countryItemButtonWrap: {
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    countryItemWrap: {
        height: 70,
    },
    cardText: {
        fontSize: 16,
        fontWeight: '700',
    },
    buttonWrap: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputWrapp: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    inputWrapModal: {
        width: '50%',
        marginRight: 5
    },

    inputTxt: {
        color: Colors.white,
    },
    inputSmall: {
        fontSize: 15,
        color: Colors.white,
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
    },

    countryItemLabel: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Montserrat-Medium',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        // borderColor: 'red',
        // borderStyle: 'solid',
        // borderWidth: 1

    },
    searchWrap: {
        height: 60,
        paddingRight: 20,
        paddingLeft: 20,
        borderColor: Colors.cornflower_blue_1,
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pressableWrap: {
        height: 40,
        marginTop: -4,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },
    errorWrap: {
        borderColor: Colors.red_violet,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
    },
    errorTextWrap: {
        height: 16,
        marginLeft: 15,
        marginTop: -20,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%'
    },
    error: {
        color: Colors.red_violet,
        fontSize: 10,
        textTransform: 'uppercase',
        marginTop: 10
    }

})