import { StatusBar, StyleSheet } from "react-native";
import Colors from "../../../../global/Colors";

export default StyleSheet.create({
  hotDealsWrap: {
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 20,
  },
  hotDealsSlide: {
    marginBottom: 20,
    width: 320,
    height:407,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  productCard: {
    borderStyle: "solid",
    borderRadius: 20,
    width: '100%',
    backgroundColor: Colors.deep_cove,
    flex: 1,
    paddingBottom: 20,
    borderColor: Colors.torea_bay,
    borderWidth: 1,
    shadowColor: Colors.catalina_blue,
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 5,
  },
  productWrap: {
    height: 212,
    width: "100%",
    padding: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  productImg: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    resizeMode:'contain'
    // borderColor:'red',
    // borderWidth:1,
    // borderStyle:'solid'
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
    flexWrap: "wrap",
    display: "flex",
    width: "100%",
  },
  productDetailsInner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  lensType: {
    backgroundColor: Colors.black,
    height: 25,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 15,
  },
  productModel: {
    fontSize: 14,
    color: Colors.white,
  },
  productDetailsInnerSmall: {
    justifyContent: "space-between",
  },
  buttonWrap: {
    height: 43,
  },
});
