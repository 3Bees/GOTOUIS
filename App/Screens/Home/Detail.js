import React, {useState, useEffect} from 'react';
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
  TouchableHighlight,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
import {
  TopTextStyle,
  TopText,
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
  TextinputView,
  sendmsgImage,
  backIconView1,
  favoriteIconView1,
  shareIconView1,
  donateTextView1,
  imagePencil,
  containerDonation,
  hearto,
  favoriteIconView2,
  shareIconView2,
  backIconView2,
} from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {
  COLOR_PRIMARY,
  COLOR_DONATE,
  TEXT_COLOR,
  COLOR_FAVOUR,
  TEXTINPUT_COLOR,
  SECONDARY_COLOR,
  COLOR_SELL,
  COLOR_LOOKING_FOR,
} from '../../Resources/Color/Color';
import {ViewButtonContainer, textInputField, SendButton} from '../Chat/Style';
import ApiManager from '../../ApiManager/ApiManager';
import AsyncStorage from '@react-native-community/async-storage';
import * as geolib from 'geolib';

export const Detail = ({navigation}) => {
  const User = useSelector(state => ({...state.User}));
  const [comment, setComment] = useState('');
  const [focusState, setFocusState] = useState(false);
  const [id, setId] = useState(navigation.state.params.id);
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  const [load, setload] = useState(false);
  const [location, setLocation] = useState('');
  console.log('User', User.user._id);
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
        console.log("res>>>>>>>>>>>>",res)
        console.log("res.data.Post.Comments<<<<<<<<<<<<<<<",res.data.Post.Comments)
        let distance = geolib.getPreciseDistance(
          {latitude: lat, longitude: long},
          {
            latitude: res.data.Post.Location.Lat,
            longitude: res.data.Post.Location.Lon,
          },
        );
        setLocation(geolib.convertDistance(distance, 'km').toFixed(1));
        setData(res);
        setload(true);
      })
      .catch(err => {
        alert(err);
        setload(true);
      }),
      [id];
  };

  const CreateConversation = id => {
    console.log(id);
    new ApiManager()
      .CreateConversation(User.user._id, id)
      .then(res => {
        console.log('res', res);
        if (res.data) {
          navigation.navigate('Inbox', {
            id: res.data.CreateConversation._id,
            sender: User.user._id,
            receiver: id,
          });
        }
      })
      .catch(err => console.log(err));
  };

  const LikedPost = post => {
    console.log('Create', post);
    new ApiManager()
      .LikedPost(post)
      .then(res => {
        console.log(res.data.LikePost);
      })
      .catch(error => console.log(error));
  };

  const CommentPost = post => {
    new ApiManager()
      .postComment(post, comment)
      .then(resp => console.log(resp))
      .catch(error => console.log(error));
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
    <View style={Container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={'transparent'}
      />
      {console.log('data.data', data.data)}
      {data.data == undefined ? (
        <ActivityIndicator
          size={'large'}
          color={COLOR_PRIMARY}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        />
      ) : (
        <ParallaxScrollView
          backgroundColor="white"
          contentBackgroundColor="#ffffff"
          stickyHeaderHeight={responsiveHeight(8)}
          parallaxHeaderHeight={responsiveHeight(27)}
          renderForeground={() => (
            <ImageBackground
              source={{uri: data.data.Post.Picture}}
              resizeMode="stretch"
              style={backgroundImage}>
              <LinearGradient
                colors={['rgba(29, 33, 31, 0.0001)', 'rgba(29, 33, 31, 0.5)']}
                style={gradientStyle}
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
                  <TouchableOpacity style={favoriteIconView1}>
                    <AntDesign
                      name="hearto"
                      size={responsiveFontSize(3)}
                      color="#fff"
                      onPress={() => LikedPost(data.data.Post._id)}
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
              <TouchableHighlight
                style={backIconView2}
                onPress={() => navigation.goBack()}>
                <Ionicons
                  style={backIcon}
                  name="ios-arrow-back"
                  size={responsiveFontSize(5)}
                  color={COLOR_PRIMARY}
                />
              </TouchableHighlight>

              <View style={hearto}>
                <TouchableOpacity style={favoriteIconView2}>
                  <AntDesign
                    name="hearto"
                    size={responsiveFontSize(3)}
                    color={COLOR_PRIMARY}
                    onPress={() => LikedPost(data.data.Post._id)}
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
                {console.log('data.data.User', data.data.Post.Comments)}
              </View>
            </View>
          )}>
          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={ViewContainer}>
              <Text style={TextStyleTop}>{data.data.Post.Subject}</Text>
            </View>
            <TouchableOpacity
              style={ViewUserImage}
              onPress={() =>
                navigation.navigate('UserProfile', {
                  id: data.data.Post.User._id,
                })
              }>
              {data.data.Post.User.Photo ? (
                <Image
                  source={{
                    uri: data.data.Post.User.Photo,
                  }}
                  style={imageUser}
                />
              ) : (
                <Image
                  source={{
                    uri: 'https://bootdey.com/img/Content/avatar/avatar7.png',
                  }}
                  style={imageUser}
                />
              )}

              <View style={userNameContainer}>
                <Text style={userName}>{data.data.Post.User.Name}</Text>
                <Entypo
                  name="star"
                  size={responsiveFontSize(2)}
                  color={COLOR_FAVOUR}
                  style={starIcon}
                />
                <Text style={ratingText}>
                  {data.data.Post.User.Rating ? data.data.Post.User.Rating : 0}
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={timeAgo}>
              Added {formatTime(data.data.Post.CreatedAt)} ago
            </Text>
            <View style={ViewforSpace}>
              <View style={ViewforSpace2} />
            </View>
            <Text style={aboutText}>About</Text>
            <Text style={detailExe}>{data.data.Post.Description}</Text>
            <Text style={locationText}>Location</Text>
            <View style={DirectionRow}>
              <Text style={locationNameText} numberOfLines={1}>
                {name}
              </Text>
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
                <Text style={distanceText}>{location ? location : '0'}km</Text>
              </View>
            </View>
            <View style={ViewforSpace}>
              <View style={ViewforSpace2} />
            </View>
            <View style={{flexDirection: 'row', flex: 1}}>
              <Text style={interactionText}>Interactions</Text>
              <View
                style={{
                  width: responsiveWidth(55),
                }}
              />
              <TouchableOpacity
                style={{
                  height: responsiveHeight(8),
                  width: responsiveHeight(8),
                  borderRadius: responsiveHeight(8),
                  backgroundColor: COLOR_PRIMARY,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  CreateConversation(data.data.Post.User._id);
                }}>
                <Image source={require('../../Asset/Vector.png')} />
              </TouchableOpacity>
            </View>
            {data.data.Post.Comments.map((item,index )=> {
              console.log("item>>>>>>>>>>>>>>>>>>>>",item,index)
              return (
                <ScrollView>
                  <View style={containerImage}>
                    {console.log('item.User', item.User.Photo)}
                    {item.User.Photo ? (
                      <Image
                        source={{
                          uri: item.User.Photo,
                        }}
                        style={imageStyle}
                      />
                    ) : (
                      <Image
                        source={{
                          uri:
                            'https://bootdey.com/img/Content/avatar/avatar7.png',
                        }}
                        style={imageStyle}
                      />
                    )}
                    <Text style={[userName, {marginLeft: responsiveHeight(1)}]}>
                      {item.User.Name}
                    </Text>
                  </View>
                  <Text style={Comment}>{item.Text}{index}</Text>
                </ScrollView>
              );
            })}
          </KeyboardAvoidingView>
        </ParallaxScrollView>
      )}
      <View style={TextinputView}>
        <TextInput
          style={textInputField}
          placeholder="interact with jonas"
          value={comment}
          onChangeText={text => setComment(text)}
          onFocus={() => setFocusState(true)}
        />
        <TouchableOpacity
          onPress={() => {
            CommentPost(data.data.Post._id);
            setComment('');
            postData();
          }}
          style={sendmsgImage}>
          <Image
            style={sendmsgImage}
            source={require('../../Asset/circlesend.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
