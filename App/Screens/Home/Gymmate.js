import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Container,} from '../SignUp/Style';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth
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
import { textInputField} from '../Chat/Style';
import { ScrollView } from 'react-native-gesture-handler';

export const Gymmate = ({navigation}) => {
  const [comment, setComment] = useState('');
  const [focusState, setFocusState] = useState(false);
  console.log(focusState);
  return (
    <View style={Container}>

      <SafeAreaView style={Container}>
        <StatusBar barStyle="dark-content" />
        <View style={{marginTop:Platform.OS === 'android' ?responsiveHeight(4):responsiveHeight(2),flexDirection:'row'}}>
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
          <View style={{flexDirection:'row',width:'15%',marginLeft:responsiveWidth(80),justifyContent:'space-between'}}>

          <TouchableOpacity
            style={favoriteIconView}
            >
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
        <KeyboardAvoidingView  behavior="padding" enabled>
        <ScrollView>
        <View style={ViewContainer}>
          <Text style={TextStyleTop}>Gymmate</Text>
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
        <Text style={detailExe}>Looking for a mate to work out togather</Text>
        <Text style={locationText}>Location</Text>
        <View style={DirectionRow}>
          <Text style={locationNameText}>New Brooklin, UK</Text>
          <SimpleLineIcons
            name="location-pin"
            size={responsiveFontSize(1.5)}
            color={TEXTINPUT_COLOR}
            style={locationPins3}
          />
          <Text style={distanceText}>1.3 km</Text>
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
          i'm working out to close to your home at Gym Body Everyday.
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
        <Text style={Comment}>Let go togather!</Text>
        <View style={TextinputView1}>
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
        </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
  
    </View>
  );
};
