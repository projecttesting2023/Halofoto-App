import { StyleSheet } from "react-native"
import Colors from "../../../global/Colors"

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        width:'100%',
        backgroundColor: "transparent",
        justifyContent: "flex-end"
        
    },

    innerWrapp: {
        backgroundColor: Colors.black,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        position:'relative',
    },

    iconCancel: {
        height: '100%',
        width: '100%',
        position:'absolute',
        alignItems:"flex-end",
        paddingTop:10,
        paddingRight:10,
    },

    clickWrapp: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: Colors.catalina_blue,
        height: 50,
        width: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
        marginTop: 16,
        // borderColor:'red',
        // borderWidth:1,
        // borderStyle:'solid',
    },

    clickWrappInner: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: Colors.white,
        height: 40,
        width: 40,
        backgroundColor: Colors.azure_radiance,
        // borderColor:'red',
        // borderWidth:1,
        // borderStyle:'solid',
    },

    iconRotate: {
        height: 25,
        width: 25,
        marginRight: 30
    },

    iconRotateHide: {
        opacity: 0.2,
    },

})
