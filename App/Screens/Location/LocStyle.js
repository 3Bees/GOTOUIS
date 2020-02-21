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
import { Platform } from 'react-native';

export const Container = {
  flex: 1,
  backgroundColor: 'white',
};
export const Container2 = {
  flex: 1,
  marginHorizontal: responsiveWidth(3),
  backgroundColor: 'white',
  paddingHorizontal: 7,
};
export const TopTextStyle = {
  marginTop: Platform.OS === 'android'?  responsiveHeight(7):responsiveHeight(3),

  left: 0,
 
};
export const TopText = {
  color: COLOR_PRIMARY,
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontWeight: 'normal',
};

export const ButtonStyle = {
  height: responsiveHeight(6),
  marginTop: responsiveHeight(5),
};

export const ContainerInput = {
  marginTop: responsiveHeight(5),
  marginVertical: responsiveWidth(3),
  height: responsiveHeight(5),
};
export const locationViewStyle = {
  marginTop: responsiveHeight(2),
};
export const locationTextStyle = {
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
 
  fontSize: responsiveFontSize(3),
  
};
export const locationDesTextView={
  marginTop: responsiveHeight(1.5),
}
export const locationDesText={
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
  fontStyle: 'normal',
  fontSize: responsiveFontSize(2),
  fontWeight: 'normal',
  color: TEXTINPUT_COLOR,
}
export const searchBarTop={
  marginVertical: responsiveHeight(3),
}

export const searchbarView={
  flexDirection: 'row',
  alignSelf: 'stretch',
  borderColor: SECONDARY_COLOR,
  borderRadius: responsiveHeight(3),
  height: responsiveHeight(6),
  borderWidth: 1,
  backgroundColor: '#F4F5F5',
  alignItems: 'center',
}
export const mylocationText={
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  
  fontSize: responsiveFontSize(1.8),
  color:'black',
  marginTop:responsiveHeight(2)
}
export const locationButtonViewTop={
  marginVertical: responsiveHeight(1),
}
export const btnText={
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
  
  fontSize: responsiveFontSize(2.2),
  
  color:'black'
}
export const btnImage={
  height: Platform.OS === 'android' ?  responsiveHeight(2.5): responsiveHeight(2.5),
  width: Platform.OS === 'android' ? responsiveWidth(5) : responsiveWidth(5),
  marginHorizontal: Platform.OS === 'android' ? responsiveHeight(2):responsiveHeight(2),
  resizeMode:'contain'
}
export const locationButtonView={
  flexDirection: 'row',
  alignSelf: 'stretch',
  borderColor: SECONDARY_COLOR,
  borderRadius: responsiveHeight(3),
  height: responsiveHeight(6),
  borderWidth: 1,
  backgroundColor: 'white',
  alignItems: 'center',
}
export const crossView={right: responsiveHeight(3), position: 'absolute'}
