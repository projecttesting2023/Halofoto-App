import { StyleSheet } from "react-native"
import Colors from "../../../../global/Colors"

export default StyleSheet.create({
    containerWrap: {
        display: 'flex',
        height: '90%'
    },

    modalWrap: {
        display: 'flex',
        height: '100%',
        marginTop: 'auto',
        backgroundColor: Colors.white,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },

    modalHeaderWrap: {
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        borderBottomColor: Colors.iron, 
        borderBottomWidth: 1, 
        borderBottomStyle: 'solid', 
    },
    
    modalBgWrap: {
        height: '100%',
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
        fontFamily: 'Montserrat-Bold'
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
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    inputWrapModal:{
        width:'100%',
        marginRight:5
      },
    inputTxt: {
        color: Colors.white,
        // borderColor: 'red',
        // borderStyle: 'solid',
        // borderWidth: 1,
        width: '100%',
        paddingLeft: 10,

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

    errorWrap:{
        borderColor:Colors.red_violet,
        borderStyle:'solid',
        borderWidth:1,
        borderRadius:20
    },

    error: {
        color: Colors.red_violet,
        fontSize: 10,
        textTransform: 'uppercase',
        marginTop:-20,
        marginBottom:20,
        marginLeft:15
    }

})