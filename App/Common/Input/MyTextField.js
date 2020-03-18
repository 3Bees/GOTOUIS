import React from 'react';
import {View, Text} from 'react-native';

import {TextField} from 'react-native-material-textfield';
import {
  COLOR_PRIMARY,
  SECONDARY_COLOR,
  TEXTINPUT_COLOR,
} from '../../Resources/Color/Color';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const MyTextField = ({
  label,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  style,
  editable = true,
  multiline,
  autoCapitalize,
  numberOfLines,
  onkeydown
}) => {
  console.log("onkeydown")
  return (
    <TextField
    onKeyPress={onkeydown}
      label={label}
      value={value}
      textColor="#1d211f"
      labelTextStyle={{color: TEXTINPUT_COLOR}}
      keyboardType={keyboardType || 'default'}
      secureTextEntry={secureTextEntry}
      onChangeText={txt => onChangeText(txt)}
      autoCapitalize={autoCapitalize}
      editable={editable}
      tintColor={COLOR_PRIMARY}
      lineType="solid"
      lineWidth={1}
      numberOfLines={numberOfLines}
      multiline={multiline}
      inputContainerStyle={{width:responsiveWidth(90)}}
      containerStyle={{width:responsiveWidth(90)}}
      style={{width:responsiveWidth(90)}}
    />
  );
};

export default MyTextField;
