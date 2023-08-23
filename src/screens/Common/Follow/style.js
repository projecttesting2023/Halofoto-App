import { StyleSheet, StatusBar, Dimensions } from "react-native";
import Colors from "../../../global/Colors";
import { responsiveFontSize, responsiveWidth } from "react-native-responsive-dimensions";

const {height,width} = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 0,
    paddingRight: 0
  },

  overlayWrap: {
    backgroundColor: Colors.black,
    height: height,
    width: width,
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
  contentWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  tabWrap: {
    marginTop:10,
    marginBottom:100,
    width: width*0.9,
  },
  tabButtonWrap:{
    height: 90,
    marginBottom:8,
    marginTop:8,
    height:height*0.09,
  },
  tabOption: {
    width: width*0.9,
    height:'100%',
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: "rgba(5, 23, 71, 0.9)",
    borderColor: "rgba(7, 31, 95, 1)",
    borderWidth: 1,
    borderStyle: "solid",
  },
  logoWrap: {
    height: '85%',
    width: '16%',
    borderRadius: 20,
    marginLeft:10,
    backgroundColor: "rgba(3, 16, 47, 1)",
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  pageHeading: {
    fontSize: 22,
    color: Colors.white,
    fontFamily: "Montserrat-Medium",
    fontWeight: "500",
    lineHeight: 27,
  },
  textTab: {
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    color: Colors.white,
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold"
  },
});
