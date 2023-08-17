import { StyleSheet, StatusBar } from "react-native";
import Colors from "../../../global/Colors";

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
    flexDirection: "row",
  },

  containerWrap: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  topHeader: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    height: 55,
    // borderWidth:1,
    // borderStyle:'solid',
    // borderColor:'red'
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

  scrollWrap: {
    display: "flex",
    width: "100%",
  },
  buttonSwitchWrap: {
    margin: 20,
    width: "90%",
    display: "flex",
  },
  tuneWrap:{
    margin: 20,
  },
  conditionWrap: {
    margin: 20,
    width: "90%",
    display: "flex"
  },
  logoWrap: {
    height: 45,
    width: "100%",
    marginBottom: 55,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: StatusBar.currentHeight,
  },

  dropdown: {
    height: 50,
    marginLeft: 20,
    marginTop: 30,
    width: "70%",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 40,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: "Montserrat-Medium",
    fontWeight: "500",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: "Montserrat-Medium",
    fontWeight: "500",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },

  pageHeading: {
    fontSize: 22,
    color: Colors.white,
    fontFamily: "Montserrat-Medium",
    fontWeight: "500",
  },

  textLink: {
    marginBottom:20,
    fontSize: 18,
    color: Colors.white,
    fontFamily: "Montserrat-Medium",
    fontWeight: "500"
  },
  textConditionLink:{
    marginBottom:30,
    fontSize: 18,
    color: Colors.white,
    fontFamily: "Montserrat-Medium",
    fontWeight: "500",
  },
  textLinkSmall:{
    fontSize: 12,
    color: Colors.white,
    fontFamily: "Montserrat-Medium",
    fontWeight: "500",
    marginBottom:20
  },
  textHeadingDropDown: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: "Montserrat-Medium",
    fontWeight: "500",
  },

  buttonWrap: {
    backgroundColor: Colors.blue_ribbon,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 60,
    borderRadius: 60,
  },

  buttonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "700",
  },
  socialMediaLogin: {
    padding: 20,
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    height: 168,
    borderTopColor: Colors.denim,
    borderTopWidth: 1,
  },
  textWrap: {
    margin: 0,
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  iconBox: {
    backgroundColor: Colors.deep_cove,
    height: 76,
    width: 76,
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginLeft: 10,
  },
  iconBoxWrap: {
    justifyContent: "center",
    flexDirection: "row",
  },
  iconWrap: {
    height: 17,
    width: 20,
  },

  labelSignUp: {
    color: Colors.azure_radiance_1,
  },

  checkBoxWrap: {
    marginTop: 15,
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
  },

  textCategory: {
    marginLeft: 15,
    fontSize: 14,
    fontWeight: "400",
    color: Colors.white,
    fontFamily: "Montserrat-Regular",
  },
});
