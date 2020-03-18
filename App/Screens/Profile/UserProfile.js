import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import MyTextField from '../../Common/Input/MyTextField';
import SocialButton from '../../Common/SocialButton/SocialButton';
import Button from '../../Common/Button/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TopTextStyle, Container2} from '../SignUp/Style';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  COLOR_BACKGROUND,
  COLOR_PRIMARY,
  INITIAL_BUTTON,
  COLOR_FAVOUR,
  COLOR_DONATE,
  COLOR_SELL,
} from '../../Resources/Color/Color';
import {
  activeTabStyle,
  tabStyle,
  textstyl2,
  containerStyle,
  SettingView,
  StyleCenter,
  textstyl3,
  profileImage,
  Profilepics,
  userName,
  DirectionRow,
  RatingStarStyle,
  locationPinStyle,
  tabBarborderStyles,
  elev,
  colorHeader,
  locationTextStyle2,
  textstyl,
  locationPinStyle2,
  locationPinStyle3,
  directionCol,
  alignCenter,
  textActive,
  flatListTop,
  TopList,
  flexSix,
  itemText,
  textstyl1,
  imageFlatlistContainer,
  imageFlatlist,
  nameItem,
  flexfour,
  StatusFlatlist,
  statusText,
  gestureView,
  gestureText,
  Stylepin,
  StylePinContainer,
  locationTextStyle,
  imageFlatlist2,
  lookingTop,
  lookingName,
  gymText,
  ContainerLookingStyle,
  lookingForText,
  locConatiner,
  UserImageContainer,
  imagelookingStyle,
  usernameLook,
  starRatingViewlook,
} from './Style';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  TabHeading,
  ScrollableTab,
  Badge,
} from 'native-base';
import ApiManager from '../../ApiManager/ApiManager';
import AsyncStorage from '@react-native-community/async-storage';
import * as geolib from 'geolib';

