import { StatusBar, StyleSheet } from "react-native";
import Colors from "../../../../global/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    // justifyContent: 'center',
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
  overlayWrapBanner: {
    height: 310,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    flexDirection: "row",
    marginBottom: 50,
  },
  textWrap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    paddingLeft: 20,
  },
  bannerText: {
    color: Colors.white,
    position: "relative",
    zIndex: 1,
    fontSize: 36,
    fontWeight: "300",
    fontFamily: "Montserrat-Regular",
    position: "relative",
    zIndex: 1,
    width: 282,
    marginBottom: 15,
  },
  captionText: {
    fontSize: 14,
    color: Colors.iron,
    fontWeight: "300",
    width: 162,
  },
  bannerBG: {
    flex: 1,
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  productList: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 100,
  },
  productListVerical: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  hotDealsWrap: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
  headingCategory: {
    fontSize: 22,
    color: Colors.white,
    textTransform: "capitalize",
    fontWeight: "500",
    marginBottom: 20,
  },
  hotDealsSlide: {
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    marginBottom: 200
  },

  hotDealsSingle:{
  marginTop:10,
  marginBottom:10,
  },
  productCard: {
    borderStyle: "solid",
    borderRadius: 20,
    width: 320,
    height:"100%",
    padding:20,
    backgroundColor: Colors.deep_cove,
    flex: 1,
    borderColor: Colors.torea_bay,
    borderWidth: 1,
    shadowColor: Colors.catalina_blue,
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 5,
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
  productWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    marginLeft: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  
  },
  productDetails: {
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    color: Colors.white,
    marginBottom: 10,
    width:'100%',
    flexWrap: "wrap",
    fontFamily: "Montserrat-SemiBold",
  },
  productDetailsInner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  productDetailsInnerSmall: {
    display:'flex',
    flexDirection:'row',
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  productModel: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: "Montserrat-Regular",
  },
  textCompatiableMount:{
    fontSize: 14,
    color: Colors.white,
    fontFamily: "Montserrat-Regular",
  },
  textProductModel:{
    width:120,
    fontSize: 14,
    color: Colors.white,
    fontFamily: "Montserrat-Regular",
  },
  productReating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  starRating: {
    marginRight: 5,
    height: 10,
    width: 10,
  },
  reviews: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: "Montserrat-Regular",
    marginLeft:3,
  },
  lensType: {
    backgroundColor: Colors.jordy_blue,
    height: 25,
    width:55,
    borderRadius: 25,
    display: "flex",
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
    marginRight:10,
  },
  priceWrap: {
    // justifyContent: 'space-between',
    alignItems: "flex-end",
  },
  priceTag: {
    fontSize: 14,
    color: Colors.white,
    marginBottom: 10,
    fontFamily: "Montserrat-Regular",
  },
  price: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: "Montserrat-Regular",
  },
  salePrice: {
    fontSize: 22,
    color: Colors.white,
  },
  moreProductsWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  moreProducts: {
    fontSize: 16,
    color: Colors.azure_radiance,
    textTransform: "capitalize",
    fontWeight: "700",
  },
  catalogBanner: {
    display: "flex",
    flexDirection: "column",
  },
  bannerMainWrap: {
    display: "flex",
  },

  captionText: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "500",
    fontFamily: "Montserrat-Regular",
    width: 182,
  },
  bannerBg: {
    flex: 1,
    position: "absolute",
    right: 20,
    bottom: 20,
    height: 255,
    width: 255,
  },
  bannerWrap: {
    flexDirection: "row",
    // paddingLeft: 28,
    // paddingRight: 28,
  },
  // bannerTextWrap: {
  //     flexDirection: 'column',
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  // },

  bannerNavWrap: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  bannerNav: {
    width: 6,
    height: 6,
    borderRadius: 10,
    marginLeft: 3,
    marginRight: 3,
  },

  productImgSmall: {
    height: 89,
    width: 44,
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
});
