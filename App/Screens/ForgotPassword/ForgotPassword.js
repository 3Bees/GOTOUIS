import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyTextField from '../../Common/Input/MyTextField';
import Button from '../../Common/Button/Button';
import {
  Container,
  Container2,
  TopTextStyle,
  TopText,
  ContainerInput,
  ButtonStyle,
  ForgetPasswordView,
  sendDesView,
  sendDesText,
} from './Style';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {COLOR_PRIMARY, TEXTINPUT_COLOR} from '../../Resources/Color/Color';
import {ForgetPasswordText} from '../Profile/Style';

export const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [show, setshow] = useState(false);
  const [btnCOlor, setbtnColor] = useState(false);

  useEffect(() => {
    email !== '' ? setbtnColor(true) : setbtnColor(false);
  });

  return (
    <View style={Container}>
      <View style={Container2}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <SafeAreaView style={Container}>
          <TouchableOpacity
            style={TopTextStyle}
            onPress={() => navigation.navigate('Signin')}>
            <Ionicons
              style={[TopText, {fontSize: responsiveFontSize(3)}]}
              name="ios-arrow-back"
              size={responsiveFontSize(5)}
              color={COLOR_PRIMARY}
            />
          </TouchableOpacity>
          <View style={ForgetPasswordView}>
            <Text style={ForgetPasswordText}>Forgotten password?</Text>
          </View>
          <View style={ContainerInput}>
            <MyTextField
              label="Email"
              value={email}
              
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={ButtonStyle}>
            <Button checked={btnCOlor} pressme={() => setshow(true)}>
              Send
            </Button>
          </View>
          {show ? (
            <View style={sendDesView}>
              <Text style={sendDesText}>
                A new Password has been send to your email address!
              </Text>
            </View>
          ) : null}
        </SafeAreaView>
      </View>
    </View>
  );
};
