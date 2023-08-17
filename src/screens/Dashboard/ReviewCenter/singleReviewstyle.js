import { StatusBar, StyleSheet } from "react-native"
import Colors from "../../../global/Colors"

export default StyleSheet.create({
  container: {
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
  titleHolder: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  backWrap: {
    // borderColor: 'red',
    // borderWidth: 1,
    // borderStyle: 'solid',
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
  contentWrap: {
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
  },
  imageWrap: {
    height: 250,
    width: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  productImg: {
    height: 250,
    width: 150,
    borderRadius: 20,
    // borderColor:'red',
    // borderWidth:1,
    // borderStyle:'solid'
  },
  textWrap: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  headingNameWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:11
  },
  textContentHeading: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "600",
    marginRight:10,
    fontFamily: "Montserrat-Regular",
    textDecorationLine: "underline",

  },
  textContentSerial: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "500",
    marginBottom: 11,
    fontFamily: "Montserrat-Regular",
  },
  textContentRating: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: "600",
    marginBottom: 11,
    fontFamily: "Montserrat-Regular",
  },
  reviewWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 16,
    marginLeft: 10
  },

  buttonTickWrap:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },

  buttonWrap: {
    marginTop: 28,
    height: 43,
  },
});
