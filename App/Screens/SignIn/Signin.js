import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
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
  Container3,
} from '../SignUp/Style';
import {ForgetPasswordView, ForgetPasswordText} from './Style';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {ScrollView} from 'react-native-gesture-handler';
import {
  LoginManager,
  GraphRequestManager,
  AccessToken,
  GraphRequest,
} from 'react-native-fbsdk';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {useSelector, useDispatch} from 'react-redux';
import ApiManager from '../../ApiManager/ApiManager';
import AsyncStorage from '@react-native-community/async-storage';
import {COLOR_PRIMARY} from '../../Resources/Color/Color';

export const Signin = ({navigation}) => {
  const facebook = require('../../Asset/images.png');
  const google = require('../../Asset/google.png');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnCOlor, setbtnColor] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const Email = useSelector(state => ({...state.Root}));

  useEffect(() => {
    password && email !== '' ? setbtnColor(true) : setbtnColor(false);
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '40728088234-s1g5aufu1fuill5cen29h1qcj9vtm9jj.apps.googleusercontent.com',
      offlineAccess: true, // client ID of type WEB for your server (needed to verify user ID and offline access)
    });
  });

  const _responseInfoCallback = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      alert('Success fetching data: ' + result);
      console.log(result);
    }
  };

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.log(error);
      }
    }
  };

  loginFacebook = async () => {
    try {
      let result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        alert('Login was Cancelled');
      } else {
        AccessToken.getCurrentAccessToken().then(data => {
          callback(data.accessToken);
          if (!result.isCancelled) {
            // this.props.navigation.navigate('UserInfo')
          }
        });
        console.log(result);
        // alert("login was successful with permission :"
        //     + result.grantedPermissions.toString()
        // )
      }
    } catch (error) {
      alert('login field with error :' + error);
    }
  };

  callback = token => {
    // console.log(
    //   token,
    //   new GraphRequestManager().addRequest(infoRequest).start(),
    // );
    const infoRequest = new GraphRequest(
      '/me?fields=name,picture,email',
      {
        accessToken: token,
        prameters: {
          fields: {
            string: 'email , name,first_name, middle_name, last_name',
          },
        },
      },
      _responseInfoCallback,
    );

    new GraphRequestManager().addRequest(infoRequest).start();
  };

  check = async () => {
    new ApiManager()
      .SignIn(email, password)
      .then(async res => {
        if (res) {
          console.log(res.data.SignIn);
          dispatch({type: 'USER', payload: res.data.SignIn.User});
          AsyncStorage.setItem('token', res.data.SignIn.Token);
          setLoading(false);
          navigation.navigate('Location', {id: 2});
        }
      })
      .catch(err => alert(err));
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
              <SocialButton image={facebook} pressme={() => loginFacebook()}>
                Continue with Facebook
              </SocialButton>
            </View>
            <View style={SocialButtonStyle}>
              <SocialButton image={google} pressme={() => signIn()}>
                Continue with Google
              </SocialButton>
            </View>
            <View style={LineStyle}>
              <View style={Line} />
              <Text style={LineText}>OR</Text>
              <View style={Line} />
            </View>

            <View style={[ContainerInput, {marginTop: responsiveHeight(-1)}]}>
              <MyTextField
                label="Email"
                // value={Email}
                // onChangeText={text => dispatch({type:'Email',payload:text})}
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
                  Sign In
                </Button>
              )}
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
