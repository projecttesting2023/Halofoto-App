import { StyleSheet } from "react-native"
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
    modalWrap: {
        display: 'flex',
        height: '100%',
        backgroundColor: 'rgba(17, 17, 17, 0.5)',
    },
    container: {
        height: '40%',
        marginTop: 'auto',
        //backgroundColor: Colors.black,
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
        marginBottom: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
    genderCardActive: {
        backgroundColor: Colors.jordy_blue,
        borderColor: Colors.blue_ribbon,
        borderStyle: 'solid',
        borderWidth: 1
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
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop:-5,
        marginRight:-10,
    },
    
  inputWrapModal:{
    width:'50%',
    marginRight:5
  },
    inputTxt: {
        color: Colors.white,
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