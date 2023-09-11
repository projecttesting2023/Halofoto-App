import { StyleSheet } from "react-native"
import Colors from "../../../../global/Colors"
import { responsiveHeight } from "react-native-responsive-dimensions"

export default StyleSheet.create({
   
    modalWrap: {
        display: 'flex',
        height: '100%',
        backgroundColor: 'rgba(17, 17, 17, 0.5)',
    },
    container: {
        height: '40%',
        marginTop: 'auto',
        backgroundColor: Colors.silver,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
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
    },

    cardWrap: {
        marginTop: 25,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardText: {
        fontSize: 16,
        fontWeight: '700',
    },

    inputWrapp: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
  
    inputWrappCountryDob: {
        width: "100%",
        marginLeft: 15
    },

    errorWrap: {
        borderColor: Colors.red_violet,
        borderStyle: 'solid',
        //borderWidth: 1,
        borderRadius: 20,
        marginBottom:responsiveHeight(1)
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
        marginTop:responsiveHeight(1.9),
        marginBottom:20,
        marginLeft:15
    },
    inputTxt: {
        color: Colors.white,
        fontSize:16
    },
})