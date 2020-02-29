import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyTextField from '../../Common/Input/MyTextField';
import SocialButton from '../../Common/SocialButton/SocialButton';
import Button from '../../Common/Button/Button';
import {
  Container,
  Container2,
  TopTextStyle,
  TopText,
  ContainerInput,
  ButtonStyle,
  TopView3,
  DonateViewTop,
  TextStyleDo,
  ViewStyleImage,
  buttonView,
  SearchIcons,
  SearchBarContainerView,
  SearchBarStyle,
  locationText,
  ViewContainer,
  TextInputStyle,
} from './Style';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  COLOR_PRIMARY,
  TEXTINPUT_COLOR,
  TEXT_COLOR,
  SECONDARY_COLOR,
  INITIAL_BUTTON,
} from '../../Resources/Color/Color';
import Entypo from 'react-native-vector-icons/Entypo';
import {ForgetPasswordView, ForgetPasswordText} from './Style';
import {Rating, AirbnbRating} from 'react-native-ratings';
import ImagePicker from 'react-native-image-picker';
import {ScrollView} from 'react-native-gesture-handler';
import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';
import {useSelector, useDispatch} from 'react-redux';
import ApiManager from '../../ApiManager/ApiManager';

export const PostAdd = ({navigation}) => {
  const [rating, setrating] = useState(0);
  const [btnCOlor, setbtnColor] = useState(false);
  const [title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLoction] = useState('');
  const [Picture, setPicture] = useState('');
  handleChoosePhoto = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response.uri);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setPicture(source["uri"]);
      }
    });
  };

  check = () => {
    console.log("i m here")
    new ApiManager()
      .createPost(title, Description, 12, location, Picture, 'Donate')
      .then(res => {
        if(res){
          navigation.goBack();
        }
        console.log(res);
      })
      .catch(err => alert(err));
  };
  return (
    <ScrollView style={Container}>
      <KeyboardAvoidingView behavior="padding" enabled>
        <SafeAreaView style={Container}>
          <View style={[Container2, {backgroundColor: 'white'}]}>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="dark-content"
            />
            <TouchableOpacity
              style={[TopTextStyle]}
              onPress={() => navigation.goBack()}>
              <Ionicons
                style={TopText}
                name="ios-arrow-back"
                size={responsiveFontSize(5)}
                color={COLOR_PRIMARY}
              />
            </TouchableOpacity>
            <View style={DonateViewTop}>
              <View
                style={[TopView3, {backgroundColor: 'rgba(0, 152, 155, 0.1)'}]}>
                <Entypo
                  name="heart-outlined"
                  size={responsiveFontSize(3)}
                  color={'#00989B'}
                />
              </View>
              <Text
                style={[
                  TextStyleDo,
                  {
                    color: TEXT_COLOR,
                    marginLeft: responsiveHeight(2),
                  },
                ]}>
                Donate
              </Text>
            </View>

            <View style={TextInputStyle}>
              <MyTextField
                label="Title"
                value={title}
                onChangeText={text => {
                  setTitle(text);
                }}
              />
              <MyTextField
                label="About"
                value={Description}
                onChangeText={text => {
                  setDescription(text);
                }}
              />
            </View>
            <View style={ViewContainer}>
              <Text style={locationText}>Location</Text>
            </View>
            <View style={SearchBarStyle}>
              <View style={SearchBarContainerView}>
                <Ionicons
                  name="ios-search"
                  style={SearchIcons}
                  size={responsiveFontSize(2.8)}
                  color={COLOR_PRIMARY}
                />
                <TextInput
                  placeholder="Search Location"
                  style={{margin: 0, padding: 0}}
                  value={location} onChangeText={(text)=>setLoction(text)}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => handleChoosePhoto()}
              style={ViewStyleImage}>
              <FontAwesome5
                name="image"
                size={responsiveFontSize(6)}
                color={COLOR_PRIMARY}
              />
            </TouchableOpacity>
            <View style={buttonView}>
              <Button checked pressme={() => check()}>
                Post
              </Button>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
