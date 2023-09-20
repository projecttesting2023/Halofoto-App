import { StyleSheet } from 'react-native'
import Colors from '../../../global/Colors'

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },

    overlayWrap: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.black,
    },

    mainWrap: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },

    contentWrap: {
        width:'99%',
        // borderWidth:1,
        // borderColor:'red',
        // borderStyle:'solid'
    },

    inputWrap: {
        marginTop: 40,
        display: 'flex',
        alignItems: 'flex-start',
    },

    inputWrapModal: {
        width: '100%',
        marginRight: 10,
    },

    inputAuto: {
        height: 81,
    },

    inputAutoText: {
        fontSize: 13,
        fontWeight: '500',
        fontFamily: 'Montserrat-Regular',
        color: '#D3D4D5',
    },

    TextInput: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Montserrat-Regular',
        color: '#D3D4D5'
    },

    inputUser: {
        backgroundColor: 'rgba(217, 217, 217, 0.1)',
        height: 81,
        width: '100%',
        borderRadius: 20,
        marginBottom: 20,
        padding: 20,
        // borderWidth:1,
        // borderStyle:'solid',
        // borderColor:'red'
    },

    calenderWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: Colors.red_violet,
        borderStyle: 'solid',
        borderWidth: 1,
    },
    warrantyWrap: {
        marginTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    infoIconWarranty: {
        height: 20,
        width: 18,
    },

    gradient: {
        width: '30%',
        height: 4,
    },

    gradientStep2: {
        width: '60%',
        height: 4,
    },

    uploadDocument: {
        margin: 60,
    },

    imageUpload: {
        height: 222,
        width: 222,
        padding: 20,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: Colors.cornflower_blue_2,
        borderStyle: 'dashed',
        borderWidth: 1
    },
    imageUpload2: {
        height: 222,
        width: 222,
        padding: 20,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: Colors.red_violet,
        borderStyle: 'dashed',
        borderWidth: 1
    },
    warningText: {
        fontSize: 14,
        color: Colors.red_violet,
        fontWeight: '400',
        fontFamily: 'Montserrat-Regular',
    },
    buttonWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 43,
        borderRadius: 60,
        marginLeft: 40,
        marginRight: 40,
    },
    buttonText: {
        fontSize: 14,
        color: Colors.white,
        fontWeight: '400',
        fontFamily: 'Montserrat-Regular',
        display:'flex',
        flexDirection:'row',
    },

    inputWarrantyText: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Montserrat-Regular',
        color: Colors.iron,
        marginLeft:10
    },

    buttonLinkText: {
        fontSize: 14,
        color: 'rgba(0, 130, 237, 1)',
        fontWeight: '400',
        fontFamily: 'Montserrat-Regular',
        // borderColor:'red',
        // borderWidth:1,
        // borderStyle:'solid',
        display:'flex',
        flexDirection:'row',
        paddingTop:10,
    
    },

    uploadButtonWrap: {
        display: 'flex',
        justifyContent: 'center'
    },
    uploadWarrantyWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    uploadText: {
        padding: 17,
        textAlign: 'center',
        color: Colors.white
    },
    pageLoader: {
        opacity: 0.8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    icoLoader: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.white,
        opacity: 0.8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    inputWrappCalender: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

});
