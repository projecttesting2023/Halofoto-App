import { Platform, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Colors from ".././../../global/Colors";

export default StyleSheet.create({
  topHeader: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    height: Constants.statusBarHeight + (Platform.OS === "ios" ? 50 : 60),
    paddingBottom: Platform.OS === "ios" ? 20 : 20,
    width: "100%",
  },

  // topHeader: {
  //     display: 'flex',
  //     alignItems: 'center',
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     paddingLeft: 20,
  //     paddingRight: 20,
  //     height: 55,
  //     position: 'relative',
  //     width:'100%'
  // },

  titleHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexDirection: "row",
  },

  backWrap: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
  },

  backArrow: {
    height: 14,
    width: 8,
  },

  pageHeading: {
    fontSize: 22,
    fontWeight: "500",
    fontFamily: "Montserrat-Regular",
    color: Colors.white,
    marginLeft: 20,
  },

  NextText: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Montserrat-Regular",
    color: Colors.white,
  },
});
