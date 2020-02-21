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
import AntDesign from 'react-native-vector-icons/AntDesign';
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

export const Selling = ({navigation}) => {
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
              style={[TopView3, {backgroundColor: 'rgba(200, 0, 26, 0.1)'}]}>
              <AntDesign
                name="pay-circle-o1"
                size={responsiveFontSize(3)}
                color={'#C8001A'}
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
              Selling
            </Text>
          </View>

          <View style={[TextInputStyle,{padding:-10}]}>
            <MyTextField label="Title" />
            <MyTextField label="About" />
            <MyTextField label="Price" />
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
