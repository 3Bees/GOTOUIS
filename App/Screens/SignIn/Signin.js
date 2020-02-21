import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import MyTextField from '../../Common/Input/MyTextField';
import SocialButton from '../../Common/SocialButton/SocialButton';
import Button from '../../Common/Button/Button';
import {
  Container,
  TopTextStyle,
  TopText,
  SocialButtonStyle,
  LineStyle,
  Line,
  LineText,
  ContainerInput,
  ButtonStyle,
  Container2,
  AppNameDesView,
  LogoStyle,
  Container3
} from '../SignUp/Style';
import {ForgetPasswordView, ForgetPasswordText} from './Style';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import { ScrollView } from 'react-native-gesture-handler';

export const Signin = ({navigation}) => {
  const facebook = require('../../Asset/images.png');
  const google = require('../../Asset/google.png');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnCOlor, setbtnColor] = useState(false);

  useEffect(() => {
    password && email !== '' ? setbtnColor(true) : setbtnColor(false);
  });
  console.log();
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
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={TopText}>Sign up</Text>
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
            <Text style={LineText}>OR</Text>
            <View style={Line} />
          </View>

          <View style={[ContainerInput, {marginTop: responsiveHeight(-1)}]}>
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
              pressme={() => navigation.navigate('Location',{id:2})}>
              Sign In
            </Button>
          </View>
          <TouchableOpacity
            style={ForgetPasswordView}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={ForgetPasswordText}>Forgotten Password?</Text>
          </TouchableOpacity>
      </View>
      
      </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
