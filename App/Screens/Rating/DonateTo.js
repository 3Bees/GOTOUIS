import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
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
  ContainerInput,
  ButtonStyle,
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
import { ForgetPasswordView, ForgetPasswordText } from './Style';
import { Rating, AirbnbRating } from 'react-native-ratings';

export const DonateTo = ({ navigation }) => {
  const [rating, setrating] = useState(0);
  const [btnCOlor, setbtnColor] = useState(false);
  const [data, setdata] = useState([1, 2, 3, 4])

  ratingCompleted = rating => { };
  //   console.log(btnCOlor);
  return (
    <View style={Container}>
      <SafeAreaView style={Container}>
        <View style={Container2}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />

          <TouchableOpacity
            style={TopTextStyle}
            onPress={() => navigation.goBack()}>
            <Ionicons
              style={TopText}
              name="ios-arrow-back"
              size={responsiveFontSize(3)}
              color={COLOR_PRIMARY}
            />
          </TouchableOpacity>
          <Text
            style={{

              color: TEXT_COLOR,
              fontSize: responsiveFontSize(2.7),
              fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
              marginTop:responsiveHeight(2),
              marginHorizontal: responsiveHeight(3),
            }}>
            Who did you donate "Apple cake made from my mom" to?
          </Text>
          <FlatList
          data={data}
          style={{marginTop:responsiveHeight(2)}}
          renderItem={(item,idex)=>{
         return   <TouchableOpacity
         onPress={()=>navigation.navigate('Rating')}
            style={{
              flexDirection: 'row',
              alignSelf: 'stretch',
              borderColor: SECONDARY_COLOR,
              borderRadius: responsiveHeight(6),
              padding:10,
              borderWidth: 1,
              backgroundColor: '#F4F5F5',
              alignItems: 'center',
              backgroundColor: 'white',
              justifyContent: 'center',
              marginHorizontal: responsiveHeight(3),
            marginVertical:responsiveHeight(1)
            }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={{
                    uri: 'https://bootdey.com/img/Content/avatar/avatar7.png',
                  }}
                  style={{
                    height: responsiveHeight(4),
                    width: responsiveHeight(4),
                    borderRadius: responsiveHeight(4),
                    backgroundColor: 'black',
                  }}
                />
                <View
                  style={{
                    marginHorizontal: responsiveHeight(1),
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      color: TEXT_COLOR,
                      fontSize: responsiveFontSize(2),
                    }}>
                    Jonas Smith
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>


          }
          }/>
       
        </View>
      </SafeAreaView>
    </View>
  );
};
