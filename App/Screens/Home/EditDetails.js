import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Modal,
  ActivityIndicator,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ApiManager from '../../ApiManager/ApiManager';
import {
  TopTextStyle,
  TopText,
  modalContainerTop,
  imageBackground,
  StatusText,
  backgroundImage,
  gradientStyle,
  backIconView,
  backIcon,
  favoriteIconView,
  shareIconView,
  shareIcon,
  donateTextView,
  stickyHeaderContainer,
  ViewContainer,
  TextStyleTop,
  ApplyButtonText,
  ViewUserImage,
  imageUser,
  userNameContainer,
  userName,
  starIcon,
  ratingText,
  timeAgo,
  ViewforSpace,
  ViewforSpace2,
  aboutText,
  detailExe,
  locationText,
  DirectionRow,
  locationNameText,
  locationPin,
  distanceText,
  interactionText,
  containerImage,
  imageStyle,
  Comment,
  backIconView2,
  TextinputView,
  sendmsgImage,
  backIconView1,
  favoriteIconView1,
  favoriteIconView2,
  shareIconView1,
  backIcon2,
  shareIconView2,
  donateTextView1,
  imagePencil,
  containerDonation,
  hearto,
} from './Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../Common/Button/Button';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {Container, Container2} from '../SignUp/Style';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as geolib from 'geolib';
import {
  COLOR_PRIMARY,
  COLOR_DONATE,
  TEXT_COLOR,
  COLOR_FAVOUR,
  TEXTINPUT_COLOR,
  SECONDARY_COLOR,COLOR_LOOKING_FOR
} from '../../Resources/Color/Color';
import {ViewButtonContainer, textInputField, SendButton} from '../Chat/Style';
import AsyncStorage from '@react-native-community/async-storage';

