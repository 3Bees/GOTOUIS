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
} from '../../Resources/Color/Color';

export const TopTextStyle = {
  marginTop: Platform.OS === 'android' ?responsiveHeight(7):responsiveHeight(3),
  
  
};
export const TopText = {
  color: TEXT_COLOR,
  fontSize: responsiveFontSize(3),
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  
  marginHorizontal: responsiveHeight(2.5),
};
export const ViewPad = {
  borderBottomWidth: 1,
  width:'92%',
  backgroundColor: '#fff',
  alignSelf:'center',
  flexDirection: 'row',
  borderColor: '#ddd',
  
  
};
export const imageView = {
  
  marginVertical: responsiveHeight(2.2),
  alignItems: 'center',
};
export const image = {
  width: responsiveWidth(6),
  height: responsiveWidth(6),
  borderRadius: responsiveWidth(6),
};
export const TextContainer = {
 
  marginVertical: Platform.OS === 'android' ?responsiveHeight(2):responsiveHeight(1.5),
  marginHorizontal:responsiveWidth(3)
};

export const Username = {
  color: TEXT_COLOR,
  fontSize: responsiveFontSize(2.1),
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  //fontStyle: 'normal',
  
};
export const TextComment = {
  color: 'black',
  fontSize: responsiveFontSize(2.1),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
  //fontStyle: 'normal',
};

export const TextContainer2 = {
  width: responsiveWidth(90),
  marginVertical: responsiveHeight(2),
};

export const Time = {
  color: INITIAL_BUTTON,
  fontSize:responsiveFontSize(1.5),
  color:'#76807C',
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',

};
