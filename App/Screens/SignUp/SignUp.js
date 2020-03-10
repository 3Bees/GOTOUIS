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
  Modal,
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
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {ScrollView} from 'react-native-gesture-handler';

import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';
import ApiManager from '../../ApiManager/ApiManager';
import {COLOR_PRIMARY, TEXT_COLOR} from '../../Resources/Color/Color';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';

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
  const [modalVisible, setmodalVisible] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    name && password && email !== '' ? setbtnColor(true) : setbtnColor(false);
    getCurrentPosition();
  });

  const getCurrentPosition = async () => {
    Geolocation.getCurrentPosition(async position => {
      await AsyncStorage.setItem(
        'lat',
        JSON.stringify(position.coords.latitude),
      );
      await AsyncStorage.setItem(
        'lon',
        JSON.stringify(position.coords.longitude),
      );
    });
  };
  const toggleModal = () => {
    setmodalVisible(!modalVisible);
  };

  const check = async yes => {
    getCurrentPosition();
    new ApiManager()
      .SignUp(name, email, password)
      .then(async res => {
        if (res) {
          console.log(res.data.SignUp.User);
          if (yes) {
            navigation.navigate('Home');
          } else {
            navigation.navigate('Location', {id: 2});
          }
          await AsyncStorage.setItem('token', res.data.SignUp.Token);
          dispatch({type: 'USER', payload: res.data.SignUp.User});
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
            <Modal
              animationType={'pokeman'}
              transparent={false}
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                toggleModal();
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: responsiveHeight(30),
                    width: responsiveWidth(90),
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: responsiveHeight(5),
                  }}>
                  <View
                    style={{
                      height: responsiveHeight(17),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontSize: responsiveFontSize(2.5),
                        fontFamily:
                          Platform.OS === 'android' ? 'Muli-Regular' : null,
                        color: TEXT_COLOR,
                      }}>
                      Do you want to use live location?
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      height: responsiveHeight(10),
                      justifyContent: 'space-evenly',
                      marginHorizontal: responsiveWidth(4),
                    }}>
                    <Button
                      checked
                      pressme={() => {
                        toggleModal();
                        check();
                      }}>
                      No
                    </Button>
                    <View style={{width: responsiveWidth(5)}} />
                    <Button
                      checked
                      pressme={() => {
                        toggleModal();
                        check(1);
                      }}>
                      Yes
                    </Button>
                  </View>
                </View>
              </View>
            </Modal>

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
                    setLoading(true);
                    toggleModal()
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
