import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
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
} from '../../Resources/Color/Color';
import {ForgetPasswordView, ForgetPasswordText} from './Style';
import {Rating, AirbnbRating} from 'react-native-ratings';

export const Ratings = ({navigation}) => {
  const [rating, setrating] = useState(0);
  const [btnCOlor, setbtnColor] = useState(false);

  ratingCompleted = rating => {};
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
              left: responsiveHeight(2.5),
              marginTop:responsiveHeight(1.5),
              fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
              fontSize: responsiveFontSize(2.7),
              
            }}>
            Give Star
          </Text>
          <View style={{top: responsiveHeight(5)}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  marginHorizontal: responsiveHeight(3),
                  marginTop: responsiveHeight(1),
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
                      fontSize: responsiveFontSize(3),
                    }}>
                    Jonas Smith
                  </Text>
                </View>
              </View>
            </View>
            <Rating
              showRating
              type="star"
              imageSize={35}
              // startingValue={rating/2}
              onFinishRating={ratingCompleted()}
              style={{ paddingHorizontal:10,marginTop:15 }}
              // fractions={2}
              showRating={false}
            />
          </View>
          <View
            style={{
              height: responsiveHeight(6.5),
              marginTop: responsiveHeight(12),
              marginHorizontal: responsiveWidth(3),
            }}>
            {btnCOlor ? (
              <TouchableOpacity style={{marginHorizontal:responsiveWidth(2)}} onPress={()=>navigation.navigate('EditDetails')}>
                <Text
                  style={{
                    fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    color: TEXTINPUT_COLOR,
                    fontSize: responsiveFontSize(2),
                  }}>
                  Waste Less,Share more..,
                </Text>
                <Text
                  style={{
                    fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    color: TEXTINPUT_COLOR,
                    fontSize: responsiveFontSize(2),
                  }}>
                  Thank you for collaborating for a better world.
                </Text>
              </TouchableOpacity>
            ) : (
              <Button
                checked
                pressme={() => {
                  setbtnColor(true);
                  
                }}>
                Rate
              </Button>
            )}
          </View>
        
      </View>
      </SafeAreaView>
    </View>
  );
};
