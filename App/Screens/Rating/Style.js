import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {COLOR_PRIMARY,COLOR_BACKGROUND} from '../../Resources/Color/Color';
import { Platform } from 'react-native';

export const TopTextStyle = {
  marginTop:Platform.OS === 'android'? responsiveHeight(7):responsiveHeight(3),
  
  left:responsiveWidth(5)
};
export const TopText = {
  color: COLOR_PRIMARY,
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  // fontWeight: 'normal',
};

export const Container2 = {
  flex: 1,
  
  backgroundColor: 'white',
  
};
export const Container = {
  flex: 1,
  backgroundColor:'white',
};