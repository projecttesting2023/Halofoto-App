import { StyleSheet, StatusBar, Platform } from "react-native"
import Colors from "../../../global/Colors"
import Constants from 'expo-constants'
import { responsiveHeight } from "react-native-responsive-dimensions"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 0,
    paddingRight: 0,
  },

  overlayWrap: {
    backgroundColor: Colors.black,
    height: "100%",
    width: "100%",
    display: "flex",
  },
  topHeader: {
    display: 'flex',
    alignItems:Platform.OS === 'ios' ? 'flex-end' : 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height:Constants.statusBarHeight+(Platform.OS === 'ios' ? responsiveHeight(8) : 70),
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
    textTransform: "capitalize",
    fontWeight: "300",
  },

  scrollWrap: {
    width: "100%",
  },

  logoWrap: {
    height: 56,
    marginBottom: 33,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: StatusBar.currentHeight,
  },

  logoSmall: {
    height: 40,
    width: 97,
  },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  formWrapp:{
    height:70,
    width:'90%',
    backgroundColor:Colors.alto_1,
    borderRadius: 20,
    marginBottom: 20,
    // borderColor:'red',
    // borderWidth:1,
    // borderStyle:'solid'
  },
  formWrappMessage:{
    height:200,
    width:'90%',
    backgroundColor:Colors.alto_1,
    borderRadius: 20
  },
  formOuterWrap:{
    marginTop:20,
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  buttonWrap: {
    marginLeft:25,
    marginTop: 60,
    width: "90%",
    height: 60,
  },
  textWrap: {
    marginBottom: 26,
    flexDirection: "row",
    justifyContent: "center",
  },
  iconBoxWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  textHeader: {
    fontSize: 36,
    color: Colors.white,
    textTransform: "capitalize",
    fontWeight: "300",
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    lineHeight: 44,
    marginBottom: 41,
  },

  textLabel: {
    fontSize: 13,
    color: Colors.iron,
    textTransform: "capitalize",
    fontFamily: "Montserrat-Regular",
    fontWeight: "500",
    marginBottom: 10,
  },
  textInputHeader:{
    fontSize: 20,
    color: Colors.white,
    fontWeight: "500",
    fontFamily: "Montserrat-Medium",
    flex: 1,
    marginBottom:10,
    width:'100%',
    marginLeft:50
  },

  textInput: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "500",
    fontFamily: "Montserrat-Regular",
    flex: 1,
    padding:20,
    textAlignVertical: 'top'
  },
//   errorTextWrap:{
//     height:16,
//     marginLeft:15,
//     marginTop:-20,
//     marginBottom:10,
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'flex-start',
//     width:'100%'
// },
  textButton: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    fontWeight: "700",
    textAlign: "center",
    color: Colors.white,
  },
})     