export const EditDetails = ({navigation}) => {
  const [comment, setComment] = useState('');
  const [focusState, setFocusState] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);

  const [id, setId] = useState(navigation.state.params.id);
  const [data, setData] = useState({});
  const [load, setload] = useState(false);
  const [location, setLocation] = useState('');

  useEffect(() => {
    const isFocused = navigation.isFocused();

    if (load == false) {
      postData();
    }
    const navFocusListener = navigation.addListener('didFocus', () => {
      // do some API calls here
      postData();
    });

    return () => {
      navFocusListener.remove();
    };
  }, []);
  const postData = async () => {
    let lat = await AsyncStorage.getItem('lat');
    let long = await AsyncStorage.getItem('lon');
    new ApiManager()
      .getPostbyId(id)
      .then(res => {
        let distance = geolib.getPreciseDistance(
          {latitude: lat, longitude: long},
          {
            latitude: res.data.Post.Location.Lat,
            longitude: res.data.Post.Location.Lon,
          },
        );
        setLocation(geolib.convertDistance(distance, 'km').toFixed(1))

        setData(res);
        setload(true);
      })
      .catch(err => {
        alert(err);
        setload(true);
      }),
      [id];
  };
  const toggleModal = () => {
    setmodalVisible(!modalVisible);
  };

  var periods = {
    month: 30 * 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
  };

  const formatTime = timeCreated => {
    var diff = Date.now() - timeCreated;

    if (diff > periods.month) {
      // it was at least a month ago
      return Math.floor(diff / periods.month) + ' months';
    } else if (diff > periods.week) {
      return Math.floor(diff / periods.week) + ' weeks';
    } else if (diff > periods.day) {
      return Math.floor(diff / periods.day) + ' days';
    } else if (diff > periods.hour) {
      return Math.floor(diff / periods.hour) + ' hours';
    } else if (diff > periods.minute) {
      return Math.floor(diff / periods.minute) + ' minutes';
    }
    return 'Just now';
  };
  return (
    <View
      style={[
        Container,
        {backgroundColor: modalVisible ? 'rgba(0,0,0,0.1)' : '#F2F2F2'},
      ]}>
      <StatusBar barStyle="light-content" />
      {data.data == undefined ? (
        <ActivityIndicator
          size={'large'}
          color={COLOR_PRIMARY}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        />
      ) : (
        <ParallaxScrollView
          backgroundColor="white"
          contentBackgroundColor="white"
          fadeOutForeground={true}
          stickyHeaderHeight={responsiveHeight(8)}
          parallaxHeaderHeight={responsiveHeight(27)}
          // // fadeOutForeground={true}
          // // stickyHeaderHeight={150}
          // // parallaxHeaderHeight={responsiveHeight(27)}
          // stickyHeaderHeight={ 150 }
          renderForeground={() => (
            <ImageBackground
              source={{uri: data.data.Post.Picture}}
              resizeMode="stretch"
              style={imageBackground}>
              <LinearGradient
                colors={['rgba(29, 33, 31, 0.0001)', 'rgba(29, 33, 31, 0.5)']}
                style={{height: responsiveHeight(27)}}
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0}}>
                <TouchableOpacity
                  style={donateTextView1}
                  onPress={() => navigation.goBack()}>
                  <Ionicons
                    style={backIcon}
                    name="ios-arrow-back"
                    size={responsiveFontSize(5)}
                    color="white"
                  />
                </TouchableOpacity>
                <View style={imagePencil}>
                  <TouchableOpacity
                    style={favoriteIconView1}
                    onPress={() => toggleModal()}>
                    <Image
                      source={require('../../Asset/pencil.png')}
                      style={{
                        height: responsiveHeight(3),
                        width: responsiveHeight(3),
                        resizeMode: 'contain',
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={shareIconView1}>
                    <Feather
                      style={shareIcon}
                      name="share-2"
                      size={responsiveFontSize(5)}
                      color="#fff"
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={[
                    containerDonation,
                    {
                      backgroundColor:
                        data.data.Post.Type == 0
                          ? COLOR_DONATE
                          : data.data.Post.Type == 1
                          ? COLOR_FAVOUR
                          : data.data.Post.Type == 2
                          ? COLOR_SELL
                          : COLOR_LOOKING_FOR,
                    },
                  ]}>
                  <Text style={StatusText}>
                    {data.data.Post.Type == 0
                      ? 'Donation'
                      : data.data.Post.Type == 1
                      ? 'Favour'
                      : data.data.Post.Type == 2
                      ? data.data.Post.Price
                      : 'Looking For'}
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </ImageBackground>
          )}
          renderStickyHeader={() => (
            <View style={stickyHeaderContainer}>
              <TouchableOpacity
                style={backIconView2}
                onPress={() => navigation.goBack()}>
                <Ionicons
                  style={backIcon}
                  name="ios-arrow-back"
                  size={responsiveFontSize(5)}
                  color={COLOR_PRIMARY}
                />
              </TouchableOpacity>

              <View style={hearto}>
                <TouchableOpacity style={favoriteIconView2}>
                  <AntDesign
                    name="hearto"
                    size={responsiveFontSize(3)}
                    color={COLOR_PRIMARY}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={shareIconView2}>
                  <Feather
                    style={shareIcon}
                    name="share-2"
                    size={responsiveFontSize(5)}
                    color={COLOR_PRIMARY}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}>
          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={ViewContainer}>
              <Text style={TextStyleTop}>{data.data.Post.Subject}</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('UserProfile')}
              style={ViewUserImage}>
              <Image
                source={{
                  uri: data.data.Post.User.Photo,
                }}
                style={imageUser}
              />
              <View style={userNameContainer}>
                <Text style={userName}>{data.data.Post.User.Name}</Text>
                <Entypo
                  name="star"
                  size={responsiveFontSize(2)}
                  color={COLOR_FAVOUR}
                  style={starIcon}
                />
                <Text style={ratingText}>{data.data.Post.User.Rating?data.data.Post.User.Rating:0}</Text>
              </View>
            </TouchableOpacity>
            <Text style={timeAgo}>Added {formatTime(data.data.Post.CreatedAt)} ago</Text>
            <View style={ViewforSpace}>
              <View style={ViewforSpace2} />
            </View>
            <Text style={aboutText}>About</Text>
            <Text style={detailExe}>{data.data.Post.Description}</Text>
            <Text style={locationText}>Location</Text>
            <View style={DirectionRow}>
              <Text style={locationNameText}>New Brooklin,UK</Text>
              <View
                style={{
                  alignSelf: 'flex-end',
                  flexDirection: 'row',
                  right: responsiveWidth(4),
                }}>
                <SimpleLineIcons
                  name="location-pin"
                  size={responsiveFontSize(1.5)}
                  color={TEXTINPUT_COLOR}
                  style={locationPin}
                />
                <Text style={distanceText}>
                  {location ?location : '0'}km
                </Text>
              </View>
            </View>
            <View style={ViewforSpace}>
              <View style={ViewforSpace2} />
            </View>

            <Text style={interactionText}>Interactions</Text>
            {data.data.Post.Comments.map(item => {
              {/* console.log("item",item) */}
              return (
                <View>
                  <View style={containerImage}>
                    <Image
                      source={{
                        uri:
                          'https://bootdey.com/img/Content/avatar/avatar7.png',
                      }}
                      style={imageStyle}
                    />
                    <Text style={[userName, {marginLeft: responsiveHeight(1)}]}>
                      {item.User.Name}
                    </Text>
                  </View>
                  <Text style={Comment}>{item.Text}</Text>
                </View>
              );
            })}
          </KeyboardAvoidingView>
        </ParallaxScrollView>
      )}
      <Modal
        animationType={'pokeman'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          toggleModal();
        }}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.1)'}}>
          <View style={modalContainerTop}>
            <View
              style={[ApplyButtonText, {marginVertical: responsiveHeight(2)}]}>
              <TouchableOpacity
                onPress={() => {
                  toggleModal(), navigation.navigate('UpdatePost', {id: id});
                  setload(false);
                }}
                style={{
                  borderColor: SECONDARY_COLOR,
                  borderRadius: responsiveHeight(3),
                  height: responsiveHeight(6.5),
                  borderWidth: 1,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: COLOR_PRIMARY,
                    fontSize: responsiveFontSize(2.3),
                    fontWeight: 'bold',
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                ApplyButtonText,
                {marginVertical: responsiveHeight(0.1)},
              ]}>
              <TouchableOpacity
                onPress={() => {
                  toggleModal(), navigation.navigate('ClosePost', {id: id});
                }}
                style={{
                  borderColor: SECONDARY_COLOR,
                  borderRadius: responsiveHeight(3),
                  height: responsiveHeight(6.5),
                  borderWidth: 1,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: COLOR_PRIMARY,
                    fontSize: responsiveFontSize(2.3),
                    fontWeight: 'bold',
                  }}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
