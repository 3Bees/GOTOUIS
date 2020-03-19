import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyTextField from '../../Common/Input/MyTextField';
import SocialButton from '../../Common/SocialButton/SocialButton';
import Button from '../../Common/Button/Button';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {
  Container,
  Container2,
  TopTextStyle,
  TopText,
  ContainerInput,
  ButtonStyle,
  TopView3,
  DonateViewTop,
  TextStyleDo,
  ViewStyleImage,
  buttonView,
  SearchIcons,
  SearchBarContainerView,
  SearchBarStyle,
  locationText,
  ViewContainer,
  TextInputStyle,
} from './Style';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ImageResizer from 'react-native-image-resizer';
import RNFetchBlob from 'react-native-fetch-blob';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker';
import ApiManager from '../../ApiManager/ApiManager';
import {
  COLOR_PRIMARY,
  TEXTINPUT_COLOR,
  TEXT_COLOR,
  SECONDARY_COLOR,
  INITIAL_BUTTON,
} from '../../Resources/Color/Color';
import Entypo from 'react-native-vector-icons/Entypo';
import {ForgetPasswordView, ForgetPasswordText} from './Style';
import {Rating, AirbnbRating} from 'react-native-ratings';
import SearchInput, {createFilter} from 'react-native-search-filter';
import AsyncStorage from '@react-native-community/async-storage';



const KEYS_TO_FILTERS = ['display_name'];
export const Selling = ({navigation}) => {
  const [rating, setrating] = useState(0);
  const [btnCOlor, setbtnColor] = useState(false);
  const [title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLoction] = useState('');
  const [Picture, setPicture] = useState('');
  const [search, setSearch] = useState('');
  const [id, setId] = useState('');
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const[image,setImage]=useState('')


  useEffect(()=>{
    if(!location){
      locat()
    }
  })

  const locat=async()=>{
    let data=await AsyncStorage.getItem('name')
    setLoction(data)
  }

  const saveData = async item => {
    setLat(item.lat);
    setLng(item.lon);
    await AsyncStorage.setItem('lat', item.lat);
    await AsyncStorage.setItem('lon', item.lon);
    await AsyncStorage.setItem('name', item.address.town,+item.address.state,+item.address.country)
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
        setData([JSON.parse(msgs)]);
      })
      .catch(error => alert('error', error));
  };

  const check = async() => {
    console.log('i m here');
    let lat = await AsyncStorage.getItem('lat');
    let lng = await AsyncStorage.getItem('lon');
    let Descriptin = Description.replace(/[\r\n]+/g, ' ') + '';
    let datar = Descriptin.toString();
    let ttl = title.replace(/[\r\n]+/g, ' ') + '';
    if(Picture){
    new ApiManager()
      .createPostPrice(ttl, datar, price, lat,lng, Picture, '2')
      .then(res => {
        if (res) {
          navigation.navigate("Home");
        }
        console.log(res);
      })
      .catch(err => alert(err));}
      else{
        
    new ApiManager()
    .createPostPrice2(ttl, datar, price, lat,lng, Picture, '2')
    .then(res => {
      if (res) {
        navigation.navigate("Home");
      }
      console.log(res);
    })
    .catch(err => alert(err));
      }
  };

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
        setImage(response.uri)
        console.log('image');
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
  const Arr_Location = data.filter(createFilter(search, KEYS_TO_FILTERS));
  return (
    <ScrollView style={Container}>
      <KeyboardAvoidingView behavior="padding" enabled>
        <SafeAreaView style={Container}>
          <View style={Container2}>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="dark-content"
            />

            <TouchableOpacity
              style={[TopTextStyle]}
              onPress={() => navigation.goBack()}>
              <Ionicons
                style={TopText}
                name="ios-arrow-back"
                size={responsiveFontSize(5)}
                color={COLOR_PRIMARY}
              />
            </TouchableOpacity>
            <View style={DonateViewTop}>
              <View
                style={[TopView3, {backgroundColor: 'rgba(200, 0, 26, 0.1)'}]}>
                <AntDesign
                  name="pay-circle-o1"
                  size={responsiveFontSize(3)}
                  color={'#C8001A'}
                />
              </View>
              <Text
                style={[
                  TextStyleDo,
                  {
                    color: TEXT_COLOR,
                    marginLeft: responsiveHeight(2),
                  },
                ]}>
                Sale
              </Text>
            </View>

            <View style={[TextInputStyle, {padding: -10}]}>
              <MyTextField
                label="Title"
                value={title}
                onChangeText={text => {
                  setTitle(text);
                }}
                autoCapitalize={'sentances'}
                multiline
                numberOfLines={4}
              />
              <MyTextField
              numberOfLines={4}
              autoCapitalize={'sentances'}
                multiline
                label="about"
                value={Description}
                onChangeText={text => {
                  setDescription(text);
                }}
              />
              <MyTextField
              keyboardType={'numeric'}
                label="Price"
                value={price}
                onChangeText={text => setPrice(text)}
              />
            </View>
            <View style={ViewContainer}>
              <Text style={locationText}>My Location</Text>
            </View>
            <View style={SearchBarStyle}>
              <View style={SearchBarContainerView}>
                <Ionicons
                  name="ios-search"
                  style={SearchIcons}
                  size={responsiveFontSize(4)}
                  color={COLOR_PRIMARY}
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
                        <Text style={{width:responsiveWidth(70)}} numberOfLines={1}>{location?location:'Search Location'}</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                ) : (
                  <SearchInput
                    onChangeText={term => {
                      searchUpdated(term);
                    }}
                    placeholder={location?location:"Search Location"}
                    onFocus={() => setVisible(true)}
                  />
                )}
            </View>
            
            </View>
            {search.length > 0 && visible ? (
              <ScrollView
                style={{
                  height: '40%',
                  zIndex: 1,
                  top: responsiveHeight(57),
                  position: 'absolute',
                  backgroundColor: 'red',
                  marginHorizontal:responsiveWidth(6)
                }}>
                {data.length > 0
                  ? Arr_Location.map(item => {
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
            </View>
            <TouchableOpacity
              onPress={() => handleChoosePhoto()}
              style={ViewStyleImage}>
              {image ? (
                <Image source={{uri: image}} style={{height:responsiveHeight(14),width:responsiveWidth(28)}}/>
              ) : (
                <FontAwesome5
                  name="image"
                  size={responsiveFontSize(3)}
                  color={COLOR_PRIMARY}
                />
              )}
            </TouchableOpacity>
            <View style={buttonView}>
              <Button checked pressme={() => check()}>
                Post
              </Button>
            </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
