import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Container} from '../SignUp/Style';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import {
  TextinputView1,
  backIconView,
  backIcon,
  favoriteIconView,
  shareIconView,
  shareIcon,
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
  locationPins3,
  sendmsgImage,
} from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  COLOR_PRIMARY,
  COLOR_FAVOUR,
  TEXTINPUT_COLOR,
} from '../../Resources/Color/Color';
import {textInputField} from '../Chat/Style';
import {ScrollView} from 'react-native-gesture-handler';
import ApiManager from '../../ApiManager/ApiManager';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import * as geolib from 'geolib';


export const Gymmate = ({navigation}) => {
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
        let distance = geolib.getPreciseDistance(
          {latitude: lat, longitude: long},
          {
            latitude: res.data.Post.Location.Lat,
            longitude: res.data.Post.Location.Lon,
          },
        );
        setLocation(geolib.convertDistance(distance, 'km').toFixed(1));
        console.log('res', geolib.convertDistance(distance, 'km').toFixed(1));

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
    minute: 60 * 1000
  };
  
  const formatTime=(timeCreated)=> {
    var diff = Date.now() - timeCreated;
  
    if (diff > periods.month) {
      // it was at least a month ago
      return Math.floor(diff / periods.month) + " months";
    } else if (diff > periods.week) {
      return Math.floor(diff / periods.week) + " weeks";
    } else if (diff > periods.day) {
      return Math.floor(diff / periods.day) + " days";
    } else if (diff > periods.hour) {
      return Math.floor(diff / periods.hour) + " hours";
    } else if (diff > periods.minute) {
      return Math.floor(diff / periods.minute) + " minutes";
    }
    return "Just now";
  }

  return (
    <View style={Container}>
      <SafeAreaView style={Container}>
        <StatusBar barStyle="dark-content" />
        {data.data !== undefined ? (
          <View>
            <View
              style={{
                marginTop:
                  Platform.OS === 'android'
                    ? responsiveHeight(4)
                    : responsiveHeight(2),
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={backIconView}
                onPress={() => navigation.goBack()}>
                <Ionicons
                  style={backIcon}
                  name="ios-arrow-back"
                  size={responsiveFontSize(5)}
                  color={COLOR_PRIMARY}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  width: '15%',
                  marginLeft: responsiveWidth(80),
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity style={favoriteIconView} onPress={()=>LikedPost(data.data.Post._id)}>
                  <AntDesign
                    name="hearto"
                    size={responsiveFontSize(2.8)}
                    color={COLOR_PRIMARY}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={shareIconView}>
                  <Feather
                    name="share-2"
                    size={responsiveFontSize(2.8)}
                    color={COLOR_PRIMARY}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <KeyboardAvoidingView behavior="padding" enabled>
              <ScrollView>
                <View style={ViewContainer}>
                  <Text style={TextStyleTop}>{data.data.Post.Subject}</Text>
                </View>
                <TouchableOpacity
                  style={ViewUserImage}
                  onPress={() => navigation.navigate('UserProfile')}>
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
                <Text style={interactionText}>Interactions</Text>
                {data.data.Post.Comments.map(item => {
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
                        <Text
                          style={[userName, {marginLeft: responsiveHeight(1)}]}>
                          {item.User.Name}
                        </Text>
                      </View>
                      <Text style={Comment}>{item.Text}</Text>
                    </View>
                  );
                })}
                <View style={TextinputView1}>
                  <TextInput
                    style={textInputField}
                    placeholder="interact with jonas"
                    value={comment}
                    onChangeText={text => setComment(text)}
                    onFocus={() => setFocusState(true)}
                  />{
                    console.log(data.data.Post._id)
                  }
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
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        ) : null}
      </SafeAreaView>
    </View>
  );
};
