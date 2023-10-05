import { StatusBar, StyleSheet,Dimensions } from "react-native";
import Constants from "expo-constants"
import Colors from "../../../global/Colors";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
const {height,weight} = Dimensions.get('window')

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
    alignItems:'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height:Constants.statusBarHeight+(Platform.OS === 'ios' ? responsiveHeight(8) : 60),
    paddingBottom:Platform.OS === 'ios' ? 20 : 20,
    width:'100%',
  },

  titleHolder: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  titleIconWrap: {
    width: 340,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backWrap: {
    display: "flex",
    justifyContent: "center",
    height: 24,
    width: 24,
    marginRight: 5,
  },

  pageHeading: {
    fontSize: 22,
    color: Colors.white,
    fontFamily: "Montserrat-Regular",
    fontWeight: "500",
  },

  mainScroll: {
    height: "90%",
  },
  mainBodyWrap: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 40,
  },

  couponBanner: {
    width: "100%",
    marginTop: 30,
    borderRadius: 20,
  },

  pointsWrapmain: {
    display: "flex",
    flexDirection: "row",
  },

  pointsWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderTopLeftRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },

  bluePoints: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
  },
  bluePointsWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    // borderColor: "red",
    // borderWidth: 1,
    // borderStyle: "solid",
  },
  yellowPointsWrap:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
  
  iconWrap: {
    height: 60,
    width: 60,
    marginLeft: 5,
    marginTop: 5,
  },
  separatorVertical: {
    marginTop: 30,
    width: 2,
    height: 60,
    backgroundColor: "#4171F1",
    position: "absolute",
    left: "51%",
    zIndex: 1,
  },

  buttonWrapp: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },

  btnBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 20,
    height: 38,
    borderRadius: 40,
    backgroundColor: "#071F5F",
    borderColor: "#071F5F",
    borderWidth: 1,
    borderStyle: "solid",
  },
  nameCard: {
    height: 208,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  nameContentWrap:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  profileTitleOuter: {
    height: 104,
    width: 104,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 2,
    borderStyle: "solid",
    marginRight: 2,
    marginLeft: 5,
  },
  profileTitle: {
    fontSize: 36,
    color: Colors.white,
    fontWeight: "300",
    fontFamily: "Montserrat-Light",
  },
  editIconWrap:{
    display:'flex',
    justifyContent:'flex-start',
    position:'absolute',
    zIndex:2,
    bottom:0,
    right:0
  },
  idWrap: {
    marginTop:9,
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center"
  },
  tabWrap: {
    marginTop: 40,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  tabOption: {
    height: 90,
    marginBottom: 8,
    paddingLeft: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: "100%",
    borderRadius: 20,
    backgroundColor: "rgba(5, 23, 71, 0.9)",
    borderColor: "rgba(7, 31, 95, 1)",
    
  },
  logoWrap: {
    height: 68,
    width: 68,
    borderRadius: 20,
    backgroundColor: "rgba(3, 16, 47, 1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textTab: {
    marginLeft: 10,
    fontSize: 18,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-SemiBold",
    lineHeight: 22,
  },
  textCardMedium: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "700",
    fontFamily: "Montserrat-Regular",
    lineHeight: 20,
  },
  textCardSmall: {
    fontSize: responsiveFontSize(1.5),
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
  },
  textBannerSmall: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "600",
    fontFamily: "Montserrat-Regular",
    lineHeight: 17,
    marginLeft: 5,
  },
  textDigitPoints: {
    fontSize: 28,
    color: "#fff",
    fontFamily: "Montserrat-Regular",
  },
  textEmptyHeader: {
    marginTop: 25,
    fontSize: 40,
    color: Colors.white,
    fontWeight: "300",
    fontFamily: "Montserrat-Light",
    textAlign: "center",
  },
  textEmptycontent: {
    marginTop: 24,
    fontSize: 18,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
  textName: {
    marginTop: 24,
    fontSize: 18,
    color: Colors.white,
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold",
  },
  textId: {
    marginRight:5,
    fontSize: 20,
    color: Colors.white,
    fontWeight: "600",
    fontFamily: "Montserrat-Medium",
  },

  profileImage:{
    width:100,
    height:100,
    borderRadius:50,
  }
});
