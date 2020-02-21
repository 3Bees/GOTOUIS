import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { SECONDARY_COLOR, COLOR_BACKGROUND, TEXT_COLOR } from '../../../Resources/Color/Color';

export const buttonStyle = {
  flex: 1,
  flexDirection: 'row',
  alignSelf: 'stretch',
  borderColor: SECONDARY_COLOR,
  borderRadius: responsiveHeight(3),
  height: responsiveHeight(6),
  borderWidth: 1,
  alignItems: 'center',
};
export const textStyle = {
  alignSelf: 'center',
  fontSize: responsiveFontSize(2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
  color: TEXT_COLOR,
};
export const imageStyle = {
  height: responsiveHeight(7),
  width: responsiveWidth(7),
  marginHorizontal: 10,
};
