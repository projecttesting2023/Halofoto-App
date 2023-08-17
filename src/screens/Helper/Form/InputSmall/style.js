import { StyleSheet } from "react-native"
import Colors from "../../../../global/Colors"

export default StyleSheet.create({
    errorWrap:{
        borderColor:Colors.red_violet,
        borderStyle:'solid',
        borderWidth:1,
        borderRadius:20,
        height:40
    },
    inputWrapModal:{
        width:'60%',
        height:'100%',
        marginRight:5
      },
      inputWrappNumber:{
        marginTop:15,
        marginBottom:30,
        fontSize: 14,
        color: Colors.white,
        borderRadius: 20,
        width: "100%",
      },
    errorTextWrap:{
        height:16,
        marginLeft:15,
        marginTop:-20,
        marginBottom:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        width:'100%'
    },
   error: {
        color: Colors.red_violet,
        fontSize: 10,
        textTransform: 'uppercase',
        marginLeft:15
    }
})