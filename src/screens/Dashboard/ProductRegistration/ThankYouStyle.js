import { StyleSheet } from "react-native"
import Colors from "../../../global/Colors"

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
    alignItems: "center",
  },
  contentWrap: {
    display: "flex",
    alignItems: "center",
    padding: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
    marginRight: 40,
  },
  logoWrap: {
    height: 150,
    width: 150,
    marginTop: 150,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 300,
  },
  congratsLogoWrap: {
    height: 252,
    width: 272,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 300,
  },
  textContentWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pointsWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop:30
  },
  successWrap:{
    width:376
  },
  buttonWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 374,
    height: 60,
    borderRadius: 60,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "700",
  },
  uploadButtonWrap: {
    width:'90%',
    height:60,
    display: "flex",
    justifyContent: "center",
  },
  text: {
    color: Colors.white,
    paddingTop: 30,
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
    color: Colors.white,
    textAlign: "center",
    lineHeight: 29
  },
  text1: {
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
    color: Colors.white,
  },
  textSize: {
    paddingTop: 50,
    fontSize: 40,
    fontWeight: "300",
    fontFamily: "Montserrat-Light",
    color: Colors.white,
    width: 376,
    textAlign: "center",
  },
  textPointsSize: {
    fontSize: 40,
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold",
    color: Colors.white,
  },
});
