import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  TEXT_COLOR,
  COLOR_PRIMARY,
  TEXTINPUT_COLOR,
  SECONDARY_COLOR,
} from '../../Resources/Color/Color';
import {Circle} from '../Chat/Style';
import { Platform } from 'react-native';

export const TopTextStyle = {
  
  marginTop:Platform.OS === 'android' ?responsiveHeight(7):responsiveHeight(3),
  marginLeft:responsiveWidth(2)
   
  
};
export const Container = {
  flex: 1,
  backgroundColor: 'white',
  
};

export const buttonView = {
  height: responsiveHeight(7),
  marginHorizontal: responsiveWidth(3),
  marginTop: responsiveHeight(2),
};

export const ViewStyleImage={
  marginVertical:responsiveHeight(1),
  marginHorizontal: responsiveHeight(3),
  height: responsiveHeight(14),
  width: responsiveWidth(28),
  borderRadius: responsiveHeight(1),
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: 'rgba(29, 33, 31, 0.0781523)',
  zIndex:0
}
export const SearchIcons = {
  marginHorizontal: responsiveWidth(3),
};
export const SearchBarStyle = {
  marginVertical: responsiveHeight(1),
  marginHorizontal: responsiveHeight(3),
  
};
export const SearchBarContainerView = {
  flexDirection: 'row',
  alignSelf: 'stretch',
  borderColor: SECONDARY_COLOR,
  borderRadius: responsiveHeight(3),
  height: responsiveHeight(6),
  borderWidth: 1,
  backgroundColor: '#F4F5F5',
  alignItems: 'center',

};
export const DonateViewTop = {
  marginLeft: responsiveHeight(2.4),
  marginTop:responsiveHeight(1.5),
  alignItems: 'center',
  flexDirection: 'row',
};
export const TopText = {
  fontSize: responsiveFontSize(3),
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  //fontStyle: Platform.OS === 'android' ?  'bold' : 'oblique',
  
  marginHorizontal: responsiveHeight(1.3),
};
export const CircleImg = {
  height: responsiveHeight(6),
  width: responsiveHeight(6),
  borderRadius: responsiveHeight(6),
  backgroundColor: COLOR_PRIMARY,
  marginLeft: 5,
  justifyContent: 'center',
  alignItems: 'center',
};

export const StyleView = {
  flexDirection: 'row',
  borderRadius: responsiveHeight(1),
  padding:10,
  borderWidth: 1,
  borderColor:'rgba(29, 33, 31, 0.0781523)',
  marginHorizontal: responsiveHeight(3),
  marginTop: responsiveHeight(2),
};
export const cardText ={
  color:'#76807C',fontSize:responsiveFontSize(1.7),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
}
export const TopView = {
  marginTop: responsiveHeight(1.5),
};

export const TopView1 = {
  flexDirection: 'row',
  borderRadius: responsiveHeight(1),
  padding:responsiveHeight(1),
  borderWidth: 1,
  borderColor:'rgba(29, 33, 31, 0.0781523)',
  marginHorizontal: responsiveHeight(3),
  marginTop: responsiveHeight(1.8),
};

export const TopView2 = {
  flex: 0.2,
  marginVertical: responsiveHeight(1),
};
export const locationText = {
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  fontStyle: 'normal',
  fontSize: responsiveFontSize(1.6),
  
};
export const TextInputStyle = {
  marginHorizontal: responsiveHeight(3),
};
export const ViewContainer = {
  marginHorizontal: responsiveHeight(3),
  marginTop: responsiveHeight(2),
};

export const TopView3 = {
  height: responsiveHeight(5.5),
  width: responsiveHeight(5.5),
  borderRadius: responsiveHeight(5.5),
  justifyContent: 'center',
  alignItems: 'center',
};
export const ViewFlex7 = {flex: 0.8, marginVertical: responsiveHeight(1)};
export const TextStyleDo = {
  fontSize: responsiveFontSize(3),
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  //fontStyle: 'normal',
  
};
export const TextStyleDo1 = {
  fontSize: responsiveFontSize(2.5),
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  //fontStyle: 'normal',
  
};
