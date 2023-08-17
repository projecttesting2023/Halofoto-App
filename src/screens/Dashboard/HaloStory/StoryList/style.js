import { Platform, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Colors from "../../../../global/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
  },

  overlayWrap: {
    backgroundColor: Colors.black,
    height: "100%",
    width: "100%",
    display: "flex",
  },

  iconWrap: {
    width: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },

  topHeader: {
    display: "flex",
    alignItems: Platform.OS === "ios" ? "center" : "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    height: Constants.statusBarHeight + (Platform.OS === "ios" ? 0 : 70),
    paddingBottom: Platform.OS === "ios" ? 0 : 20,
    width: "100%",
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
    height: "100%",
  },
  mainBodyWrap: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: Platform.OS == "ios" ? 0 : 90,
  },

  newsSlider: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    height: 350,
  },
  newsSliderBox: {
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    width: 318,
    overflow: "hidden",
    position: "relative",
    marginRight: 10,
  },

  slidebg: {
    width: "100%",
    height: "100%",
    borderRadius: 19,
  },

  newsTag: {
    position: "absolute",
    right: 15,
    top: 15,
    height: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: Colors.denim,
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 2,
  },

  newsslideboxOverlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    borderRadius: 20,
    display: "flex",
    justifyContent: "flex-end",
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },

  newsMeta: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
  },
  categoryTag: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: Colors.black_pearl,
    paddingLeft: 10,
    paddingRight: 10,
    height: 30,
  },
  categorySlider: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 25,
    paddingBottom: 25,
  },

  newsCardWrap: {
    marginBottom: Platform.OS === "ios" ? 110 : 110,
  },

  newsCard: {
    width: "100%",
    borderColor: "rgba(255, 255, 255, 0.2)",
    backgroundColor: "rgba(17, 78, 237, 0.1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  newsCardContent: {
    padding: 15,
    width: "65%"
  },

  categoryTagCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: Colors.black_pearl,
    height: 25,
    alignSelf: "flex-start",
    marginBottom: 10,
  },

  newsCardImg: {
    width: "35%",
    height: "100%",
    borderTopRightRadius: 19,
    borderBottomRightRadius: 19,
    // borderWidth:1,
    // borderStyle:'solid',
    // borderColor:'red'
  },
  textHeader: {
    fontSize: 22,
    color: Colors.white,
    fontWeight: "500",
    fontFamily: "Montserrat-Regular",
  },
  textCardNews: {
    width: "100%",
    height: 64,
    fontSize: 16,
    color: Colors.white,
    fontWeight: "600",
    marginBottom: 10,
    fontFamily: "Montserrat-Regular",
    overflow: "hidden",
  },
  textBanner: {
    fontSize: 14,
    color: Colors.iron,
    fontWeight: "300",
    marginBottom: 16,
    fontFamily: "Montserrat-Regular",
  },
  // textBannerHeading: {
  //   fontSize: 36,
  //   color: Colors.iron,
  //   fontWeight: "300",
  //   marginBottom: 16,
  //   fontFamily: "Montserrat-Regular",

  // },
  textCardSmall: {
    fontSize: 11,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
    marginLeft: 5,
    marginRight: 5
  },

  textBannerHeading: {
    fontSize: 22,
    lineHeight: 27,
    color: Colors.white,
    fontFamily: "Montserrat-Regular",
    fontWeight: "500",
    marginBottom: 20,
  },
});
