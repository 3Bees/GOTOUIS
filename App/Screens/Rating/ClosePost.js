import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
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
import {COLOR_PRIMARY, TEXTINPUT_COLOR} from '../../Resources/Color/Color';
import {ForgetPasswordView, ForgetPasswordText} from './Style';
import ApiManager from '../../ApiManager/ApiManager';

export const ClosePost = ({navigation}) => {
  const [id, setId] = useState(navigation.state.params.id);
  
  const [data, setData] = useState({});

  const closePost = id => {
    new ApiManager()
      .closePost(id)
      .then(res =>{if(res){
        console.log("res",res)
        alert("This Post is Closed")
        navigation.navigate('Home')
      }})
      .catch(error => console.log(error));
  };
  useEffect(() => {
    if (data.data == undefined) {
      new ApiManager()
        .getPostbyId(id)
        .then(res => {
          console.log('res', res);
          setData(res);
        })
        .catch(err => console.log(err));
    }
  });
  return (
    <View style={Container}>
      <View style={Container2}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <SafeAreaView style={Container}>
          <TouchableOpacity
            style={[
              TopTextStyle,
              {
                left: responsiveWidth(5),
              },
            ]}
            onPress={() => navigation.goBack()}>
            <Ionicons
              style={TopText}
              name="ios-arrow-back"
              size={responsiveFontSize(3)}
              color={COLOR_PRIMARY}
            />
          </TouchableOpacity>
          <View
            style={{
              marginTop: responsiveHeight(2),
              marginHorizontal: responsiveWidth(4),
            }}>
            <Text
              style={{
                fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
                fontStyle: 'normal',
                fontSize: responsiveFontSize(3),
              }}>
              {data.data?data.data.Post.Subject:'data'}
            </Text>
          </View>
          <View
            style={{
              marginTop: responsiveHeight(1),
              marginHorizontal: responsiveWidth(4),
            }}>
            <Text
              style={{
                fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
                fontStyle: 'normal',
                fontSize: responsiveFontSize(2),
                fontWeight: 'normal',
                color: TEXTINPUT_COLOR,
              }}>
              Please Select Your reason why you are closing this post?
            </Text>
          </View>

          <TouchableOpacity
            style={{
              marginHorizontal: responsiveWidth(4),
              marginTop: responsiveHeight(4),
              height: responsiveHeight(7),
              borderRadius: responsiveHeight(4),
              justifyContent: 'center',
              alignContent: 'center',
              borderWidth: 1,
              borderColor: 'rgba(29, 33, 31, 0.0781523)',
            }}
            onPress={() => navigation.navigate('DonateTo',{id:id})}>
            <Text
              style={{
                fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
                fontStyle: 'normal',
                fontSize: responsiveFontSize(2.2),

                color: COLOR_PRIMARY,
                alignSelf: 'center',
              }}>
              Donated
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginHorizontal: responsiveWidth(4),
              marginTop: responsiveHeight(2),
              height: responsiveHeight(7),
              borderRadius: responsiveHeight(4),
              justifyContent: 'center',
              alignContent: 'center',
              borderWidth: 1,
              borderColor: 'rgba(29, 33, 31, 0.0781523)',
            }}
            onPress={()=>closePost(id)}
            >
            <Text
              style={{
                fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
                fontStyle: 'normal',
                fontSize: responsiveFontSize(2.2),

                color: COLOR_PRIMARY,
                alignSelf: 'center',
              }}>
              I gave up to donate
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
};
