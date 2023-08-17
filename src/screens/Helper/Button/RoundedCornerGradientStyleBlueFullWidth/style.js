import { StyleSheet } from "react-native"
import Colors from "../../../../global/Colors"

export default StyleSheet.create({
    buttonWrap: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        width:'100%',
        height: '100%',
        borderRadius: 60,
    },
    buttonText: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: "700",
    },

})