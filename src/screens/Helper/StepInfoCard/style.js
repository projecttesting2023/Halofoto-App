import { StyleSheet } from "react-native"
import Colors from "../../../global/Colors"

export default StyleSheet.create({
    cardWrap: {
        height: 103,
        backgroundColor: Colors.hawkes_blue_1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 10
    },

    cardTextHeader: {
        padding: 10,
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'Montserrat-Regular',
        color:Colors.black
    },

    cardText: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Montserrat-Regular',
        width: '80%',
        paddingLeft: 10,
        justifyContent:'center',
        paddingTop:0,
        color:Colors.black
    },

    cardContentWrap: {
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        flexDirection: 'row',
    },

    infoIcon: {
        height: 20,
        width: 18,
    },

    loader: {
        marginTop: 25,
        height: 4,
        width: '100%',
        backgroundColor: Colors.hawkes_blue,
    },
})


