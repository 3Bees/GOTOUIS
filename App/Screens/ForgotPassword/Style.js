import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  COLOR_PRIMARY,
  TEXT_COLOR,
  SECONDARY_COLOR,
  TEXTINPUT_COLOR,
  COLOR_BACKGROUND,
} from '../../Resources/Color/Color';

export const Container = {
  flex: 1,
  backgroundColor: 'white',
};
export const Container2 = {
  flex: 1,
  marginHorizontal: responsiveWidth(3),
  backgroundColor: 'white',
  paddingHorizontal:7
  
};
export const TopTextStyle = {
  marginTop: Platform.OS === 'android'?  responsiveHeight(7):responsiveHeight(3),
  left: 0,
 
};
export const TopText = {
  color: COLOR_PRIMARY,
  fontSize: responsiveFontSize(2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  // fontWeight: 'normal',
};

export const ButtonStyle = {
  height: responsiveHeight(7),
  marginTop: responsiveHeight(6),
};

export const ContainerInput = {
  marginBottom: responsiveWidth(3),
  height: responsiveHeight(5),
};
export const ForgetPasswordView = {
  marginTop: responsiveHeight(2),
};

export const forgetPasswordText = {
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontStyle: 'normal',
  fontSize: responsiveFontSize(3),
  fontWeight: 'bold',
};
export const sendDesView = {
  marginTop: responsiveHeight(3),
};
export const sendDesText = {
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontSize: responsiveFontSize(2.2),
  color: TEXTINPUT_COLOR,
};
