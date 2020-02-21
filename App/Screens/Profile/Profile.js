import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';

import MyTextField from '../../Common/Input/MyTextField';
import SocialButton from '../../Common/SocialButton/SocialButton';
import Button from '../../Common/Button/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TopTextStyle, Container2 } from '../SignUp/Style';
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
  SettingView1,
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

export const Profile = ({ navigation }) => {
  let data = [
    {
      id: 3,
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      name: 'March SoulLaComa',
      text: 'Apple cake made by Mom',
      status: 'Donation',
      itemImage: require('../../Asset/cake.png'),
    },
    {
      id: 2,
      name: 'John DoeLink',
      text: 'Help me to change my wardobe',
      status: 'Favour',
      itemImage: require('../../Asset/wardrobe.png'),
    },
    {
      id: 3,
      name: 'John DoeLink',
      text: 'Want to sell my favorite Guitar',
      status: 'Sell',
      itemImage: require('../../Asset/guiter.png'),
    },
  ];
  let data2 = [
    {
      id: 1,
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      name: 'March SoulLaComa',
      text: 'Apple cake made by Mom',
      status: 'Donation',
      itemImage: require('../../Asset/cake.png'),
    },
    {
      id: 2,
      name: 'John DoeLink',
      text: 'Help me to change my wardobe',
      status: 'Favour',
      itemImage: require('../../Asset/wardrobe.png'),
    },
    {
      id: 3,
      name: 'John Link',
      text: 'Help me to change my wardobe',
      status: 'Favour',
      itemImage: require('../../Asset/wardrobe.png'),
    },
    {
      id: 4,
      name: 'Doe Link',
      text: 'Help me to change my wardobe',
      status: 'Favour',
      itemImage: require('../../Asset/wardrobe.png'),
    },
    {
      id: 5,
      name: 'Johnny yo Link',
      text: 'Help me to change my wardobe',
      status: 'Favour',
      itemImage: require('../../Asset/wardrobe.png'),
    },
    {
      id: 6,
      name: 'John Do',
      text: 'Help me to change my wardobe',
      status: 'Favour',
      itemImage: require('../../Asset/wardrobe.png'),
    },
    {
      id: 7,
      name: 'Link',
      text: 'Help me to change my wardobe',
      status: 'Favour',
      itemImage: require('../../Asset/wardrobe.png'),
    },
    {
      id: 8,
      name: 'John',
      text: 'Help me to change my wardobe',
      status: 'Favour',
      itemImage: require('../../Asset/wardrobe.png'),
    },
    {
      id: 9,
      name: 'Jo eLink',
      text: 'Help me to change my wardobe',
      status: 'Favour',
      itemImage: require('../../Asset/wardrobe.png'),
    },
  ];
  return (
    <View style={containerStyle}>
      <View style={containerStyle}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <SafeAreaView style={containerStyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateProfile')}
            style={SettingView1}>
            <AntDesign
              name="setting"
              size={responsiveFontSize(2.8)}
              color={COLOR_PRIMARY}
            />
          </TouchableOpacity>
          <View style={StyleCenter}>
            <View style={profileImage}>
              <Image
                style={Profilepics}
                source={require('../../Asset/Bitmap.png')}
              />
            </View>
            <Text style={userName}>Jonas Smith</Text>
            <View style={DirectionRow}>
              <Entypo
                name="star"
                size={responsiveFontSize(1.8)}
                style={RatingStarStyle}
                color={'#DE8D00'}
              />
              <Text style={textstyl}>3.4</Text>
              <SimpleLineIcons
                name="location-pin"
                size={responsiveFontSize(1.5)}
                style={[locationPinStyle]}
              />
              <Text style={textstyl}>BH - Brazil</Text>
            </View>
            <Text style={textstyl1}>You shared 13 times on Goto</Text>
          </View>
          <Container>
            <Tabs
              tabBarUnderlineStyle={tabBarborderStyles}
              tabContainerStyle={elev}>
              <Tab
                heading={
                  <TabHeading style={colorHeader}>
                    <View style={directionCol}>
                      <Text style={alignCenter}>3</Text>
                      <Text style={textstyl2}>Active</Text>
                    </View>
                  </TabHeading>
                }
                textStyle={{ color: '#fff' }}
                activeTextStyle={textActive}>
                <FlatList
                  style={flatListTop}
                  data={data}
                  keyExtractor={item => item.id}
                  renderItem={(item, index) => {
                    return (
                      <TouchableOpacity
                        style={TopList}
                        onPress={() => navigation.navigate('EditDetails')}>
                        <View style={flexSix}>
                          <Text style={itemText}>{item.item.text}</Text>
                          <View style={imageFlatlistContainer}>
                            <Image
                              style={imageFlatlist}
                              source={{ uri: item.item.image }}
                            />
                            <Text style={nameItem}>{item.item.name}</Text>
                          </View>
                        </View>
                        <ImageBackground
                          source={item.item.itemImage}
                          style={flexfour}
                          imageStyle={{
                            borderBottomRightRadius: responsiveHeight(1),
                            borderTopRightRadius: responsiveHeight(1),
                          }}>
                          {item.item.status == 'Donation' ? (
                            <View >
                              <View
                                style={[
                                  StatusFlatlist,
                                  { backgroundColor: COLOR_DONATE },
                                ]}>
                                <Text style={statusText}>
                                  {item.item.status}
                                </Text>
                              </View>
                              <View style={gestureView}>
                                <MaterialCommunityIcons
                                  name="gesture-tap"
                                  color={COLOR_BACKGROUND}
                                  size={responsiveFontSize(2)}
                                  style={{bottom:responsiveHeight(0.2)}}
                                />
                                <Text style={gestureText}>3</Text>
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
                                  <Text style={locationTextStyle}>1.3 KM</Text>
                                </View>
                              </View>
                            </View>
                          ) : item.item.status == 'Favour' ? (
                            <View>
                              <View
                                style={[
                                  StatusFlatlist,
                                  { backgroundColor: COLOR_FAVOUR },
                                ]}>
                                <Text style={statusText}>
                                  {item.item.status}
                                </Text>
                              </View>
                              <View style={StylePinContainer}>
                                <SimpleLineIcons
                                  name="location-pin"
                                  size={responsiveFontSize(1.5)}
                                  color={'white'}
                                  style={Stylepin}
                                />
                                <Text style={locationTextStyle}>1.3 KM</Text>
                              </View>
                            </View>
                          ) : (
                                <View>
                                  <View
                                    style={[
                                      StatusFlatlist,
                                      { backgroundColor: COLOR_SELL },
                                    ]}>
                                    <Text style={statusText}>
                                      {item.item.status}
                                    </Text>
                                  </View>
                                  <View style={gestureView}>
                                    <MaterialCommunityIcons
                                      name="gesture-tap"
                                      color={'white'}
                                      size={responsiveFontSize(2)}
                                      style={{bottom:responsiveHeight(0.3)}}
                                      
                                    />
                                    <Text style={[gestureText,{bottom:responsiveHeight(0.3)}]}>3</Text>
                                    <SimpleLineIcons
                                      name="location-pin"
                                      size={responsiveFontSize(1.5)}
                                      color={'white'}
                                      style={[locationPinStyle3,{top:responsiveHeight(0.15),marginLeft:responsiveWidth(4)}]}
                                    />
                                    <Text style={locationTextStyle}>1.3 KM</Text>
                                  </View>
                                </View>
                              )}
                        </ImageBackground>
                      </TouchableOpacity>
                    );
                  }}
                />
              </Tab>
              <Tab
                heading={
                  <TabHeading style={colorHeader}>
                    <View style={directionCol}>
                      <Text style={alignCenter}>1</Text>
                      <Text style={textstyl2}>Donations</Text>
                    </View>
                  </TabHeading>
                }
                textStyle={{ color: '#fff' }}
                activeTextStyle={textActive}>
                <FlatList
                  style={flatListTop}
                  data={data2}
                  keyExtractor={item => item.id}
                  renderItem={(item, index) => {
                    return (
                      <View>{
                        item.item.status == 'Donation' ?

                          <TouchableOpacity
                            style={TopList}
                            onPress={() => navigation.navigate('EditDetails')}>
                            <View style={flexSix}>
                              <Text style={itemText}>{item.item.text}</Text>
                              <View style={imageFlatlistContainer}>
                                <Image
                                  style={imageFlatlist}
                                  source={{ uri: item.item.image }}
                                />
                                <Text style={nameItem}>{item.item.name}</Text>
                              </View>
                            </View>
                            <ImageBackground
                              source={item.item.itemImage}
                              style={flexfour}
                              imageStyle={{
                                borderBottomRightRadius: responsiveHeight(1),
                                borderTopRightRadius: responsiveHeight(1),
                              }}
                              >
                              {item.item.status == 'Donation' ? (
                                <View >
                                  <View
                                    style={[
                                      StatusFlatlist,
                                      { backgroundColor: COLOR_DONATE },
                                    ]}>
                                    <Text style={statusText}>
                                      {item.item.status}
                                    </Text>
                                  </View>
                                  <View style={gestureView}>
                                    <MaterialCommunityIcons
                                      name="gesture-tap"
                                      color={COLOR_BACKGROUND}
                                      size={responsiveFontSize(2)}
                                      style={{bottom:responsiveHeight(0.4)}}
                                    />
                                    <Text style={[gestureText,{bottom:responsiveHeight(0.4)}]}>3</Text>
                                    <SimpleLineIcons
                                      name="location-pin"
                                      size={responsiveFontSize(1.5)}
                                      color={'white'}
                                      style={Stylepin}
                                    />
                                    <Text style={locationTextStyle}>1.3 KM</Text>
                                  </View>
                                </View>
                              ) : item.item.status == 'Favour' ? (
                                <View>
                                  <View
                                    style={[
                                      StatusFlatlist,
                                      { backgroundColor: COLOR_FAVOUR },
                                    ]}>
                                    <Text style={statusText}>
                                      {item.item.status}
                                    </Text>
                                  </View>
                                  <View style={StylePinContainer}>
                                    <SimpleLineIcons
                                      name="location-pin"
                                      size={responsiveFontSize(1.5)}
                                      color={'white'}
                                      style={Stylepin}
                                    />
                                    <Text style={locationTextStyle}>1.3 KM</Text>
                                  </View>
                                </View>
                              ) : (
                                    <View>
                                      <View
                                        style={[
                                          StatusFlatlist,
                                          { backgroundColor: COLOR_SELL },
                                        ]}>
                                        <Text style={statusText}>
                                          {item.item.status}
                                        </Text>
                                      </View>
                                      <View style={gestureView}>
                                        <MaterialCommunityIcons
                                          name="gesture-tap"
                                          color={'white'}
                                          size={responsiveFontSize(2)}
                                        />
                                        <Text style={gestureText}>3</Text>
                                        <SimpleLineIcons
                                          name="location-pin"
                                          size={responsiveFontSize(1.5)}
                                          color={'white'}
                                          style={locationPinStyle}
                                        />
                                        <Text style={locationTextStyle}>1.3 KM</Text>
                                      </View>
                                    </View>
                                  )}
                            </ImageBackground>
                          </TouchableOpacity>
                          : null}
                      </View>);
                  }}
                />
              </Tab>
              <Tab
                heading={
                  <TabHeading style={colorHeader}>
                    <View style={directionCol}>
                      <Text style={alignCenter}>1</Text>
                      <Text style={textstyl2}>Favours</Text>
                    </View>
                  </TabHeading>
                }
                textStyle={{ color: '#fff' }}
                activeTextStyle={textActive}>
                <FlatList
                  style={flatListTop}
                  data={data}
                  keyExtractor={item => item.id}
                  renderItem={(item, index) => {
                    return (
                      <View>{
                        item.item.status == 'Favour' ?
                          <View style={{  }}>
                            <View
                              style={[TopList]}>
                              <View style={[flexSix,{backgroundColor: 'rgba(255,255,255,0.5)'}]}>
                                <Text style={[itemText,{color:'rgba(0,0,0,0.5)'}]}>{item.item.text}</Text>
                                <View style={imageFlatlistContainer}>
                                  <Image
                                    style={[imageFlatlist]}
                                    source={{ uri: item.item.image }}
                                  />
                                  <Text style={[nameItem,{backgroundColor: 'rgba(255,255,255,0.5)'}]}>{item.item.name}</Text>
                                </View>
                              </View>
                              <ImageBackground
                                source={item.item.itemImage}
                                style={flexfour}>
                                {item.item.status == 'Favour' ? (
                                  <View style={{flex:1 ,backgroundColor: 'rgba(255,255,255,0.5)' }}>
                                    <View
                                      style={[
                                        StatusFlatlist,
                                        { backgroundColor: COLOR_FAVOUR },
                                      ]}>
                                      <Text style={statusText}>
                                        {item.item.status}
                                      </Text>
                                    </View>
                                    <View style={StylePinContainer}>
                                      <SimpleLineIcons
                                        name="location-pin"
                                        size={responsiveFontSize(1.5)}
                                        color={'white'}
                                        style={Stylepin}
                                      />
                                      <Text style={locationTextStyle}>1.3 KM</Text>
                                    </View>
                                  </View>
                                ) : null}
                              </ImageBackground>
                            </View>
                          </View>
                          : null}
                      </View>);
                  }} />
              </Tab>
              <Tab
                heading={
                  <TabHeading style={colorHeader}>
                    <View style={directionCol}>
                      <Text style={alignCenter}>1</Text>
                      <Text style={textstyl2}>Sells</Text>
                    </View>
                  </TabHeading>
                }
                textStyle={{ color: '#fff' }}
                activeTextStyle={textActive}>
                <FlatList
                  style={flatListTop}
                  data={data}
                  keyExtractor={item => item.id}
                  renderItem={(item, index) => {
                    return (
                      <View>
                        {item.item.status == 'Sell' ?
                          <View style={TopList}>
                            <View style={flexSix}>
                              <Text style={itemText}>{item.item.text}</Text>
                              <View style={imageFlatlistContainer}>
                                <Image
                                  style={imageFlatlist}
                                  source={{ uri: item.item.image }}
                                />
                                <Text style={nameItem}>{item.item.name}</Text>
                              </View>
                            </View>
                            <ImageBackground
                              source={item.item.itemImage}
                              style={flexfour}>
                              <View>
                                <View
                                  style={[
                                    StatusFlatlist,
                                    { backgroundColor: COLOR_SELL },
                                  ]}>
                                  <Text style={statusText}>{item.item.status}</Text>
                                </View>
                                <View style={[gestureView,{marginLeft:responsiveWidth(4.2)}]}>
                                  <MaterialCommunityIcons
                                    name="gesture-tap"
                                    color={'white'}
                                    size={responsiveFontSize(2)}
                                    style={{bottom:responsiveHeight(0.3)}}
                                  />
                                  <Text style={[gestureText,{bottom:responsiveHeight(0.3)}]}>3</Text>
                                  <SimpleLineIcons
                                    name="location-pin"
                                    size={responsiveFontSize(1.5)}
                                    color={'white'}
                                    style={locationPinStyle}
                                  />
                                  <Text style={locationTextStyle}>1.3 KM</Text>
                                </View>
                              </View>

                            </ImageBackground>
                          </View>
                          : null}
                      </View>
                    );
                  }}
                />
              </Tab>
              <Tab
                heading={
                  <TabHeading style={colorHeader}>
                    <View style={directionCol}>
                      <Text style={alignCenter}>1</Text>
                      <Text style={textstyl2}>Looking For</Text>
                    </View>
                  </TabHeading>
                }
                textStyle={{ color: '#fff' }}
                activeTextStyle={textActive}>
                <View style={{ flex: 1, backgroundColor: '#fcfdfd' }}>
                  <View style={lookingTop}>
                    <View style={lookingName}>
                      <Text style={gymText}>Gymmate</Text>
                      <Text style={textstyl3}>
                        Looking for a mate to workout togather
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
                      <View style={{ flexDirection: 'row' }}>
                        <Image style={imageFlatlist2} />
                        <View>
                          <Text style={nameItem}>Jequeline Robinson</Text>
                          <View style={starRatingViewlook}>
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
                              3.4
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          right: responsiveWidth(3.8),
                          bottom:responsiveHeight(0.75)
                        }}>
                        <SimpleLineIcons
                          name="location-pin"
                          size={responsiveFontSize(1.5)}
                          color={'#76807C'}
                          style={locationPinStyle2}
                        />
                        <Text style={locationTextStyle2}>1.3 KM</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Tab>
            </Tabs>
          </Container>
        </SafeAreaView>
      </View>
    </View>
  );
};
