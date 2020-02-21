import React from 'react';
import {View, Text} from 'react-native';

import {TextField} from 'react-native-material-textfield';
import {
  COLOR_PRIMARY,
  SECONDARY_COLOR,
  TEXTINPUT_COLOR,
} from '../../Resources/Color/Color';

const MyTextField = ({
  label,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  style,
  editable = true,
}) => {
  return (
    <TextField
      label={label}
      value={value}
      textColor="#1d211f"
      labelTextStyle={{color: TEXTINPUT_COLOR}}
      keyboardType={keyboardType || 'default'}
      secureTextEntry={secureTextEntry || false}
      onChangeText={txt => onChangeText(txt)}
      autoCapitalize={'none'}
      editable={editable}
      tintColor={COLOR_PRIMARY}
      lineType="solid"
      lineWidth={1}
    />
  );
};

export default MyTextField;
