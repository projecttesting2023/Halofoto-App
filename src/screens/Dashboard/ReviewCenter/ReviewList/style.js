import {Dimensions, Platform, StyleSheet } from "react-native";
import Colors from "../../../../global/Colors";
import Constants from 'expo-constants'
import { responsiveHeight } from "react-native-responsive-dimensions";

const{height,width} = Dimensions.get('window')

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
    width: "100%",
    height:height*1.19,
    display: "flex",
    paddingBottom:responsiveHeight(30)
  },
  topHeader: {
    display: 'flex',
    alignItems:Platform.OS === 'ios' ? 'flex-end' : 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height:Constants.statusBarHeight+(Platform.OS === 'ios' ? 130 : 145),
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
    fontFamily: "Montserrat-Medium",
    fontWeight: "300",
  },
  fileIco: {
    display: "flex",
    justifyContent: "center",
    height: 24,
    width: 24,
    marginRight: 5,
  },
  filteBtn: {
    height: 21,
    width: 21,
  },
  productList: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardHeadingWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop:20
  },
  cardHeading: {
    fontSize: 22,
    color: Colors.white,
    textTransform: "capitalize",
    fontWeight: "500",
  },
  cardWrap: {
    marginBottom:Platform.OS === 'ios' ? 100 : 100,
    paddingLeft:15,
    paddingRight:15,
    height:'81%',
    marginTop:responsiveHeight(2)
  },
  productListVerical: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  categoryTagWrap: {
    backgroundColor: Colors.denim,
    height: 25,
    borderRadius: 25,
    position: "absolute",
    left: 11,
    top: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 1,
  },
  categoryTag: {
    fontSize: 11,
    color: Colors.white,
    textTransform: "uppercase",
  },
  productWrapSmall: {
    width: 100,
  },
  priceWrap: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  priceTag: {
    fontSize: 14,
    color: Colors.white,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: Colors.white,
  },
  salePrice: {
    fontSize: 22,
    color: Colors.white,
  },
  mainScroll: {
    height: "100%",
    paddingBottom: Platform.OS === 'ios' ? 40 : 100,
  },
});
