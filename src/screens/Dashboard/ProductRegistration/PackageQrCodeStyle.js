import { StyleSheet } from "react-native";
import Colors from "../../../global/Colors";

// const edge = {
//     borderColor: Colors.white,
//     borderLeftWidth: 4,
//     borderTopWidth: 4,
//     borderTopLeftRadius:10,
//     position: 'absolute',
//     height: 50,
//     width: 44,
//   }

export default StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  topBar: {
    paddingTop: 80,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    position: "absolute",
    zIndex: 2,
  },

  iconWrap: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 35,
  },

  icoClose: {
    color: Colors.white,
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  unfocusedContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },

  buttonWrap: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    width: "90%",
    height: 60,
  },

  middleContainer: {
    flexDirection: "row",
    flex: 1,
    borderRadius: 20,
  },
  focusedContainer: {
    flex: 6,
  },
  animationLineStyle: {
    height: 2,
    width: "100%",
    backgroundColor: Colors.white,
  },
  rescanIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // topLeft: {
  //     ...edge,
  //     left: 49,
  //     top: -4,
  //   },
  //   topRight: {
  //     transform: [{ rotateY: '180deg' }],
  //     ...edge,
  //     top: 0,
  //     right: 0,
  //   },
  //   bottomRight: {
  //     transform: [{ rotate: '180deg' }],
  //     ...edge,
  //     right: 0,
  //     bottom: 0,
  //   },
  //   bottomLeft: {
  //     transform: [{ rotateX: '180deg' }],
  //     ...edge,
  //     bottom: -10,
  //     left: 49,
  //   },
});
