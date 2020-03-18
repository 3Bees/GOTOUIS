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
  const Place = async () => {
    let loc = await AsyncStorage.getItem('name');

    let lat = await AsyncStorage.getItem('lat');
    let lng = await AsyncStorage.getItem('lon');

    var myHeaders = new Headers();
    myHeaders.append(
      'User-Agent',
      'Goto/1.6.7.42 Dalvik/2.1.0 (Linux; U; Android 5.1.1; Android SDK built for x86 Build/LMY48X)',
    );

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
      requestOptions,
    )
      .then(response => response.json())
      .then(async msgs => {
        console.log('datatatat', msgs.address.suburb+msgs.address.city+msgs.address.country);
        await AsyncStorage.setItem('name',`${msgs.address.suburb},${msgs.address.city},${msgs.address.country}`)
        await AsyncStorage.setItem('lat', msgs.lat);
        await AsyncStorage.setItem('lon', msgs.lon);
      })
      .catch(error => {
        console.log('error', error);
      });
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
                    height: responsiveHeight(15),
                    width: responsiveWidth(90),
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                  }}>
                  <View
                    style={{
                      height: responsiveHeight(9),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontSize: responsiveFontSize(2),
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
                      justifyContent: 'space-evenly',
                      marginHorizontal: responsiveWidth(4),
                    }}>
                    <TouchableOpacity
                    style={{justifyContent:'flex-start'}}
                      onPress={() => {
                        toggleModal()
                        check()
                      }}>
                      <Text>
                      No</Text>
                    </TouchableOpacity>
                    <View style={{width: responsiveWidth(35)}} />
                    <TouchableOpacity
                      onPress={() => {
                        toggleModal()
                        check(1)
                        Place()
                      }}>
                      <Text>
                      Yes
                      </Text>
                    </TouchableOpacity>
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
                autoCapitalize={'words'}
                label="Name"
                value={name}
                onChangeText={text => setName(text)}
              />
            </View>
            <View style={ContainerInput}>
              <MyTextField
              autoCapitalize={'none'}
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
