import { StyleSheet, StatusBar } from "react-native";
import Colors from "../../../global/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 0,
    paddingRight: 0,
  },

  overlayWrap: {
    backgroundColor: Colors.black,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  inputWrapSmall: {
    width: "40%",
  },
  inputWrapNumber: {
    width: "60%",
  },

  callWrapp: {
    height: 90,
    backgroundColor: Colors.alto_1,
    borderRadius: 20,
  },

  callWrappInner: {
    marginTop: 10,
    paddingLeft: 22,
    paddingRight: 22,
    height: 40,
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

  scrollWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  logoWrap: {
    height: 252,
    width: 252,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    position: "relative",
  },
  lockBg: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lock: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    left: 0,
    top: 0,
    marginLeft: 20,
    // borderColor: "red",
    // borderWidth: 1,
    // borderStyle: "solid",
  },
  contentWrap: {
    height: 180,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrap: {
    height: 50,
    width: "80%",
  },
  textContent: {
    fontSize: 30,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Bold",
    marginBottom:30,
    marginTop:-100,
    textAlign:'center'
  },
  textContentSmall:{
    fontSize: 16,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
  }
});
