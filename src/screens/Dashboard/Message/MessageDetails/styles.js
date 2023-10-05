import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import Colors from "../../../../global/Colors";
import { responsiveHeight } from "react-native-responsive-dimensions";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
    alignItems: Platform.OS === "ios" ? "flex-end" : "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    height: Constants.statusBarHeight + (Platform.OS === "ios" ? responsiveHeight(10) : 70),
    paddingBottom: Platform.OS === "ios" ? 20 : 20,
    width: "100%",
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

  mainScroll: {
    height: "100%",
  },

  newsCardWrap: {
    marginBottom: Platform.OS === "ios" ? 110 : 110,
  },

  mainBodyWrap: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  messageListWrap: {
    borderColor: "rgba(255, 255, 255, 0.2)",
    backgroundColor: "rgba(17, 78, 237, 0.1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    display: "flex",
    flexDirection: "column",
    marginTop: 5,
  },

  messageCard: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingLeft: 16,
    paddingTop: 22,
  },

  listDots: {
    height: 9,
    width: 9,
    borderRadius: 10,
    backgroundColor: "#0082ED",
  },
  messageContent: {
    paddingLeft: 15,
    paddingRight: 15,
    width: "100%",
    display: "flex",
  },

  messageInfo: {
    height:31,
    width:'100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  messageMeta: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 15,
    paddingBottom: 15,
  },
  metaDots: {
    height: 3,
    width: 3,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginLeft: 4,
    marginRight: 4,
  },

  messageCategory: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 112,
    height: 30,
    borderTopLeftRadius: 20,
  },
  textContent: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "300",
    fontFamily: "Montserrat-Regular",
  },
  textMessageCategory: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "300",
    fontFamily: "Montserrat-Medium",
  },
  textContentHeader: {
    fontSize: 22,
    color: Colors.white,
    fontWeight: "500",
    fontFamily: "Montserrat-Medium",
  },
  textContentTime: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold",
  },
});
