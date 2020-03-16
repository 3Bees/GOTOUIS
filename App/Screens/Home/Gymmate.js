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

export const Gymmate = ({navigation}) => {
  const User = useSelector(state => ({...state.User}));
  const [id, setId] = useState(navigation.state.params.id);
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  console.log('User', User.user._id);
  useEffect(() => {
    if (data.data == undefined) {
      new ApiManager()
        .getPostbyId(id)
        .then(async res => {
          let name = await AsyncStorage.getItem('name');
          setName(name);
          console.log('res', res);
          setData(res);
        })
        .catch(err => console.log(err));
    }
  });
  const postData = () => {
    new ApiManager()
      .getPostbyId(id)
      .then(async res => {
        let name = await AsyncStorage.getItem('name');
        setName(name);
        console.log('res', res);
        setData(res);
      })
      .catch(err => console.log(err));
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

  const [comment, setComment] = useState('');
  const [focusState, setFocusState] = useState(false);
  console.log(focusState);
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
                <TouchableOpacity style={favoriteIconView}>
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
                    <Text style={ratingText}>3.4</Text>
                  </View>
                </TouchableOpacity>
                <Text style={timeAgo}>Added an hour ago</Text>
                <View style={ViewforSpace}>
                  <View style={ViewforSpace2} />
                </View>
                <Text style={aboutText}>About</Text>
                <Text style={detailExe}>{data.data.Post.Description}</Text>
                <Text style={locationText}>Location</Text>
                <View style={DirectionRow}>
                  <Text style={locationNameText}>New Brooklin, UK</Text>
                  <SimpleLineIcons
                    name="location-pin"
                    size={responsiveFontSize(1.5)}
                    color={TEXTINPUT_COLOR}
                    style={locationPins3}
                  />
                  <Text style={distanceText}>
                    {data.data.Post.Distance ? data.data.Post.Distance : '0'} km
                  </Text>
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
