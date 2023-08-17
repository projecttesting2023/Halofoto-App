import { StyleSheet } from 'react-native';
import Colors from '../../../global/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 0,
    paddingRight: 0,
  },

  overlayWrap: {
    backgroundColor: Colors.black,
    height: '100%',
    width: '100%',
    display: 'flex',
  },

  topHeader: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height: 55,
  },

  titleHolder: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },

  backWrap: {
    display: 'flex',
    justifyContent: 'center',
    height: 24,
    width: 24,
    marginRight: 5,
  },

  backArrow: {
    height: 14,
    width: 8,
  },

  pageHeading: {
    fontSize: 22,
    color: '#fff',
    textTransform: 'capitalize',
    fontWeight: '300',
  },

  mainScroll: {
    height: '100%',
    marginTop:-100,
  },
  mainBodyWrap: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 40,


  },

  categoryListBanner: {
    display: 'flex',
    flexDirection: 'row',
    height:424,
    marginLeft:-20,
    marginRight:-20,
    marginBottom:30,
  },
  newsCategorybannerbg: {
    width: '100%',
    height: '100%',
  },

  newsCategoryBannerOverlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent:'flex-end',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom:33,
  },

  newsMeta: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 25,
  },

  newsListWrap: {
    display: 'flex',
    flexDirection:'row',
    marginTop:5,
    marginRight:-10,
  },
  newsCard:{
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor:'rgba(17, 78, 237, 0.1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
    display:'flex',
    flexDirection:'column-reverse',
    width:170,
    marginRight:10,
  },
  
  newsCardContent:{
    paddingLeft:15,
    paddingRight:15,
    marginBottom:20,
  
  },

  categoryTagCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: '#020818',
    paddingLeft: 10,
    paddingRight: 10,
    height: 25,
    alignSelf: 'flex-start',
    marginBottom:10,
  },

  newsCardImg:{
    width: '100%',
    height: 185,
    borderTopLeftRadius:19,
    borderTopRightRadius:19,
    marginBottom:15,
  },
});
