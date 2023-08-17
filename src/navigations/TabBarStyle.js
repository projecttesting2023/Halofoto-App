import { Platform, StyleSheet } from "react-native"
import Colors from '../global/Colors'

export default StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
        marginBottom: 15,
        // marginTop:13
    },
    
    containerNormal: {
        height: 45,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        borderTopColor: Colors.black_pearl,
        borderTopWidth: 6,
        width: "60%"
    },

    containerFocused: {
        height: 45,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        borderTopColor: Colors.blue,
        borderTopWidth: 6,
        width: "60%"
    },

    tabBarContainer: {
        height: Platform.OS == 'ios' ? 103 : 77,
        backgroundColor: Colors.black_pearl,
        borderTopColor: Colors.black_pearl,
        paddingVertical: 15,
    },
    tabBarLabel: {
        fontSize: 15,
        paddingBottom: 10
    }
})