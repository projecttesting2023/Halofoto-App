import { Platform, StatusBar, StyleSheet } from "react-native";
import Colors from "../../../../global/Colors";

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
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    height: 55,
    marginTop: StatusBar.currentHeight,
  },

  topHeaderAnimatedActive: {
    backgroundColor: 'rgba(2, 8, 24, 0.8)',
    height: Platform.OS === 'ios' ? 100 : 100,
    alignItems: 'flex-end',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1000,
    paddingBottom: 20
  },

  titleHolder: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  titleIconWrap: {
    width: 310,
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
  fileIco: {
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
  bannerWrap: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:15
  },
  couponContent: {
    display: "flex",
    justifyContent: "center",
    width:'70%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  imageBox: {
    width: 80,
    height: 100,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    // borderColor:'red',
    // borderWidth:1,
    // borderStyle:'solid'
  },
  couponCardImg: {
    width: '100%',
    height: '100%',
  },
  pointsInnerWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 5,
  },
  piontsIcoBanner: {
    height: 25,
    width: 25,
  },
  piontsIcoSmall: {
    height: 15,
    width: 15,
  },
  bannerPointsSmallWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 220,
    marginTop: 10,
    // borderWidth: 1,
    // borderColor: "red",
    // borderStyle: "solid",
  },
  bannerSmallPointWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  contentWrap: {
    marginTop: 20,
    marginLeft: 20,
    marginRight:20,
    height: "100%",
  },
  contentInnerWrap: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom:80,
    //height: "100%",
  },
  codeWrap: {
    height: 270,
    width: "100%",
    backgroundColor: Colors.black_pearl,
    position: 'absolute',
    bottom: 0,
  },
  opacityWrap: {
    height: 50,
    width: '100%',
    bottom: '33%',
    justifyContent: 'center',
    backgroundColor: 'rgba(3,10,26,0.8)',
    position: 'absolute'
  },
  seeMoreWrap: {
    position: 'absolute',
    zIndex: 2
  },
  codeWrapInner: {
    height: 140,
    borderRadius: 20,
    marginLeft: 26,
    marginRight: 26,
    marginTop: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  textCardHeading: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
  },
  textCardSmall: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
  },
  textDigitSmall: {
    fontSize: 40,
    color: Colors.white,
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold",
    lineHeight: 49,
  },
  textCardContent: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
    lineHeight: 20,
    width: 190,
    marginTop: 5,
  },
  textDigitBottom: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
    marginRight: 5,
  },
  textCardBottom: {
    fontSize: 11,
    color: Colors.white,
    fontWeight: "600",
    fontFamily: "Montserrat-Regular",
    lineHeight: 13,
    marginRight: 5,
  },
  textContentHeading: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: "600",
    fontFamily: "Montserrat-Bold",
    lineHeight: 15,
    marginTop:15
  },
  textContentName: {
    fontSize: 22,
    color: Colors.white,
    fontWeight: "500",
    fontFamily: "Montserrat-Medium",
    lineHeight: 22,
    marginTop: 12,
  },
  textcontentInner: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
    width: 372,
    lineHeight: 21,
    marginTop: 5,
  },
  textSeeMore: {
    fontSize: 12,
    color: Colors.blue,
    fontWeight: "700",
    fontFamily: "Montserrat-Regular",
    lineHeight: 15,
    marginTop: 5,
    marginLeft: 10
  },
  textCodeInner: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold",
    lineHeight: 21,
  },
  textCode: {
    fontSize: 40,
    color: Colors.black,
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold",
    lineHeight: 49,
    marginTop: 20,
    marginBottom: 20
  },
  textCodeInnerBottom: {
    fontSize: 11,
    color: Colors.black,
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold",
    lineHeight: 13,
    marginTop: 5,
  },
  textBottom:{
    marginLeft:8,
    fontSize: 16,
    color: Colors.white,
    fontWeight: "700",
    fontFamily: "Montserrat-Bold",
  },
  uploadButtonWrap: {
    width: '100%',
    height: 60,
    marginBottom:20
  },
  buttonTickWrap:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
});
