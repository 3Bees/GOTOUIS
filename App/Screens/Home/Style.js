import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  COLOR_PRIMARY,
  COLOR_BACKGROUND,
  TEXT_COLOR,
  SECONDARY_COLOR,
  INITIAL_BUTTON,
  COLOR_DONATE,
  COLOR_FAVOUR,
  COLOR_SELL,
  TEXTINPUT_COLOR,
} from '../../Resources/Color/Color';
import { Platform } from 'react-native';

export const TopTextStyle = {
  marginTop:Platform.OS === 'android' ?responsiveHeight(6):responsiveHeight(3),
  left: responsiveWidth(5),
  position: Platform.OS === 'android' ?  'absolute':null,
};
export const TopText = {
  color: TEXT_COLOR,
  fontSize: responsiveFontSize(3),
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  
};
export const locationpinContainer = {
  bottom: responsiveHeight(-11),
 // marginLeft:Platform.OS === 'android' ? responsiveWidth(4):-5,
  flexDirection: 'row',
  alignSelf:'flex-end',
  right: Platform.OS === 'android' ? responsiveHeight(2):responsiveWidth(3.5),

  
};
export const locationpinText = {
  fontSize: responsiveFontSize(1.5),
  alignSelf: 'center',
  bottom: responsiveHeight(0.2),
};
export const SearchTopContainer = {
  marginTop: Platform.OS === 'android' ? responsiveHeight(13):null,
  flexDirection: 'row',
  
};
export const ApplyButtonText = {
  height: responsiveHeight(6),
  marginHorizontal: responsiveHeight(4),
  marginVertical: responsiveHeight(1),
};
export const Row = {
  flexDirection: 'row',
};
export const crossmodal = {position: 'absolute',right:0};

export const modalContainerTop = {
  top: responsiveHeight(75),
  width: responsiveWidth(100),
  flex: 1,
  bottom: responsiveHeight(-1),
  borderRadius: responsiveWidth(3),
  position: 'absolute',
  backgroundColor: 'white',
};
export const modalContainerTop1= {
  top: responsiveHeight(67),
  width: responsiveWidth(100),
  flex: 1,
  bottom: responsiveHeight(-1),
  borderRadius: responsiveWidth(3),
  position: 'absolute',
  backgroundColor: 'white',
};
export const filterText = {
fontSize: responsiveFontSize(3),
fontFamily:'Muli-Bold'
};
export const containerFilter = {
  flexDirection: 'row',
  marginHorizontal: responsiveWidth(5),
  marginTop: responsiveWidth(2),
};
export const RowContainer = {
  marginHorizontal: responsiveHeight(3),
  marginTop:responsiveHeight(3)
};
export const TextDistance = {
  color: TEXTINPUT_COLOR,
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',

};
export const KMTextStyle = {
  right: 0,
  position: 'absolute',
  color: TEXT_COLOR,
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  bottom:0.1

};
export const locationpinStyle1 = {
  marginLeft: responsiveHeight(2.5),
  top: responsiveHeight(2.4),
};
export const locationpinStyle = {
  marginLeft: responsiveHeight(2.5),
  top: responsiveHeight(0.1),
};
export const locationpinStyle2 = {
  marginLeft: responsiveHeight(7.5),
  top: responsiveHeight(0.1),
};
export const SearchStyle = {
  marginHorizontal: responsiveWidth(2),
};
export const SearchContainer = {
  flexDirection: 'row',
  alignSelf: 'stretch',
  borderColor: SECONDARY_COLOR,
  borderRadius: responsiveHeight(3),
  height: responsiveHeight(5),
  width: responsiveWidth(70),
  borderWidth: 1,
  backgroundColor: '#F4F5F5',
  alignItems: 'center',
  marginLeft: responsiveWidth(5),
  marginRight: responsiveWidth(5),
};
export const UserDetailContainer = {
  flexDirection: 'row',
 
  left:responsiveWidth(1.5),
  marginVertical: responsiveHeight(1),
  
  
};
export const crossContainer = {
  right: responsiveHeight(3),
  position: 'absolute',
};
export const cancelTextContainer = {
  alignSelf: 'center',
};
export const cancelTextStyle = {
  alignSelf: 'center',
  fontSize: responsiveFontSize(2),
  color: COLOR_PRIMARY,
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontStyle: 'normal',
  fontWeight: 'normal',
};
export const ToplocationContainer = {
  justifyContent: 'center',
};
export const userImage = {
  height: responsiveHeight(3.5),
  width: responsiveHeight(3.5),
  borderRadius: responsiveHeight(3.5),
  top:2,
  backgroundColor: 'black',
  marginLeft:responsiveWidth(2)
};
export const SliderIconContainer = {
  justifyContent: 'center',
  marginHorizontal: responsiveWidth(4.5),
};
export const RatingContainer = {
  flexDirection: 'row',
  marginLeft: responsiveHeight(0.3),
};
export const UserName = {
  color: '#76807C',
  alignSelf: 'center',
  marginHorizontal: responsiveWidth(1),
  fontSize:responsiveFontSize(1.5),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
 
  
};
export const GestureNumberText = {
  color: COLOR_BACKGROUND,
  fontSize: responsiveFontSize(1.5),
  alignSelf: 'center',
  bottom:2
};
export const LookLocationpinCotainer = {
  flexDirection:'row',
  justifyContent:'space-between'
 
 
};
export const IconGesture = {
  bottom: responsiveHeight(-11),
  flexDirection: 'row',
  //marginLeft:Platform.OS === 'android'? responsiveWidth(6):responsiveWidth(3),
  alignSelf:'flex-end',
  right: Platform.OS === 'android' ? responsiveHeight(2):responsiveWidth(3.5),

};
export const LookingName = {
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
 
  fontSize: responsiveFontSize(2.3),
};
export const lookingForText = {
  alignSelf: 'center',
  color: 'white',
  marginHorizontal: 4,
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
  fontSize: responsiveFontSize(1.8),
};

