import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
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
  TextStyleDo,ViewStyleImage, buttonView, SearchIcons,SearchBarContainerView, SearchBarStyle, locationText, ViewContainer, TextInputStyle
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
import { ScrollView } from 'react-native-gesture-handler';

export const PostAdd = ({navigation}) => {
  const [rating, setrating] = useState(0);
  const [btnCOlor, setbtnColor] = useState(false);
  handleChoosePhoto = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      let source = response;
      //let source = { uri: 'data:image/jpeg;base64,' + response.data };
      console.log(source);
    });
  };
  ratingCompleted = rating => {};
  //   console.log(btnCOlor);
  return (
    <ScrollView style={Container}>
          <KeyboardAvoidingView  behavior="padding" enabled>

      <SafeAreaView style={Container}>
      <View style={[Container2,{backgroundColor:'white'}]}>
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
          <View
            style={DonateViewTop}>
            <View
              style={[TopView3, {backgroundColor: 'rgba(0, 152, 155, 0.1)'}]}>
              <Entypo
                name="heart-outlined"
                size={responsiveFontSize(3)}
                color={'#00989B'}
              />
            </View>
            <Text
              style={[TextStyleDo,{
                color: TEXT_COLOR,
                marginLeft: responsiveHeight(2),
              }]}>
              Donate
            </Text>
          </View>

          <View style={TextInputStyle}>
            <MyTextField label="Title" />
            <MyTextField label="About" />
          </View>
          <View
            style={ViewContainer}>
            <Text
              style={locationText}>
              Location
            </Text>
          </View>
          <View
            style={SearchBarStyle}>
            <View
              style={SearchBarContainerView}>
              <Ionicons
                name="ios-search"
                style={SearchIcons}
                size={responsiveFontSize(2.8)}
                color={COLOR_PRIMARY}
              />
              <TextInput placeholder="Search Location" style={{margin:0,padding:0}} />
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
          <View
            style={buttonView}>
            <Button checked>Post</Button>
          </View>
      </View>
        </SafeAreaView>
        </KeyboardAvoidingView>
    </ScrollView>
  );
};
