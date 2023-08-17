import { StyleSheet } from "react-native";
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
    height: "100%",
    width: "100%",
  },

  topHeader: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    height: 55,
    position: "relative",
    zIndex: 2,
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
    fontWeight: "500",
    fontFamily: "Montserrat-Regular",
    color: Colors.white,
  },

  NextWrap: {
    height: 22,
    width: 44,
  },

  NextText: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Montserrat-Regular",
    color: Colors.white,
  },

  contentWrap: {
    margin: 10,
    display:'flex',
    alignItems:'stretch',
  },

  cardWrap: {
    height: 103,
    backgroundColor: "#E7EDFD",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderRadius: 1,
    marginTop: 10,
  },

  cardTextHeader: {
    padding: 10,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat-Regular",
  },

  cardText: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
    width: 305,
    paddingLeft: 10,
  },

  cardContentWrap: {
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  infoIcon: {
    height: 20,
    width: 18,
  },

  loader: {
    marginTop: 25,
    height: 4,
    width: "100%",
    backgroundColor: "#CFDCFB",
  },

  gradient: {
    width: "60%",
    height: 4,
  },

  inputWrap: {
    marginTop: 40,
    display: "flex",
    alignItems: "flex-start",
  },

  inputAuto: {
    height: 81,
  },

  inputAutoText: {
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Montserrat-Regular",
    color: "#D3D4D5",
  },

  TextInput: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Montserrat-Regular",
    color: "#D3D4D5",
  },

  inputUser: {
    backgroundColor: "rgba(217, 217, 217, 0.1)",
    height: 81,
    width: "100%",
    borderRadius: 20,
    marginBottom: 20,
    padding: 20,
  },

  calenderWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  warrantyWrap: {
    // height:34,
    marginTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  infoIconWarranty: {
    height: 20,
    width: 18,
  },

  inputWarrantyText: {
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "Montserrat-Regular",
    color: "#D3D4D5",
    marginLeft: 14,
    // width: 290,
    display: "flex",
    flexWrap: "wrap",
  },

  gradientStep2: {
    width: "60%",
    height: 4,
  },
  uploadDocument: {
    margin: 40,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  imageUpload: {
    height: 222,
    width: 222,
    padding: 20,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "#7095F4",
    borderStyle: "dashed",
    borderWidth: 1,
  },
  imageUpload2: {
    height: 222,
    width: 222,
    padding: 20,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "#C20F90",
    borderStyle: "dashed",
    borderWidth: 1,
  },
  warningText: {
    fontSize: 14,
    color: "#C20F90",
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
  },
  buttonWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 43,
    borderRadius: 60,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonText: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
  },
  uploadButtonWrap: {
    display: "flex",
    justifyContent: "center",
  },
  uploadWarrantyWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  uploadText: {
    padding: 17,
    textAlign: "center",
    color: Colors.white,
  },
  icoLoader: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.white,
    opacity: 0.8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});
