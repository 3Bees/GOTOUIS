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
} from '../../Resources/Color/Color';
import { Platform } from 'react-native';

export const Container = {
  flex: 1,
  backgroundColor: 'white',
  
};
export const Container2 = {
  
 marginHorizontal:responsiveHeight(1),
  backgroundColor: 'white',
  
 
};
export const Container3 = {
  
  marginHorizontal:responsiveHeight(2),
   backgroundColor: 'white',
   
  
 };
export const TopTextStyle = {
  marginTop: Platform.OS === 'android' ? responsiveHeight(6.5) : responsiveHeight(3.5),
  alignSelf:"flex-end",
  right: 0,
  
};
export const TopText = {
  color: COLOR_PRIMARY,
  fontSize: responsiveFontSize(2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
};
export const AppDes = {
  fontWeight: 'normal',
  fontSize: responsiveFontSize(1.9),
  color: TEXT_COLOR,
};

export const AppName = {
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontWeight: 'bold',
  fontSize: responsiveFontSize(4),
  color: TEXT_COLOR,
};
export const LogoStyle = {
  height: responsiveHeight(10),
  resizeMode: 'contain',
  width: responsiveWidth(50),
  marginBottom:responsiveHeight(4)
};

export const AppNameDesView = {
  marginTop: responsiveHeight(3),
  height: responsiveHeight(13),
  justifyContent: 'center',
  alignItems: 'center',
};

export const SocialButtonStyle = {
  height: responsiveHeight(7),
  marginTop: responsiveHeight(1),
};
export const ButtonStyle = {
  height: responsiveHeight(7),
  marginTop: responsiveHeight(6),
  marginHorizontal:responsiveHeight(0.5)
};
export const LineStyle = {
  flexDirection: 'row',
  marginTop: responsiveHeight(1),
};

export const Line = {
  borderBottomColor: SECONDARY_COLOR,
  borderBottomWidth: 1,
  flex: 0.5,
  marginBottom: responsiveHeight(1),
};
export const LineText = {
  alignSelf: 'center',
  marginTop: responsiveHeight(2),
  color: TEXTINPUT_COLOR,
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontSize:responsiveFontSize(1.5),
  marginHorizontal:responsiveWidth(1)
};
export const ContainerInput = {
  marginVertical: responsiveWidth(3),
  height: responsiveHeight(5),
};
