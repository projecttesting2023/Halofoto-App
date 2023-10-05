import {StyleSheet } from "react-native"
import Colors from "../../../global/Colors"
import Constants from 'expo-constants'
import { responsiveHeight } from "react-native-responsive-dimensions";

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
    alignItems:Platform.OS === 'ios' ? 'center' : 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height:Constants.statusBarHeight+(Platform.OS === 'ios' ? responsiveHeight(8) : 70),
    paddingBottom:Platform.OS === 'ios' ? 0 : 20,
    width:'100%',
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
  mainBodyWrap: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 40,
  },

  productsWrap: {
    width: "100%",
    marginTop: 30,
    marginBottom: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  serialNumber: {
    backgroundColor: "#4171F1",
    height: 35,
    width: 160,
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  validUntil: {
    marginBottom: 30,
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },

  dootsList: {
    height: 10,
    width: 10,
    borderRadius: 20,
    backgroundColor: "#4171F1",
    marginRight: 5,
  },
  lensInfo: {
    marginBottom: 30,
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginLeft: -35,
  },

  infoWrap: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  icolBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    width: 20,
    marginRight: 10,
  },

  tabWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#343E4A",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    paddingBottom: 20,
    marginTop: 25,
    marginBottom: 25,
  },
  tabBtnActive: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    borderRadius: 40,
    backgroundColor: "rgba(211, 212, 213, 0.20)",
    marginRight: 15,
  },
  tabBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
    borderRadius: 40,
    backgroundColor: "rgba(211, 212, 213, 0.20)",
    marginRight: 15,
  },
  btnActive: {
    height: 40,
    borderRadius: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  certificateWrap: {
    marginBottom: 70,
  },
  specificationWrapInner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  textProductName: {
    fontSize: 40,
    color: Colors.white,
    fontWeight: "300",
    lineHeight: 49,
    fontFamily: "Montserrat-Light",
  },
  textProductCategoryName: {
    fontSize: 12,
    color: "#BCBCBC",
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 30,
  },
  textSerial: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "700",
  },
  textDateWrap: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "600",
    marginRight: 5,
  },
  textDate: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "400",
  },
  textDataSmall: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "400",
  },
  textCategoryWrap: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "700",
  },
  textCertWrap:{
    fontSize: 38,
    color: Colors.white,
    fontWeight: "300",
    textTransform: "uppercase",
    marginTop: 18,
    marginBottom: 18,
  },
  textInnerContent:{
    fontSize: 14,
    color: "#D3D4D5",
    fontWeight: "400",
  },
  textInnerHeading:{
    fontSize: 14,
    color: "#D3D4D5",
    fontWeight: "500",
  },
  textInfoTech:{
    fontSize: 38,
    color: Colors.white,
    fontWeight: "300",
    textTransform: "uppercase",
    marginTop: 18,
    marginBottom: 18,
  },
  textSpecification:{
    fontSize: 16,
    color: "#A6A6A6",
    fontWeight: "700",
    marginBottom: 25,
  }
});
