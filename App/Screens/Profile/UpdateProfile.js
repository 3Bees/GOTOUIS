import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Dimensions
} from 'react-native';

import MyTextField from '../../Common/Input/MyTextField';
import Button from '../../Common/Button/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {ContainerInput} from '../SignUp/Style';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {COLOR_PRIMARY} from '../../Resources/Color/Color';
import {
  containerStyle,
  Myloc,
  IconSend,
  sendStyle,
  nameLocStyle,
  changeLocContainer,
  changeText,
  updateContainer,
  textinputContainers,
  crossContainer,
  crossContainerTop,
  Center,
  backContainer,
  logoutText,
  logoutContainer,
  userImage,
  btnImage,
} from './Style';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import ApiManager from '../../ApiManager/ApiManager';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import ImageResizer from 'react-native-image-resizer';
import AsyncStorage from '@react-native-community/async-storage';

export const UpdateProfile = ({navigation}) => {
  const User = useSelector(state => ({...state.User}));
  console.log('checking', User);
  const [name, setname] = useState(User.user.Name);
  const [email, setEmail] = useState(User.user.Email);
  const [updateProfile,setProfile]=useState({})
  const dispatch = useDispatch();
  const Email = useSelector(state => ({...state.Root}));
  const[location,setLocation]=useState('')

  const [Picture, setPicture] = useState('');


  useEffect(()=>{
    Done()
  })
  const Done=async()=>{
    let data=await AsyncStorage.getItem('name')
    setLocation(data)
  }
const  check = async () => {
    new ApiManager().QueryRequest(name,Picture).then(res => {
      if (res) {
        console.log(res);
        dispatch({type: 'UPDATE', payload: res});
        setProfile(res)
        navigation.goBack();
      }
    });
  };
const  handleChoosePhoto = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        console.log('image');
        ImageResizer.createResizedImage(
          response['uri'],
          Dimensions.get('window').width,
          Dimensions.get('window').height / 3,
          'JPEG',
          50,
        ).then(resizedImage => {
          console.log('i m resized', resizedImage);
          RNFetchBlob.fs
            .readFile(resizedImage.uri, 'base64')
            .then(res => setPicture(res));
        });
      }
    });
  };
  console.log("updateProfile",updateProfile)
  return (
    <ScrollView style={containerStyle}>
      <KeyboardAvoidingView behavior="padding" enabled>
        <View style={containerStyle}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <SafeAreaView style={containerStyle}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signin')}
              style={logoutContainer}>
              <Text style={logoutText}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={backContainer}>
              <Ionicons
                name="ios-arrow-back"
                size={responsiveFontSize(3)}
                color={COLOR_PRIMARY}
              />
            </TouchableOpacity>
            <View style={Center}>
              <TouchableOpacity
                onPress={() => handleChoosePhoto()}
                style={crossContainerTop}>{
                  User.user.Photo? <Image
                  style={userImage}
                  source={{uri:User.user.Photo}}
                />
                  :
                <Image
                  style={userImage}
                  source={require('../../Asset/Bitmap.png')}
                />}
                <View style={crossContainer}>
                  <Entypo
                    name="cross"
                    size={responsiveFontSize(2.5)}
                    color={'white'}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={textinputContainers}>
              <View style={ContainerInput}>
                <MyTextField
                  label="Name"
                  value={updateProfile.data?updateProfile.data.EditProfile.Name: name}
                  onChangeText={text => setname(text)}
                />
              </View>
              <View style={ContainerInput}>
                <MyTextField
                  label="Email"
                  value={email}
                  onChangeText={text => setEmail(text)}
                />
              </View>
              <View style={Myloc}>
                <Text
                  style={{
                    fontFamily: 'Muli-Bold',
                    fontSize: responsiveFontSize(1.6),
                  }}>
                  My Location
                </Text>
                <View style={IconSend}>
                  <Image
                    style={btnImage}
                    source={require('../../Asset/location.png')}
                  />
                  <Text style={nameLocStyle} numberOfLines={1}>{location?location:'BH - Brazil'}</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Location')}
                    style={changeLocContainer}>
                    <Text style={changeText}>Change</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={updateContainer}>
                <Button checked pressme={() => check()}>
                  Update My Profile
                </Button>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
