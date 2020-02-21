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
import ImagePicker from 'react-native-image-picker';

import {
  Container,
  Container2,
  TopTextStyle,
  TopText,
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
import { ScrollView } from 'react-native-gesture-handler';

export const LookingFor = ({navigation}) => {
  const [rating, setrating] = useState(0);
  const [btnCOlor, setbtnColor] = useState(false);

  ratingCompleted = rating => {};
  //   console.log(btnCOlor);
  return (
    <ScrollView style={Container}>
            <KeyboardAvoidingView  behavior="padding" enabled>

      <SafeAreaView style={Container}>
      <View style={Container2}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        
          <TouchableOpacity
            style={[TopTextStyle,]}
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
              style={[TopView3, {backgroundColor: 'rgba(0, 92, 231, 0.1)'}]}>
              <Ionicons
                name="ios-search"
                size={responsiveFontSize(3)}
                color={'#005CE7'}
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
              Looking For
            </Text>
          </View>

          <View style={[TextInputStyle, {padding: -10}]}>
            <MyTextField label="Title" />
            <MyTextField label="About" />
            <MyTextField label="Price" />
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
                fontStyle: 'normal',
                fontWeight: 'normal',
                color:TEXTINPUT_COLOR
              }}>
              let the community know the price you are willing to pay?
            </Text>
          </View>
          <View style={ViewContainer}>
            <Text style={locationText}>My Location</Text>
          </View>
          <View style={SearchBarStyle}>
            <View style={SearchBarContainerView}>
              <Ionicons
                name="ios-search"
                style={SearchIcons}
                size={responsiveFontSize(4)}
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
              size={responsiveFontSize(3)}
              color={COLOR_PRIMARY}
            />
          </TouchableOpacity>
          <View style={buttonView}>
            <Button checked>Post</Button>
          </View>
        
      </View>
      </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
