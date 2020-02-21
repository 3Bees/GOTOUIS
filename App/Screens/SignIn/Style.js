import {responsiveHeight, responsiveFontSize} from 'react-native-responsive-dimensions';
import { COLOR_PRIMARY } from '../../Resources/Color/Color';
import { Platform } from 'react-native';

export const ForgetPasswordView = {
  marginTop: responsiveHeight(4),
};

export const ForgetPasswordText = {
  fontSize: responsiveFontSize(2),
  color: COLOR_PRIMARY,
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontStyle: 'normal',
  fontWeight: 'normal',
};
