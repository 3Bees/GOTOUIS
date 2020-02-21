import React, {useState} from 'react';
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
  TouchableHighlight
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
backIconView2
} from './Style';
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

export const Detail = ({navigation}) => {
  const [comment, setComment] = useState('');
  const [focusState, setFocusState] = useState(false);
  console.log(focusState);
  return (
    <View style={Container}>
        <StatusBar barStyle="light-content" translucent backgroundColor={'transparent'} />

        <ParallaxScrollView
          backgroundColor="white"
          contentBackgroundColor="#ffffff"
          
          stickyHeaderHeight={responsiveHeight(8)}
          parallaxHeaderHeight={responsiveHeight(27)}
          renderForeground={() => (
            <ImageBackground
              source={require('../../Asset/cake.png')}
              resizeMode="stretch"
              style={backgroundImage}>
              <LinearGradient
                colors={['rgba(29, 33, 31, 0.0001)', 'rgba(29, 33, 31, 0.5)']}
                style={gradientStyle}
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0}}>
          
              <TouchableOpacity style={donateTextView1} onPress={()=>navigation.goBack()}>
                  <Ionicons
                    style={backIcon}
                    name="ios-arrow-back"
                    size={responsiveFontSize(5)}
                    color="white"
                  />
               </TouchableOpacity>
               <View style={imagePencil}>
               <TouchableOpacity
                style={favoriteIconView1}>
                <AntDesign
                  name="hearto"
                  size={responsiveFontSize(3)}
                  color="#fff"
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
                  onPress={() => navigation.navigate('EditDetails')}>
                  <Text style={StatusText}>Donation</Text>
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
                <TouchableOpacity
                style={favoriteIconView2}
                >
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
              <Text style={TextStyleTop}>Apple cake made from my mom</Text>
            </View>
            <TouchableOpacity style={ViewUserImage} onPress={()=>navigation.navigate('UserProfile')}>
              <Image
                source={{
                  uri: 'https://bootdey.com/img/Content/avatar/avatar7.png',
                }}
                style={imageUser}
              />
              <View style={userNameContainer}>
                <Text style={userName}>Jonas Smith</Text>
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
              <View style={{alignSelf:'flex-end',flexDirection:'row',right:responsiveWidth(4)}}>
              <SimpleLineIcons
                name="location-pin"
                size={responsiveFontSize(1.5)}
                color={TEXTINPUT_COLOR}
                style={locationPin}
              />
              <Text style={distanceText}>1.3km</Text>
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
            <Text
              style={Comment}>
              Does it contain gluten?i can't consume gluiten.:(
            </Text>
            <View
              style={containerImage}>
              <Image
                source={{
                  uri: 'https://bootdey.com/img/Content/avatar/avatar7.png',
                }}
                style={imageStyle}
              />
              <Text
                style={[userName, {marginLeft: responsiveHeight(1)}]}>
                Jonas Smith
              </Text>
            </View>
            <Text
              style={Comment}>
              No, it is gluiten free!
            </Text>
          </KeyboardAvoidingView>
        </ParallaxScrollView>
        <View
          style={TextinputView}>
          <TextInput
            style={textInputField}
            placeholder="interact with jonas"
            value={comment}
            onChangeText={text => setComment(text)}
            onFocus={() => setFocusState(true)}
          />
          <Image
            style={sendmsgImage}
            source={require('../../Asset/circlesend.png')}
          />
        </View>
    
    </View>
  );
};