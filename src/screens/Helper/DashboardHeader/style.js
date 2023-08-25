import { StatusBar, StyleSheet,Dimensions,Platform } from "react-native"
import Colors from "../../../global/Colors"
const {height,weight} = Dimensions.get('window')
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

export default StyleSheet.create({
    headerWrap: {
        height: responsiveHeight(12),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
        flexDirection: 'row',
        //marginTop: StatusBar.currentHeight*10,
        //marginTop:height*0.03

    },
    logoWrap: {
        height: responsiveHeight(5),
        width:responsiveWidth(30),
        marginTop: Platform.OS == 'ios'? responsiveHeight(2):0
       
    },
    profileWrap: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 20,
        height: responsiveHeight(4),
        marginTop:Platform.OS == 'ios'? responsiveHeight(2):0
    },
    profilePoints: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
        paddingBottom: 8,
        paddingTop: 8,
    },
    pointsLogo: {
        height: 14,
        width: 14,
    },
    pointsLabel: {
        fontSize: 12,
        color: Colors.white
    },
    profileTitleOuter:{
        height:28,
        width:28,
        borderRadius:30,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'rgba(255, 255, 255, 0.2)',
        borderWidth:2,
        //borderStyle:'',
        marginRight:2,
        marginLeft:5,
    },
    profileTitle: {
        fontSize: 12, 
        color: Colors.white,
    },
})