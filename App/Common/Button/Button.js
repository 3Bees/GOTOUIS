import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  COLOR_PRIMARY,
  SECONDARY_COLOR,
  INITIAL_BUTTON,
  TEXTINPUT_COLOR,
} from '../../Resources/Color/Color';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Button = ({pressme, children, checked}) => {
  return (
    <TouchableOpacity
      onPress={pressme}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        borderColor: SECONDARY_COLOR,
        borderRadius: responsiveHeight(3),
        height: responsiveHeight(6),
        borderWidth: 1,
        backgroundColor: checked ? COLOR_PRIMARY : INITIAL_BUTTON,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          alignSelf: 'center',
          color: checked ? 'white' : TEXTINPUT_COLOR,
          fontSize: responsiveFontSize(2.2),
          fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
          // fontWeight: 'bold',
         
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
