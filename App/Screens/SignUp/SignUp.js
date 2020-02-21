import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import {
  Container,
  Container2,
  TopTextStyle,
  TopText,
  AppNameDesView,
  SocialButtonStyle,
  ButtonStyle,
  LineStyle,
  Line,
  LineText,
  ContainerInput,
  LogoStyle,
  Container3
} from './Style';
import MyTextField from '../../Common/Input/MyTextField';
import SocialButton from '../../Common/SocialButton/SocialButton';
import Button from '../../Common/Button/Button';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { ScrollView } from 'react-native-gesture-handler';

export const SignUp = ({ navigation }) => {
  const facebook = require('../../Asset/images.png');
  const google = require('../../Asset/google.png');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnCOlor, setbtnColor] = useState(false);
  useEffect(() => {
    name && password && email !== '' ? setbtnColor(true) : setbtnColor(false);
  });
  return (
    <ScrollView style={Container}>
      <KeyboardAvoidingView  behavior="padding" enabled>
      <SafeAreaView style={Container}>
        <View style={Container3}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          /> 
          <TouchableOpacity
            style={TopTextStyle}
            onPress={() => navigation.navigate('Signin')}>
            <Text style={TopText}>Sign in</Text>
          </TouchableOpacity>
          <View style={AppNameDesView}>
            <Image
              source={require('../../Asset/Goto_logo.png')}
              style={LogoStyle}
            />
          </View>
          <View style={SocialButtonStyle}>
            <SocialButton image={facebook}>Continue with Facebook</SocialButton>
          </View>
          <View style={SocialButtonStyle}>
            <SocialButton image={google}>Continue with Google</SocialButton>
          </View>
          <View style={LineStyle}>
            <View style={Line} />
            <Text style={LineText}> OR </Text>
            <View style={Line} />
          </View>
          <View style={[ContainerInput, { marginTop: responsiveHeight(-1) }]}>
            <MyTextField
              label="Name"
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={ContainerInput}>
            <MyTextField
              label="Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={ContainerInput}>
            <MyTextField
              label="Password"
              value={password}
              secureTextEntry
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={ButtonStyle}>
            <Button
              checked={btnCOlor}
              pressme={() => navigation.navigate('Location', { id: 2 })}>
              Sign Up
            </Button>
          </View>
        </View>

      </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
