import { StyleSheet } from "react-native";
import Colors from "../../../../global/Colors";

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
    display: "flex",
    height: "100%",
    backgroundColor: "rgba(17, 17, 17, 0.5)",
  },
  container: {
    height: "80%",
    marginTop: "auto",
    backgroundColor: Colors.black_pearl,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  headerContent: {
    margin:25,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },

  btnBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 20,
    height: 38,
    borderRadius: 40,
    backgroundColor: "#071F5F",
    borderColor: "#071F5F",
    borderWidth: 1,
    borderStyle: "solid",
  },

  textBannerSmall: {
    color: "#fff",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 10,
    marginLeft: 8,
  },
  tabButtonWrap: {
    height: 90,
    margin: 5,
  },
  tabOption: {
    height: "100%",
    width:'100%',
    borderRadius: 20,
    marginRight:10,
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
    height: 68,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "rgba(3, 16, 47, 1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pageHeading: {
    fontSize: 22,
    color: Colors.white,
    fontFamily: "Montserrat-Medium",
    fontWeight: "500",
    lineHeight: 27,
  },
  textTab: {
    marginLeft: 16,
    fontSize: 18,
    color: Colors.white,
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold",
  },
});
