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
} from '../../Resources/Color/Color';
import {ViewButtonContainer, textInputField, SendButton} from '../Chat/Style';
import ApiManager from '../../ApiManager/ApiManager';

export const Detail = ({navigation}) => {
  const User = useSelector(state => ({...state.User}));
  const [comment, setComment] = useState('');
  const [focusState, setFocusState] = useState(false);
  const [id, setId] = useState(navigation.state.params.id);
  const [data, setData] = useState({});
  console.log('User', User.user._id);
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
  const CreateConversation = id => {
    console.log(id);
    new ApiManager()
      .CreateConversation(User.user._id, id)
      .then(res => {
        console.log('res', res);
        if (res.data) {
          navigation.navigate('Inbox', {
            id: res.data.CreateConversation._id,
            sender:User.user._id,
            receiver:id,
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

  return (
    <View style={Container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={'transparent'}
      />{console.log("data.data",data.data)}
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
                    style={containerDonation}
                    onPress={() => navigation.navigate('EditDetails',{id:data.data.Post._id})}>
                    <Text style={StatusText}>
                      {data.data.Type == 0
                        ? 'Donation'
                        : data.data.Type == 1
                        ? 'Favour'
                        : 'Sell'}
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
                  {console.log('data.data.User', data.data.Post.User)}
                </View>
              </View>
            )}>
            <KeyboardAvoidingView behavior="padding" enabled>
              <View style={ViewContainer}>
                <Text style={TextStyleTop}>{data.data.Post.Description}</Text>
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
                    {data.data.Post.Distance ? data.data.Post.Distance : '0'}km
                  </Text>
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

              <View style={containerImage}>
                <Image
                  source={{
                    uri: 'https://bootdey.com/img/Content/avatar/avatar7.png',
                  }}
                  style={imageStyle}
                />
                <Text style={[userName, {marginLeft: responsiveHeight(1)}]}>
                  Jonas Smith
                </Text>
              </View>
              <Text style={Comment}>
                Does it contain gluten?i can't consume gluiten.:(
              </Text>
              <View style={containerImage}>
                <Image
                  source={{
                    uri: 'https://bootdey.com/img/Content/avatar/avatar7.png',
                  }}
                  style={imageStyle}
                />
                <Text style={[userName, {marginLeft: responsiveHeight(1)}]}>
                  Jonas Smith
                </Text>
              </View>
              <Text style={Comment}>No, it is gluiten free!</Text>
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
          onPress={() => CommentPost(data.data.Post._id)}
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
