import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  Dimensions,
  ScrollView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyTextField from '../../Common/Input/MyTextField';
import SocialButton from '../../Common/SocialButton/SocialButton';
import Button from '../../Common/Button/Button';
import ImagePicker from 'react-native-image-picker';
import {
  Container,
  Container2,
  TopTextStyle,
  TopText,
  ContainerInput,
  ButtonStyle,
  buttonView,
  ViewStyleImage,
} from './Style';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import SearchInput, {createFilter} from 'react-native-search-filter';
import {
  COLOR_PRIMARY,
  TEXTINPUT_COLOR,
  TEXT_COLOR,
  SECONDARY_COLOR,
  INITIAL_BUTTON,
} from '../../Resources/Color/Color';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  mylocationText,
  locationButtonViewTop,
  locationButtonView,
  btnImage,
  btnText,
} from '../Location/LocStyle';
import ApiManager from '../../ApiManager/ApiManager';
import RNFetchBlob from 'react-native-fetch-blob';
import ImageResizer from 'react-native-image-resizer';
import AsyncStorage from '@react-native-community/async-storage';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const KEYS_TO_FILTERS = ['display_name'];

export const UpdatePost = ({navigation}) => {
  const [rating, setrating] = useState(0);
  const [btnCOlor, setbtnColor] = useState(false);
  const [id, setId] = useState(navigation.state.params.id);
  const [daata, setDaata] = useState([]);
  const [data, setData] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [Picture, setPicture] = useState('');
  const [location, setLocation] = useState('');
  const [image, setimage] = useState('');
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');

  const handleChoosePhoto = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        setimage(response['uri']);
        console.log('image', response['uri']);
        ImageResizer.createResizedImage(
          response['uri'],
          Dimensions.get('window').width,
          Dimensions.get('window').height / 3,
          'JPEG',
          50,
        ).then(resizedImage => {
          console.log('i m resized', resizedImage);
          RNFetchBlob.fs
            .readFile(resizedImage.uri, 'base64')
            .then(res => setPicture(res));
        });
      }
    });
  };
  const UpdatePost = async () => {
    let lat = await AsyncStorage.getItem('lat');
    let long = await AsyncStorage.getItem('lon');
    console.log('title,description', data.data.Post.Type, data.data.Post.Price);
    new ApiManager()
      .editPost(
        data.data.Post._id,
        title ? title : data.data.Post.Subject,
        description ? description : data.data.Post.Description,
        `${data.data.Post.Type}`,
        lat,
        long,
        `${data.data.Post.Price}`,
        Picture ? Picture : data.data.Post.Picture,
      )
      .then(res => {
        console.log(res);
        if (res) {
          navigation.navigate('EditDetails', {id: data.data.Post._id});
        }
      })
      .cateh(err => console.log(err));
  };
  useEffect(() => {
    if (data.data == undefined) {
      new ApiManager()
        .getPostbyId(id)
        .then(async res => {
          let data = await AsyncStorage.getItem('name');
          setLocation(data);
          console.log('res>>>>>>>>>>>>>>', res);
          setData(res);
        })
        .catch(err => console.log(err));
    }
  });
  const saveData = async msgs => {
    await AsyncStorage.setItem(
      'name',
      `${msgs.address.suburb},${msgs.address.city},${msgs.address.country}`,
    );
    await AsyncStorage.setItem('lat', msgs.lat);
    await AsyncStorage.setItem('lon', msgs.lon);
  };

  const searchUpdated = text => {
    setSearch(text);
    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
    };

    fetch(
      `https://nominatim.openstreetmap.org/search?q=${text}&format=json&addressdetails=1`,
      requestOptions,
    )
      .then(response => response.text())
      .then(msgs => {
        console.log('datatatat', msgs);
        setDaata([JSON.parse(msgs)]);
      })
      .catch(error => console.log('error', error));
  };
  const Arr_Location = daata.filter(createFilter(search, KEYS_TO_FILTERS));

  //   console.log(btnCOlor);
  return (
    <View style={Container}>
      <SafeAreaView style={Container}>
        {data.data == undefined ? (
          <ActivityIndicator
            size={'small'}
            color={COLOR_PRIMARY}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          />
        ) : (
          <View style={Container2}>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="dark-content"
            />

            <TouchableOpacity
              style={TopTextStyle}
              onPress={() => navigation.goBack()}>
              <Ionicons
                style={TopText}
                name="ios-arrow-back"
                size={responsiveFontSize(3)}
                color={COLOR_PRIMARY}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: TEXT_COLOR,
                fontSize: responsiveFontSize(2.7),
                fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',

                marginHorizontal: responsiveWidth(4),
                marginTop: responsiveHeight(1),
              }}>
              Edit "{data.data ? data.data.Post.Subject : null}"?
            </Text>
            <Text
              style={{
                marginTop: responsiveHeight(1),
                marginLeft: responsiveHeight(2.2),
                fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
                color: '#76807C',
                fontSize: responsiveFontSize(1.8),
                marginVertical: responsiveHeight(0.5),
              }}>
              Title
            </Text>
            <View
              style={{
                borderBottomColor: '#D5D6D5',
                borderBottomWidth: 1,
                marginHorizontal: responsiveHeight(2.2),
              }}>
              <TextInput
                style={{
                  marginVertical: responsiveHeight(3),
                  fontFamily:
                    Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',

                  fontSize: responsiveFontSize(2.3),
                  marginVertical: responsiveHeight(0.5),
                }}
                placeholder={data.data ? data.data.Post.Subject : null}
                Value={title}
                onChangeText={title => setTitle(title)}
              />
            </View>
            <Text
              style={{
                marginLeft: responsiveHeight(2.2),
                fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
                marginTop: responsiveHeight(2),
                color: '#76807C',
                fontSize: responsiveFontSize(1.8),
                marginVertical: responsiveHeight(0.5),
              }}>
              About
            </Text>
            <TextInput
              style={{
                marginLeft: responsiveHeight(2.2),
                marginHorizontal: responsiveHeight(3),
                fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',

                fontSize: responsiveFontSize(2.3),
                marginVertical: responsiveHeight(0.5),
              }}
              placeholder={data.data ? data.data.Post.Description : null}
              numberOfLines={4}
              value={description}
              onChangeText={description =>
                setDescription(
                  description !== '' ? description : data.data.Post.Description,
                )
              }
              placeholderTextColor={'#000'}
            />
            <View
              style={{
                marginHorizontal: responsiveHeight(2.2),
              }}>
              <Text style={mylocationText}>Location</Text>
            </View>
            <View style={locationButtonViewTop}>
              <TouchableOpacity
                onPress={() => navigation.navigate('MainTab')}
                style={{
                  flexDirection: 'row',
                  alignSelf: 'stretch',
                  borderRadius: responsiveHeight(3),
                  height: responsiveHeight(6),
                  backgroundColor: 'white',
                  alignItems: 'center',
                }}>
                <Image
                  style={btnImage}
                  source={require('../../Asset/location.png')}
                />
                {!visible ? (
                  <View>
                    {search ? (
                      <TouchableOpacity onPress={() => setVisible(true)}>
                        <Text
                          numberOfLines={1}
                          style={{width: responsiveWidth(60)}}>
                          {search}
                        </Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={() => setVisible(true)}>
                        <Text
                          style={{width: responsiveWidth(70)}}
                          numberOfLines={1}>
                          {location ? location : 'Search Location'}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                ) : (
                  <SearchInput
                    onChangeText={term => {
                      searchUpdated(term);setVisible(true)
                    }}
                    placeholder={location ? location : 'Search Location'}
                    onFocus={() => setVisible(true)}
                  />
                )}
               
                <Text
                  style={{
                    color: COLOR_PRIMARY,
                    right: 10,
                    position: 'absolute',
                  }}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>
            {search.length > 0 && visible ? (
                  <ScrollView
                    style={{
                      height: '50%',
                      zIndex: 1,
                      top: responsiveHeight(57),
                      position: 'absolute',
                    }}>
                    {daata.length > 0
                      ? Arr_Location.map(item => {
                          console.log('item', item.display_name);
                          return item.map(item => {
                            return (
                              <TouchableOpacity
                                style={{
                                  padding: 20,
                                  backgroundColor: 'white',
                                  flexDirection: 'row',
                                  borderBottomColor: 'black',
                                  borderBottomWidth: 1,
                                }}
                                onPress={() => {
                                  saveData(item);
                                  setSearch(item.display_name);
                                  setVisible(false);
                                }}>
                                <SimpleLineIcons
                                  name="location-pin"
                                  size={responsiveFontSize(2.5)}
                                  color={COLOR_PRIMARY}
                                  style={{
                                    marginRight: responsiveWidth(4),
                                  }}
                                />
                                <Text>{item.display_name}</Text>
                              </TouchableOpacity>
                            );
                          });
                        })
                      : null}
                  </ScrollView>
                ) : null}
            <TouchableOpacity style={ViewStyleImage}>
              <ImageBackground
                style={[ViewStyleImage, {
                  // zIndex: 0
                  }]}
                source={{
                  uri: image
                    ? image
                    : data.data
                    ? data.data.Post.Picture
                    : null,
                }}>
                <View
                  style={{
                    height: responsiveHeight(6),
                    width: responsiveHeight(6),
                    borderRadius: responsiveHeight(6),
                    justifyContent: 'center',
                    alignItems: 'center',
                    // zIndex: 0,
                    backgroundColor: COLOR_PRIMARY,
                  }}>
                  {data.data ? (
                    !data.data.Post.Picture ? (
                      <Entypo
                        name="plus"
                        size={responsiveFontSize(2.5)}
                        color={'white'}
                        onPress={() => handleChoosePhoto()}
                      />
                    ) : (
                      <Entypo
                        name="minus"
                        size={responsiveFontSize(2.5)}
                        color={'white'}
                        onPress={() => handleChoosePhoto()}
                      />
                    )
                  ) : null}
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <View style={buttonView}>
              <Button checked pressme={() => UpdatePost()}>
                Update
              </Button>
            </View>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};
