import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  COLOR_PRIMARY,
  COLOR_BACKGROUND,
  TEXT_COLOR,
  INITIAL_BUTTON,
  TEXTINPUT_COLOR,
} from '../../Resources/Color/Color';

export const TopTextStyle = {
  marginTop: Platform.OS === 'android'? responsiveHeight(7): responsiveHeight(3),
  
   
};
export const ViewOutgoingContainer = {
  backgroundColor: 'white',
  alignItems: 'flex-start',
  alignSelf: 'flex-end',
  maxWidth: '70%',
  right: responsiveHeight(2),
  top: responsiveHeight(1),
  paddingRight:10,
  alignItems: 'center',backgroundColor:'#F2F2F2'
};
export const ViewOutgoingMsg = {
  minHeight: responsiveHeight(5),
  maxWidth: responsiveWidth(60),
  borderWidth: 1,
  borderRadius: responsiveHeight(1),
  borderColor: '#ddd',
  borderBottomWidth: 0,
  backgroundColor: '#fff',
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 1,
  shadowColor: '#474747',
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
};
export const SendButton = {
  alignSelf: 'center',
  right: responsiveWidth(1),
  position: 'absolute',
};
export const textInputField = {
  marginHorizontal: responsiveHeight(3),
  margin:0,
  padding:0,
  justifyContent: 'center',
  backgroundColor:'white',
  height:Platform.OS === 'android' ? null:responsiveHeight(5.5),

};
export const ViewButtonContainer = {
  flexDirection: 'row',
  top: responsiveHeight(90),
  borderBottomWidth: 1,
  borderRightWidth: 1,
  borderLeftWidth: 1,
  borderTopWidth: 1,
  height: responsiveHeight(6),
  width: responsiveWidth(88),
  flex: 1,
  borderRadius: responsiveHeight(5),
  marginHorizontal: responsiveHeight(4),
  position: 'absolute',
  borderColor:TEXTINPUT_COLOR,
  padding:10
};
export const incomingMsgText = {
  marginVertical: responsiveHeight(1),
  marginHorizontal: responsiveHeight(1),
};
export const ViewHeader = {
  marginTop: Platform.OS === 'android' ? responsiveHeight(7):responsiveHeight(2.8),
  left: responsiveWidth(30),
  position: 'absolute',
  flexDirection:'row'
};
export const ViewIncomingMsg = {
  minHeight: responsiveHeight(5),
  maxWidth: responsiveWidth(60),
  borderWidth: 1,
  borderRadius: responsiveHeight(1),
  borderColor: '#ddd',
  borderBottomWidth: 0,
  backgroundColor: '#fff',
  shadowColor: '#000',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 1,
  position: 'absolute',
  shadowColor: '#474747',
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
};
export const HeaderText = {
  alignSelf: 'center',
  fontSize: responsiveFontSize(2),
};
export const ViewT_D = {
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: Platform.OS === 'android' ? responsiveHeight(5):responsiveHeight(3),
};
export const ViewTop1 = {
  marginHorizontal: responsiveHeight(3),
  flexDirection: 'row',
  marginTop: responsiveHeight(1),
  padding:10
};
export const ViewTop2 = {
  marginRight: responsiveHeight(2),
  marginTop: responsiveHeight(1),
};
export const imageStyle = {
  height: responsiveHeight(4),
  width: responsiveHeight(4),
  borderRadius: responsiveHeight(4),
};
export const headerViewText = {
  marginTop: responsiveHeight(0.5),
  left: responsiveWidth(1),
  
};
export const ListStyle = {marginTop: responsiveHeight(1)};
export const TopText = {
  fontSize: responsiveFontSize(3),
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  //fontStyle: Platform.OS === 'android' ?  'bold' : 'oblique',
  
  marginHorizontal: responsiveHeight(2.5),
};
export const ViewPad = {
  
  backgroundColor: 'white',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  borderColor: '#ddd',
  
  
};
export const imageView = {
  width: responsiveHeight(9),
  marginVertical: responsiveHeight(2),
  alignItems: 'center',
  backgroundColor:COLOR_PRIMARY
};
export const image = {
  width: responsiveWidth(12),
  height: responsiveWidth(12),
  borderRadius: responsiveWidth(12),
};
export const TextContainer = {
  width: responsiveWidth(60),
  marginVertical: Platform.OS === 'android' ? responsiveHeight(2.5):responsiveHeight(2),
};

export const Username = {
  color: TEXT_COLOR,
  fontSize: responsiveFontSize(2.2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
  
};
export const TextComment = {
  color: TEXTINPUT_COLOR,
  fontSize: responsiveFontSize(2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
  fontStyle: 'normal',
};
export const Time = {color: TEXTINPUT_COLOR,fontSize:responsiveFontSize(1.5)};
export const TextContainer2 = {
  width: responsiveWidth(92),
  marginVertical: responsiveHeight(2),
};
export const TextContainer3 = {
  width: responsiveWidth(15),
  marginVertical: responsiveHeight(3),
  left:responsiveWidth(7.5)
};

export const Status = {
  right: responsiveWidth(-4),
  top: responsiveHeight(1.2),
};

export const Circle = {
  height: responsiveWidth(2),
  width: responsiveWidth(2),
  borderRadius: responsiveWidth(2),
  backgroundColor: COLOR_PRIMARY,
};
