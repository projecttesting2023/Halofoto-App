import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../../global/Colors";
const {height,weight} = Dimensions.get('window')

export default StyleSheet.create({
  error: {
    color: Colors.red_orange,
    paddingTop: 4,
    fontSize: 10,
    textTransform: "uppercase",
    marginTop: -10,
    marginBottom: 10,
  },
  modalWrap: {
    display: 'flex',
    height: '100%',
    marginTop: 'auto',
    backgroundColor: Colors.white,
  },
  modalBgWrap: {
    height: '100%'
  },
  container: {
    height: "100%",
    marginTop: "auto"
  },


  //  modalWrap: {
  //     display: 'flex',
  //     height: '100%',
  //     backgroundColor: 'rgba(17, 17, 17, 0.5)',
  // },
  // container: {
  //     height: '40%',
  //     marginTop: 'auto',
  //     backgroundColor: Colors.white,
  //     borderTopRightRadius: 20,
  //     borderTopLeftRadius: 20,
  // },

  headerContent: {
    marginTop: height*0.05,
    marginLeft: 20,
    marginRight: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Montserrat-Medium",
  },
  checkBoxWrap: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  mountTypedWrap: {
    marginTop: 15,
    marginBottom: 34,
    marginLeft: 10,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  headerWrap: {
    marginRight: 20,
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  cardWrap: {
    marginTop: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "space-between",
  },
  activeCardWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  iconWrap: {
    height: 50,
    width: 50,
    padding: 0,
    margin: -8,
    position: "absolute",
    zIndex: 1,
    bottom: 0,
    left: "36%",
  },
  genderCard: {
    height: 108,
    width: 108,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.hawkes_blue,
    borderRadius: 20,
    borderColor: Colors.jordy_blue,
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 10,
  },
  genderCardActive: {
    backgroundColor: Colors.jordy_blue,
    borderColor: Colors.blue_ribbon,
    borderStyle: "solid",
    borderWidth: 1,
  },
  genderCardButton: {
    height: 43,
    width: '48%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.hawkes_blue,
    borderRadius: 20,
    borderColor: Colors.jordy_blue,
    borderStyle: "solid",
    borderWidth: 1,
  },
  genderCardButtonActive: {
    backgroundColor: Colors.jordy_blue,
    borderColor: Colors.blue_ribbon,
    borderStyle: "solid",
    borderWidth: 1,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "800",
    color: Colors.black,
    fontFamily: "Montserrat-Bold",
  },
  buttonWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  inputWrapp: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: -5,
    marginRight: -10,
  },
  fileIco: {
    display: "flex",
    justifyContent: "center",
    height: 24,
    width: 24,
    marginRight: 5,
  },
  inputWrapModal: {
    width: "50%",
    marginRight: 5,
  },
  inputTxt: {
    color: Colors.white,
  },
  errorWrap: {
    borderColor: Colors.red_violet,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 20,
  },
  error: {
    color: Colors.red_violet,
    fontSize: 10,
    textTransform: "uppercase",
    marginTop: -20,
    marginBottom: 20,
    marginLeft: 15,
  },
  textCategory: {
    marginLeft: 15,
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Montserrat-Regular",
  },
  selectText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "600",
    color: Colors.azure_radiance_1,
    fontFamily: "Montserrat-SemiBold",
  },
});
