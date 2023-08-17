import { StyleSheet } from "react-native"
import Colors from '../../../global/Colors'

export default StyleSheet.create({
    overlayWrap:{
    }, 
    modalWrap: {
        display:'flex',
        height: '100%',
    },
    container: {
        height: '90%',
        marginTop: 'auto',
        backgroundColor: '#ffff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },

    headerContent: {
        marginTop: 27,
        marginLeft: 20,
        marginRight: 20,
        // borderColor:'red',
        // borderStyle:'solid',
        // borderWidth:1
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom:20,
        fontFamily:'Montserrat-SemiBold'
    },
    headerContentText:{
        fontSize:16,
        fontWeight:'400',
        fontFamily:'Montserrat-Regular'
    },
    inputWrap:{
        marginTop:20,
        marginBottom:20,
        padding:25,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    
    },
    textWrap:{
        height:80,
        width:75,
        padding:10,
        borderBottomWidth:1,
        textAlign:'center',
        borderBottomColor:'blue',
        fontSize:36,
        fontWeight:'300',
        fontFamily:'Montserrat-Light'
    },
    resendOtpWrap:{
        paddingLeft:20,
    },
    resendOtpText:{
        paddingTop:5,
        fontSize:18,
        fontWeight:'600',
        fontFamily:'Montserrat-SemiBold',
        color:'#0082ED'
    }
    
})