import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ActivityIndicator,
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
  Container3,
} from './Style';
import MyTextField from '../../Common/Input/MyTextField';
import SocialButton from '../../Common/SocialButton/SocialButton';
import Button from '../../Common/Button/Button';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {ScrollView} from 'react-native-gesture-handler';

import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';
import ApiManager from '../../ApiManager/ApiManager';
import {COLOR_PRIMARY} from '../../Resources/Color/Color';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector, useDispatch} from 'react-redux';

const client = new ApolloClient({
  uri: 'https://api.gotoapp.io/graphql',
});

export const SignUp = ({navigation}) => {
  const facebook = require('../../Asset/images.png');
  const google = require('../../Asset/google.png');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [btnCOlor, setbtnColor] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    name && password && email !== '' ? setbtnColor(true) : setbtnColor(false);
  });

  check = async () => {
    new ApiManager()
      .SignUp(name, email, password)
      .then(async res => {
        if (res) {
          console.log(res.data.SignUp.User);
          dispatch({type: 'USER', payload: res.data.SignIn.User});
          await AsyncStorage.setItem('token', res.data.SignUn.Token);
          navigation.navigate('Location', {id: 2});
        }
      })
      .cateh(err => console.log(err));
  };

  return (
    <ScrollView style={Container}>
      <KeyboardAvoidingView behavior="padding" enabled>
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
              <SocialButton image={facebook}>
                Continue with Facebook
              </SocialButton>
            </View>
            <View style={SocialButtonStyle}>
              <SocialButton image={google}>Continue with Google</SocialButton>
            </View>
            <View style={LineStyle}>
              <View style={Line} />
              <Text style={LineText}> OR </Text>
              <View style={Line} />
            </View>
            <View style={[ContainerInput, {marginTop: responsiveHeight(-1)}]}>
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
              {loading ? (
                <ActivityIndicator size={'small'} color={COLOR_PRIMARY} />
              ) : (
                <Button
                  checked={btnCOlor}
                  pressme={() => {
                    check();
                    setLoading(true);
                  }}>
                  Sign Up
                </Button>
              )}
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
