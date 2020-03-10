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
  Modal,
  ActivityIndicator
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
import {
  COLOR_PRIMARY,
  COLOR_DONATE,
  TEXT_COLOR,
  COLOR_FAVOUR,
  TEXTINPUT_COLOR,
  SECONDARY_COLOR,
} from '../../Resources/Color/Color';
import {ViewButtonContainer, textInputField, SendButton} from '../Chat/Style';

export const EditDetails = ({navigation}) => {
  const [comment, setComment] = useState('');
  const [focusState, setFocusState] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);

  const [id, setId] = useState(navigation.state.params.id);
  const [data, setData] = useState({});
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
  const toggleModal = () => {
    setmodalVisible(!modalVisible);
  };
  console.log(focusState);
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
                <TouchableOpacity style={containerDonation}>
                  <Text style={StatusText}>Donation</Text>
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
              <Text style={TextStyleTop}>{data.data.Post.Description}</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('UserProfile')}
              style={ViewUserImage}>
              <Image
                source={{
                  uri:data.data.Post.User.Photo
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
            <Text style={detailExe}>
              i'm giving away a delicious apple cake because i was given two and
              i will not eat both
            </Text>
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
                <Text style={distanceText}>{data.data.Post.Distance ? data.data.Post.Distance : '0'}km</Text>
              </View>
            </View>
            <View style={ViewforSpace}>
              <View style={ViewforSpace2} />
            </View>

            <Text style={interactionText}>Interactions</Text>

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
                  toggleModal(), navigation.navigate('UpdatePost',{id:id});
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
                  toggleModal(), navigation.navigate('ClosePost',{id:id});
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