export const LookingForTextContainer = {
  marginTop: responsiveHeight(1),
  top:3,
  right: responsiveHeight(2),
  position: 'absolute',
  marginLeft:responsiveWidth(3),
  padding:1.5,
  marginVertical: responsiveHeight(1),
  backgroundColor: '#005CE7',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius:5
};
export const StatusText = {
  alignSelf: 'center',
  color: 'white',
  marginHorizontal: 4,
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
  fontSize:responsiveFontSize(1.7)
};
export const favoriteIconView = {
  marginTop:Platform.OS === 'android' ? responsiveHeight(3):responsiveHeight(1),
  
  
};
export const favoriteIconView2 = {
  marginTop:Platform.OS === 'android' ? responsiveHeight(3):responsiveHeight(4.5),
  
  
};


export const favoriteIconView1 = {
  marginTop: responsiveHeight(7),
  right: responsiveWidth(12),
  justifyContent:'center',
  alignItems: 'center',
  position:'absolute'
};
export const userNameContainer = {
  marginHorizontal: responsiveHeight(1),
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
};
export const starIcon = {
  marginLeft: responsiveHeight(2),
  marginRight: responsiveHeight(0.5),
};
export const ratingText = {
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontStyle: 'normal',
  fontWeight: 'normal',
  color: TEXTINPUT_COLOR,
  fontSize: responsiveFontSize(2),
  
  
};
export const ViewforSpace = {
  marginHorizontal: responsiveHeight(2),
  marginVertical: responsiveHeight(1.5),
};
export const ViewforSpace2={
  borderBottomColor: SECONDARY_COLOR,
  borderBottomWidth: 1,
  flex: 0.5,
}
export const aboutText={
  marginLeft: responsiveHeight(2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
 
  color: TEXT_COLOR,
  fontSize: responsiveFontSize(1.4),
  marginVertical: responsiveHeight(0.5),
}
export const detailExe={
  marginLeft: responsiveHeight(2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
  fontStyle: 'normal',
  fontWeight: 'normal',
  color: TEXTINPUT_COLOR,
  fontSize: responsiveFontSize(2.1),
  marginHorizontal:responsiveWidth(2)}
export const containerImage={
  marginHorizontal: responsiveHeight(2),
  flexDirection: 'row',
  marginTop:responsiveHeight(1)
}
export const interactionText={
  marginLeft: responsiveHeight(2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  
  color: TEXT_COLOR,
  fontSize: responsiveFontSize(1.4),
  marginVertical: responsiveHeight(0.5),
}
export const locationPin={
  
  
}
export const locationPins3={
  top:Platform.OS === 'android' ? null:responsiveHeight(0.8),

  right: responsiveWidth(19),
  position: 'absolute',
  alignSelf: 'center',
}
export const distanceText={
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontStyle: 'normal',
  fontWeight: 'normal',
  color: TEXTINPUT_COLOR,
  fontSize: responsiveFontSize(2),
  bottom:3
  
}
export const DirectionRow={flexDirection: 'row',justifyContent:'space-between'}
export const locationNameText={
  marginLeft: responsiveHeight(2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
  fontStyle: 'normal',
  fontWeight: 'normal',
  color: TEXTINPUT_COLOR,
  fontSize: responsiveFontSize(2),
}
export const locationText={
  marginLeft: responsiveHeight(2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  marginTop:responsiveHeight(2),
  color: TEXT_COLOR,
  fontSize: responsiveFontSize(1.4),
  marginVertical: responsiveHeight(0.5),
}
export const timeAgo = {
  marginLeft: responsiveHeight(2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
  fontStyle: 'normal',
  fontWeight: 'normal',
  color: TEXTINPUT_COLOR,
  fontSize: responsiveFontSize(1.25),
  marginTop: responsiveHeight(1),
};
export const userName = {
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontStyle: 'normal',
  fontWeight: 'normal',
  color: 'black',
  fontSize: responsiveFontSize(2),
};
export const ViewUserImage = {
  marginHorizontal: responsiveHeight(2),
  marginTop: responsiveHeight(2),
  flexDirection: 'row',
};
export const TextinputView={
  
  flexDirection: 'row',
  borderWidth: 1,
  borderColor:'rgba(29, 33, 31, 0.0781523)',
  bottom:1,
  height: responsiveHeight(6),
  width: responsiveWidth(88),
  borderRadius: responsiveHeight(5),
  backgroundColor:'transparent',
  alignSelf:'center'
}
export const TextinputView1={
  
  flexDirection: 'row',
  borderWidth: 1,
  borderColor:'rgba(29, 33, 31, 0.0781523)',
  bottom:5,
  marginTop:responsiveHeight(2),
  height:Platform.OS === 'android' ? responsiveHeight(6):responsiveHeight(6),
  width: responsiveWidth(88),
  borderRadius: responsiveHeight(5),
  backgroundColor:'transparent',
  alignSelf:'center'
}
export const sendmsgImage={
  height:Platform.OS === 'android' ? responsiveHeight(5):responsiveHeight(4),

  width: responsiveHeight(5),
  borderRadius: responsiveHeight(5),
  resizeMode: 'contain',
  alignSelf: 'center',
  right: responsiveWidth(2),
  position: 'absolute',
}
export const Comment={
  marginLeft: responsiveHeight(6),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
  fontStyle: 'normal',
  fontWeight: 'normal',
  color: TEXTINPUT_COLOR,
  fontSize: Platform.OS === 'android' ?responsiveFontSize(2.1):responsiveFontSize(1.7),
}
export const imageUser = {
  height: responsiveHeight(3),
  width: responsiveHeight(3),
  borderRadius: responsiveHeight(3),
  backgroundColor: 'black',
};
export const ViewContainer = {
  marginTop:responsiveHeight(2),
  marginHorizontal: responsiveHeight(2),
};
export const TextStyleTop = {
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  
  color: TEXT_COLOR,
  fontSize: responsiveFontSize(3),
};
export const shareIcon = {
  fontSize: responsiveFontSize(3),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontStyle: 'bold',
};
export const stickyHeaderContainer = {height:'100%', backgroundColor: 'white',flexDirection:'row'};
export const donateTextView = {
  bottom: responsiveHeight(3),
  right: responsiveWidth(2),
  position: 'absolute',
  backgroundColor: COLOR_DONATE,
};
export const donateTextView1 = {
  top:responsiveHeight(7),
  left: responsiveWidth(3.7),
  position: 'absolute',
  backgroundColor: 'transparent',
};
export const shareIconView = {
  marginTop:Platform.OS === 'android' ? responsiveHeight(3):responsiveHeight(1),
  
};
export const shareIconView2 = {
  marginTop:Platform.OS === 'android' ? responsiveHeight(3):responsiveHeight(4.5),
  
};
export const shareIconView1 = {
  marginTop: responsiveHeight(7),
  right: responsiveWidth(2),
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
};
export const backIconView = {
  marginTop:Platform.OS === 'android' ? responsiveHeight(3):responsiveHeight(1),
  left: responsiveWidth(5),
  
};
export const backIconView2= {
  marginTop:Platform.OS === 'android' ? responsiveHeight(3):responsiveHeight(4.5),
  left: responsiveWidth(5),
  
};
export const backIconView1 = {
  marginTop: responsiveHeight(5),
  left: responsiveWidth(3),
  zIndex:1



};
export const imageBackground={ height: responsiveHeight(27), zIndex: 0 }
export const imagePencil={flexDirection:'row',width:'15%',marginLeft:responsiveWidth(82),justifyContent:'space-between'}
export const containerDonation={
  bottom: responsiveHeight(3),
  right: responsiveWidth(4.5),
  position: 'absolute',
  backgroundColor: COLOR_DONATE,
  borderRadius:5
}
export const hearto={flexDirection:'row',width:'15%',marginLeft:responsiveWidth(80),justifyContent:'space-between'}
export const backIcon = {
  fontSize: responsiveFontSize(3),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontStyle: 'bold',
};
export const backgroundImage = {height: responsiveHeight(27)};
export const gradientStyle = {height: responsiveHeight(27),borderBottomLeftRadius:10,borderBottomRightRadius:10};
export const LookingTopTextContainer = {
  marginVertical: responsiveHeight(1),
  marginHorizontal: responsiveHeight(2),
};
export const LookingContainer = {
  borderRadius: responsiveHeight(1),
  elevation:2,
  paddingBottom:4,
  // borderWidth: 1,
  backgroundColor: '#FFFFFF',
  marginHorizontal: responsiveHeight(3),
 marginTop:responsiveHeight(1),
  marginBottom: responsiveHeight(1),
  shadowColor: '#474747',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.4,
  shadowRadius: 2.49,
};
export const StatusContainer = {
  marginTop: responsiveHeight(1),
  right: Platform.OS === 'android' ? responsiveHeight(2):responsiveWidth(3.5),
  borderRadius:5,
  position: 'absolute',
  backgroundColor: COLOR_DONATE,
};
export const StatusContainerFavour = {
  marginTop: responsiveHeight(1),
  borderRadius:5,
  right: Platform.OS === 'android' ? responsiveHeight(2):responsiveWidth(3.5),
  position: 'absolute',
  backgroundColor: COLOR_FAVOUR,
};
export const StatusContainerSell = {
  marginTop: responsiveHeight(1),
  right: Platform.OS === 'android' ? responsiveHeight(2):responsiveWidth(3.5),
  borderRadius:5,
  position: 'absolute',
  backgroundColor: COLOR_SELL,
};
export const TextName = {
  color: TEXTINPUT_COLOR,
  alignSelf: 'center',
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
  marginHorizontal: responsiveWidth(1),
  fontSize:responsiveFontSize(1.5)
};
export const backgroundImageStyle = {flex:0.4};
export const imageStyle = {
  height: responsiveHeight(3),
  width: responsiveHeight(3),
  borderRadius: responsiveHeight(3),
};
export const imageView = {
  width: responsiveHeight(10),
  marginVertical: responsiveHeight(2),
  alignItems: 'center',
};
export const image = {
  width: responsiveWidth(5),
  height: responsiveWidth(5),
  borderRadius: responsiveWidth(5),
};
export const TextContainer = {
  width: responsiveWidth(75),
  marginVertical: responsiveHeight(2),
};

export const Username = {
  color: TEXT_COLOR,
  fontSize: responsiveFontSize(2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontStyle: 'normal',
  fontWeight: 'bold',
};
export const TextComment = {
  color: TEXT_COLOR,
  fontSize: responsiveFontSize(2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontStyle: 'normal',
};

export const TextContainer2 = {
  width: responsiveWidth(92),
  marginVertical: responsiveHeight(2),
};
export const TextDes = {
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
 
  fontSize: responsiveFontSize(2.1),
};
export const imageView2 = {
  flexDirection: 'row',
  bottom: responsiveHeight(0.6),
  position: 'absolute',
};

export const Time = {
  color: INITIAL_BUTTON,
};

export const ImageLogo = {
  resizeMode: 'contain',
  height: responsiveHeight(8),
  width: responsiveWidth(25),
};

export const FlatListStyle = {marginTop: responsiveHeight(1)};
export const ListContainer = {
  flexDirection: 'row',
  borderRadius: responsiveHeight(1),
  height: responsiveHeight(15),
  flex: 1,
  marginHorizontal: responsiveHeight(3),
  marginTop: responsiveHeight(1.2),
  marginBottom:responsiveHeight(1),
  backgroundColor: '#FFFF',
  elevation:2,
  shadowColor: '#474747',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.3,
  shadowRadius: 2.49,
};

export const filterStyle = {
  height: responsiveHeight(2.5),
  width: responsiveWidth(5),
  resizeMode:'contain'
};
export const locationbar = {flexDirection: 'row'};

export const listView2 = {
  flex: 0.6,
  marginVertical: responsiveHeight(1),
  marginHorizontal: responsiveHeight(2),
};
