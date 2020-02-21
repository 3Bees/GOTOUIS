import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {buttonStyle, textStyle, imageStyle} from './Style/SocialButtonStyle';

const SocialButton = ({pressme, image, children}) => {
  return (
    <TouchableOpacity onPress={pressme} style={buttonStyle}>
      <Image style={imageStyle} resizeMode="center" source={image} />
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
export default SocialButton;