export const UserProfile = ({navigation}) => {
  const [id, setId] = useState(navigation.state.params.id);
  const [userProfile, setuserProfile] = useState({});
  const [userPost, setuserPost] = useState({});
  const [lon, setLong] = useState('');
  const [lati, setLati] = useState('');
  const [load, setload] = useState(true);
  const [dataa, setData] = useState([]);

  const [dataaa, setDataa] = useState(false);
  const [loading, setLoading] = useState(true);
  const [do_data, setDoData] = useState([]);
  const [favour, setFavour] = useState([]);
  const [sell, setSell] = useState([]);
  const [lookingfor, setLookingFor] = useState([]);

  useEffect(() => {
    if (userPost.data == undefined) {
      Data();
    }
    const navFocusListener = navigation.addListener('didFocus', () => {
      // do some API calls here
      Data();
    });

    return () => {
      navFocusListener.remove();
    };
  }, []);
  const Data = async () => {
    let lat = await AsyncStorage.getItem('lat');
    let lng = await AsyncStorage.getItem('lon');
    let DonationPost = [];
    let FavourPost = [];

    let SellPost = [];
    let LookingForPost = [];
    setLati(lat);
    setLong(lng);
    if (load) {
      new ApiManager()
        .UserProfile(id)
        .then(res => {
          setuserProfile(res);
          setload(false);
        })
        .catch(error => {
          console.log(error);
          setload(false);
        });
      new ApiManager()
        .UserPost(id)
        .then(res => {
          setuserPost(res);
          res.data.UserPosts.map(item => {
            if (item.Type == 0) {
              DonationPost.push(item);
            } else if (item.Type == 1) {
              FavourPost.push(item);
            } else if (item.Type == 2) {
              SellPost.push(item);
            } else {
              LookingForPost.push(item);
            }
          });
          setSell(SellPost);
          setLookingFor(LookingForPost);
          setFavour(FavourPost);
          setDoData(DonationPost);

          console.log(res);
          setload(false);
        })
        .catch(error => {
          console.log(error);
          setload(false);
        });
    }
  };

  const calculateLoc = item => {
    let distance = geolib.getPreciseDistance(
      {latitude: lati, longitude: lon},
      {
        latitude: item.Lat,
        longitude: item.Lon,
      },
    );
    return geolib.convertDistance(distance, 'km').toFixed(1);
  };
  return (
    <View style={containerStyle}>
      <View style={containerStyle}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        {userProfile.data ? (
          <SafeAreaView style={containerStyle}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={SettingView}>
              <Ionicons
                name="ios-arrow-back"
                size={responsiveFontSize(3)}
                color={COLOR_PRIMARY}
              />
            </TouchableOpacity>
            <View style={StyleCenter}>
              <View style={profileImage}>
                {userProfile.data.Profile.Photo ? (
                  <Image
                    style={Profilepics}
                    source={{uri: userProfile.data.Profile.Photo}}
                  />
                ) : (
                  <Image
                    style={Profilepics}
                    source={require('../../Asset/Bitmap.png')}
                  />
                )}
              </View>
              <Text style={userName}>{userProfile.data.Profile.Name}</Text>
              <View style={DirectionRow}>
                {userProfile.data.Profile.Rating ? (
                  <View>
                    <Entypo
                      name="star"
                      size={responsiveFontSize(1.8)}
                      style={RatingStarStyle}
                      color={'#DE8D00'}
                    />
                    <Text style={textstyl}>
                      {userProfile.data.Profile.Rating}
                    </Text>
                  </View>
                ) : null}

                <SimpleLineIcons
                  name="location-pin"
                  size={responsiveFontSize(1.5)}
                  style={locationPinStyle}
                />
                <Text style={textstyl}>BH - Brazil</Text>
              </View>
              <Text style={textstyl1}>
                You shared {userPost.data ? userPost.data.UserPosts.length : 0}{' '}
                times on Goto
              </Text>
            </View>
            <Container>
              <Tabs
                tabBarUnderlineStyle={tabBarborderStyles}
                tabContainerStyle={elev}>
                <Tab
                  heading={
                    <TabHeading style={colorHeader}>
                      <View style={directionCol}>
                        <Text style={alignCenter}>
                          {userPost.data ? userPost.data.UserPosts.length : 0}
                        </Text>
                        <Text style={textstyl2}>Active</Text>
                      </View>
                    </TabHeading>
                  }
                  textStyle={{color: '#fff'}}
                  activeTextStyle={textActive}>
                  {userPost.data ? (
                    <FlatList
                      style={flatListTop}
                      data={userPost.data.UserPosts}
                      keyExtractor={item => item.id}
                      renderItem={(item, index) => {
                        console.log('item>>>>>>>>>', item);
                        return (
                          <TouchableOpacity
                            style={TopList}
                            onPress={() =>
                              navigation.navigate('Detail', {id: item.item._id})
                            }>
                            <View style={flexSix}>
                              <Text style={itemText}>
                                {item.item.Description}
                              </Text>
                              <View style={imageFlatlistContainer}>
                                <Image
                                  style={imageFlatlist}
                                  source={{uri: item.item.User.Photo}}
                                />
                                <Text style={nameItem}>
                                  {item.item.User.Name}
                                </Text>
                              </View>
                            </View>
                            <ImageBackground
                              source={{uri: item.item.Picture}}
                              style={flexfour}
                              imageStyle={{
                                borderBottomRightRadius: responsiveHeight(1),
                                borderTopRightRadius: responsiveHeight(1),
                              }}>
                              {item.item.Type == 0 ? (
                                <View>
                                  <View
                                    style={[
                                      StatusFlatlist,
                                      {backgroundColor: COLOR_DONATE},
                                    ]}>
                                    <Text style={statusText}>{'Donation'}</Text>
                                  </View>
                                  <View style={gestureView}>
                                    <MaterialCommunityIcons
                                      name="gesture-tap"
                                      color={COLOR_BACKGROUND}
                                      size={responsiveFontSize(2)}
                                      style={{bottom: responsiveHeight(0.2)}}
                                    />
                                    <Text style={gestureText}>
                                      {item.item.Likes.length}
                                    </Text>
                                    <View
                                      style={{
                                        top: responsiveHeight(0.3),
                                        flexDirection: 'row',
                                        left: responsiveWidth(1),
                                      }}>
                                      <SimpleLineIcons
                                        name="location-pin"
                                        size={responsiveFontSize(1.5)}
                                        color={'white'}
                                        style={Stylepin}
                                      />
                                      <Text style={locationTextStyle}>
                                        {calculateLoc(item.item.Location)} KM
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              ) : item.item.Type == 1 ? (
                                <View>
                                  <View
                                    style={[
                                      StatusFlatlist,
                                      {backgroundColor: COLOR_FAVOUR},
                                    ]}>
                                    <Text style={statusText}>{'Favour'}</Text>
                                  </View>
                                  <View style={StylePinContainer}>
                                    <SimpleLineIcons
                                      name="location-pin"
                                      size={responsiveFontSize(1.5)}
                                      color={'white'}
                                      style={Stylepin}
                                    />
                                    <Text style={locationTextStyle}>
                                      {calculateLoc(item.item.Location)} KM
                                    </Text>
                                  </View>
                                </View>
                              ) : (
                                <View>
                                  <View
                                    style={[
                                      StatusFlatlist,
                                      {backgroundColor: COLOR_SELL},
                                    ]}>
                                    <Text style={statusText}>
                                      {item.item.Price}$
                                    </Text>
                                  </View>
                                  <View style={gestureView}>
                                    <MaterialCommunityIcons
                                      name="gesture-tap"
                                      color={'white'}
                                      size={responsiveFontSize(2)}
                                      style={{bottom: responsiveHeight(0.3)}}
                                    />
                                    <Text
                                      style={[
                                        gestureText,
                                        {bottom: responsiveHeight(0.3)},
                                      ]}>
                                      {item.item.Likes.length}
                                    </Text>
                                    <SimpleLineIcons
                                      name="location-pin"
                                      size={responsiveFontSize(1.5)}
                                      color={'white'}
                                      style={[
                                        locationPinStyle3,
                                        {
                                          top: responsiveHeight(0.15),
                                          marginLeft: responsiveWidth(4),
                                        },
                                      ]}
                                    />
                                    <Text style={locationTextStyle}>
                                      {calculateLoc(item.item.Location)} KM
                                    </Text>
                                  </View>
                                </View>
                              )}
                            </ImageBackground>
                          </TouchableOpacity>
                        );
                      }}
                    />
                  ) : null}
                </Tab>
                <Tab
                  heading={
                    <TabHeading style={colorHeader}>
                      <View style={directionCol}>
                        <Text style={alignCenter}>
                          {do_data ? do_data.length : 0}
                        </Text>
                        <Text style={textstyl2}>Donations</Text>
                      </View>
                    </TabHeading>
                  }
                  textStyle={{color: '#fff'}}
                  activeTextStyle={textActive}>
                  {do_data ? (
                    <FlatList
                      style={flatListTop}
                      data={do_data}
                      keyExtractor={item => item.id}
                      renderItem={(item, index) => {
                        return (
                          <View>
                            <TouchableOpacity
                              style={TopList}
                              onPress={() =>
                                navigation.navigate('Detail', {
                                  id: item.item._id,
                                })
                              }>
                              <View style={flexSix}>
                                <Text style={itemText}>
                                  {item.item.Description}
                                </Text>
                                <View style={imageFlatlistContainer}>
                                  <Image
                                    style={imageFlatlist}
                                    source={{uri: item.item.User.Photo}}
                                  />
                                  <Text style={nameItem}>
                                    {item.item.User.Name}
                                  </Text>
                                </View>
                              </View>
                              <ImageBackground
                                source={{uri: item.item.Picture}}
                                style={flexfour}
                                imageStyle={{
                                  borderBottomRightRadius: responsiveHeight(1),
                                  borderTopRightRadius: responsiveHeight(1),
                                }}>
                                <View>
                                  <View
                                    style={[
                                      StatusFlatlist,
                                      {backgroundColor: COLOR_DONATE},
                                    ]}>
                                    <Text style={statusText}>{'Donation'}</Text>
                                  </View>
                                  <View style={gestureView}>
                                    <MaterialCommunityIcons
                                      name="gesture-tap"
                                      color={COLOR_BACKGROUND}
                                      size={responsiveFontSize(2)}
                                      style={{bottom: responsiveHeight(0.4)}}
                                    />
                                    <Text
                                      style={[
                                        gestureText,
                                        {bottom: responsiveHeight(0.4)},
                                      ]}>
                                      {item.item.Likes.length}
                                    </Text>
                                    <SimpleLineIcons
                                      name="location-pin"
                                      size={responsiveFontSize(1.5)}
                                      color={'white'}
                                      style={Stylepin}
                                    />
                                    <Text style={locationTextStyle}>
                                      {calculateLoc(item.item.Location)} KM
                                    </Text>
                                  </View>
                                </View>
                              </ImageBackground>
                            </TouchableOpacity>
                          </View>
                        );
                      }}
                    />
                  ) : null}
                </Tab>
                <Tab
                  heading={
                    <TabHeading style={colorHeader}>
                      <View style={directionCol}>
                        <Text style={alignCenter}>
                          {favour ? favour.length : 0}
                        </Text>
                        <Text style={textstyl2}>Favours</Text>
                      </View>
                    </TabHeading>
                  }
                  textStyle={{color: '#fff'}}
                  activeTextStyle={textActive}>
                  {favour ? (
                    <FlatList
                      style={flatListTop}
                      data={favour}
                      keyExtractor={item => item.id}
                      renderItem={(item, index) => {
                        console.log('item', item);
                        return (
                          <View>
                            <View style={{}}>
                              <View style={[TopList]}>
                                <View
                                  style={[
                                    flexSix,
                                    {backgroundColor: 'rgba(255,255,255,0.5)'},
                                  ]}>
                                  <Text
                                    style={[
                                      itemText,
                                      {color: 'rgba(0,0,0,0.5)'},
                                    ]}>
                                    {item.item.Description}
                                  </Text>
                                  <View style={imageFlatlistContainer}>
                                    <Image
                                      style={[imageFlatlist]}
                                      source={{uri: item.item.User.Photo}}
                                    />
                                    <Text
                                      style={[
                                        nameItem,
                                        {
                                          backgroundColor:
                                            'rgba(255,255,255,0.5)',
                                        },
                                      ]}>
                                      {item.item.User.Name}
                                    </Text>
                                  </View>
                                </View>
                                <ImageBackground
                                  source={{uri: item.item.Picture}}
                                  style={flexfour}>
                                  <View
                                    style={{
                                      flex: 1,
                                      backgroundColor: 'rgba(255,255,255,0.5)',
                                    }}>
                                    <View
                                      style={[
                                        StatusFlatlist,
                                        {backgroundColor: COLOR_FAVOUR},
                                      ]}>
                                      <Text style={statusText}>{'Favour'}</Text>
                                    </View>
                                    <View style={StylePinContainer}>
                                      <SimpleLineIcons
                                        name="location-pin"
                                        size={responsiveFontSize(1.5)}
                                        color={'white'}
                                        style={Stylepin}
                                      />
                                      <Text style={locationTextStyle}>
                                        {calculateLoc(item.item.Location)} KM
                                      </Text>
                                    </View>
                                  </View>
                                </ImageBackground>
                              </View>
                            </View>
                          </View>
                        );
                      }}
                    />
                  ) : null}
                </Tab>
                <Tab
                  heading={
                    <TabHeading style={colorHeader}>
                      <View style={directionCol}>
                        <Text style={alignCenter}>
                          {sell ? sell.length : 0}
                        </Text>
                        <Text style={textstyl2}>Sells</Text>
                      </View>
                    </TabHeading>
                  }
                  textStyle={{color: '#fff'}}
                  activeTextStyle={textActive}>
                  {sell ? (
                    <FlatList
                      style={flatListTop}
                      data={sell}
                      keyExtractor={item => item.id}
                      renderItem={(item, index) => {
                        return (
                          <View>
                            <View style={TopList}>
                              <View style={flexSix}>
                                <Text style={itemText}>
                                  {item.item.Description}
                                </Text>
                                <View style={imageFlatlistContainer}>
                                  <Image
                                    style={imageFlatlist}
                                    source={{uri: item.item.User.Photo}}
                                  />
                                  <Text style={nameItem}>
                                    {item.item.User.Name}
                                  </Text>
                                </View>
                              </View>
                              <ImageBackground
                                source={{uri: item.item.Picture}}
                                style={flexfour}>
                                <View>
                                  <View
                                    style={[
                                      StatusFlatlist,
                                      {backgroundColor: COLOR_SELL},
                                    ]}>
                                    <Text style={statusText}>
                                      {item.item.Price}
                                    </Text>
                                  </View>
                                  <View
                                    style={[
                                      gestureView,
                                      {marginLeft: responsiveWidth(4.2)},
                                    ]}>
                                    <MaterialCommunityIcons
                                      name="gesture-tap"
                                      color={'white'}
                                      size={responsiveFontSize(2)}
                                      style={{bottom: responsiveHeight(0.3)}}
                                    />
                                    <Text
                                      style={[
                                        gestureText,
                                        {bottom: responsiveHeight(0.3)},
                                      ]}>
                                      {item.item.Likes.length}
                                    </Text>
                                    <SimpleLineIcons
                                      name="location-pin"
                                      size={responsiveFontSize(1.5)}
                                      color={'white'}
                                      style={locationPinStyle}
                                    />
                                    <Text style={locationTextStyle}>
                                      {calculateLoc(item.item.Location)} KM
                                    </Text>
                                  </View>
                                </View>
                              </ImageBackground>
                            </View>
                          </View>
                        );
                      }}
                    />
                  ) : null}
                </Tab>
                <Tab
                  heading={
                    <TabHeading style={colorHeader}>
                      <View style={directionCol}>
                        <Text style={alignCenter}>
                          {lookingfor ? lookingfor.length : 0}
                        </Text>
                        <Text style={textstyl2}>Looking For</Text>
                      </View>
                    </TabHeading>
                  }
                  textStyle={{color: '#fff'}}
                  activeTextStyle={textActive}>
                  {lookingfor ? (
                    <FlatList
                      data={lookingfor}
                      keyExtractor={item => item.id}
                      renderItem={(item, index) => {
                        return (
                          <View style={{flex: 1, backgroundColor: '#fcfdfd'}}>
                            <View style={lookingTop}>
                              <View style={lookingName}>
                                <Text style={gymText}>{item.item.Subject}</Text>
                                <Text style={textstyl3}>
                                  {item.item.Description}
                                </Text>
                              </View>
                              <View style={ContainerLookingStyle}>
                                <Text style={lookingForText}>Looking For</Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  marginVertical: responsiveHeight(2),
                                }}>
                                <View style={{flexDirection: 'row'}}>
                                  <Image
                                    style={imageFlatlist2}
                                    source={{uri: item.item.User.Photo}}
                                  />
                                  <View>
                                    <Text style={nameItem}>
                                      {item.item.User.Name}
                                    </Text>{
                                      item.item.User.Rating?<View style={starRatingViewlook}>
                                      <Entypo
                                        name="star"
                                        size={responsiveFontSize(1.5)}
                                        color={'#DE8D00'}
                                      />
                                      <Text
                                        style={{
                                          fontSize: responsiveFontSize(1.5),
                                          bottom: 1,
                                        }}>
                                        {item.item.User.Rating}
                                      </Text>
                                    </View>:null
                                    }
                                    
                                  </View>
                                </View>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    right: responsiveWidth(3.8),
                                    bottom: responsiveHeight(0.75),
                                  }}>
                                  <SimpleLineIcons
                                    name="location-pin"
                                    size={responsiveFontSize(1.5)}
                                    color={'#76807C'}
                                    style={locationPinStyle2}
                                  />
                                  <Text style={locationTextStyle2}>
                                    {calculateLoc(item.item.Location)} KM
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </View>
                        );
                      }}
                    />
                  ) : null}
                </Tab>
              </Tabs>
            </Container>
          </SafeAreaView>
        ) : (
          <ActivityIndicator
            size={'large'}
            color={COLOR_PRIMARY}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          />
        )}
      </View>
    </View>
  );
};
