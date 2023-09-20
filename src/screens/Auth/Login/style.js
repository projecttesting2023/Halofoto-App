import { StyleSheet, StatusBar, Dimensions, Platform } from "react-native";
import Colors from "../../../global/Colors";

const { height, weight } = Dimensions.get('window')

export default StyleSheet.create({

  overlayWrap: {
    backgroundColor: Colors.black,
    height: height,
    width: weight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },

  scrollWrap: {
    width: "100%",
    height: '100%',
    paddingLeft: 25,
    paddingRight: 25,
  },

  logoWrap: {
    height: '7%',
    marginBottom: 20,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    //marginTop: StatusBar.currentHeight*3,
    marginTop: Platform.OS == 'ios' ? height * 0.06 : height * 0.10,
  },

  logoSmall: {
    height: 40,
    width: 97,
  },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10
  },
  formWrapp: {
    height: height * 0.45,
    width: '100%',
  },
  inputWrapp: {
    marginBottom: 5,
    fontSize: 14,
    backgroundColor: Colors.alto_1,
    color: Colors.white,
    borderRadius: 20,
    height: Platform.OS == 'ios' ? height * 0.08 : height * 0.10,
  },

  formWrappFooter: {
    height: 35,
    fontSize: 20,
    color: Colors.white,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    height: "100%",
    display: "flex",
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: "center",
  },

  buttonWrap: {
    width: "100%",
    height: '18%',
  },
  line: {
    marginLeft: 22,
    marginRight: 22,
    borderTopColor: Colors.denim,
    borderTopWidth: 1,
    borderStyle: "solid",
    marginBottom: 10,
    marginTop: 5
  },
  socialMediaLogin: {
    display: "flex",
    justifyContent: "center",
    height: '10%',
    marginTop: 10,
    marginBottom: '25%',
  },
  textWrap: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  iconBoxWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: '16%',
    marginTop: 10
  },
  iconBox: {
    backgroundColor: Colors.deep_cove,
    height: 70,
    width: 70,
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginLeft: 9,
    marginRight: 9
  },
  iconWrap: {
    height: 17,
    width: 20,
  },

  labelSignUp: {
    color: Colors.azure_radiance_1,
  },

  textHeader: {
    fontSize: 36,
    color: Colors.white,
    textTransform: "capitalize",
    fontWeight: "300",
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    lineHeight: 44,
    marginBottom: '10%',
  },

  textLabel: {
    fontSize: 13,
    color: Colors.iron,
    textTransform: "capitalize",
    fontFamily: "Montserrat-Regular",
    fontWeight: "500",
    paddingLeft: 10,
    paddingTop: 10
  },

  textInput: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "500",
    fontFamily: "Montserrat-Regular",
    flex: 1,
    paddingLeft: 15,
  },

  textCheckLabel: {
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    fontWeight: "500",
    color: Colors.silver_chalice,
    marginLeft: 10,
  },

  textButton: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    fontWeight: "700",
    lineHeight: 20,
    textAlign: "center",
    color: Colors.white,
  },

  textNewAccount: {
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    fontWeight: "500",
    textAlign: "center",
    textTransform: "capitalize",
    color: Colors.white,
  },

  textSignLink: {
    marginLeft: 5,
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    fontWeight: "500",
    textAlign: "center",
    textTransform: "capitalize",
    color: Colors.azure_radiance_1,
  },
});

// fontSize: 36,
//         color: Colors.white,
//         textTransform: 'capitalize',
//         // fontWeight: '300',
//         marginBottom: 50,
//         fontFamily: 'Montserrat-Light',
