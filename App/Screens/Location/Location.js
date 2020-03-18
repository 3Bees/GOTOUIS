import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import SearchInput, {createFilter} from 'react-native-search-filter';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  Container,
  Container2,
  TopTextStyle,
  TopText,
  locationViewStyle,
  locationTextStyle,
  locationDesTextView,
  locationDesText,
  searchBarTop,
  searchbarView,
  crossView,
  mylocationText,
  locationButtonViewTop,
  locationButtonView,
  btnImage,
  btnText,
} from './LocStyle';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {COLOR_PRIMARY, TEXTINPUT_COLOR} from '../../Resources/Color/Color';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from '@react-native-community/geolocation';
const KEYS_TO_FILTERS = ['display_name'];
export const Location = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [id, setId] = useState('');
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [lat,setLat]=useState('')
  const [long,setLong]=useState('')
  const [location,setLocation]=useState('')
  const[locName,setLocname]=useState(false)

  useEffect(() => {
    setId(navigation.state.params.id);
    Place()
  });

  const Place =async() => {
    let loc=await AsyncStorage.getItem('name')
    

    let lat=await AsyncStorage.getItem('lat')
    let lng=await AsyncStorage.getItem('lon')
    setLocation(loc)
    // setSearch(text);
  
  };

  const saveData = async item => {
    console.log(item.lat,item.lon,item.display_name);
    await AsyncStorage.setItem('lat', item.lat);
    await AsyncStorage.setItem('lon', item.lon);
    await AsyncStorage.setItem('name', item.display_name);
  };

  const searchUpdated = text => {
    setSearch(text);
    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
    };

    fetch(
      `https://nominatim.openstreetmap.org/search?city=${text}&format=json`,
      requestOptions,
    )
      .then(response => response.text())
      .then(msgs => {
        console.log('datatatat', msgs);
        setData([JSON.parse(msgs)]);
      })
      .catch(error => console.log('error', error));
  };
  const Arr_Location = data.filter(createFilter(search, KEYS_TO_FILTERS));
  return (
    <View style={Container}>
      <View style={Container2}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <SafeAreaView style={Container}>
          <TouchableOpacity
            style={TopTextStyle}
            onPress={() => {
              id == '1' ? navigation.navigate('MainTab') : navigation.goBack();
            }}>
            <Ionicons
              style={TopText}
              name="ios-arrow-back"
              size={responsiveFontSize(3.3)}
              color={COLOR_PRIMARY}
            />
          </TouchableOpacity>
          <View style={locationViewStyle}>
            <Text style={locationTextStyle}>Location</Text>
          </View>
          <View style={locationDesTextView}>
            <Text style={locationDesText}>
              Your viewings are set from your location please set your Location.
            </Text>
          </View>
          <View style={searchBarTop}>
            <View style={searchbarView}>
              <Ionicons
                name="ios-search"
                style={{
                  marginHorizontal: responsiveWidth(3),
                }}
                size={responsiveFontSize(3)}
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
              {search ? (
                <TouchableOpacity
                  style={crossView}
                  onPress={() => setSearch('')}>
                  <Entypo
                    name="circle-with-cross"
                    size={responsiveFontSize(3)}
                    color={TEXTINPUT_COLOR}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
          {search.length > 0 && visible ? (
            <ScrollView
              style={{
                height: '50%',
                zIndex: 1,
                top: responsiveHeight(32),
                position: 'absolute',
              }}>
              {data.length > 0
                ? Arr_Location.map(item => {
                    console.log('item', item);
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
          <View>
            <Text style={mylocationText}>My Location</Text>
          </View>
          <View style={locationButtonViewTop}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MainTab')}
              style={locationButtonView}>
              <Image
                style={btnImage}
                source={require('../../Asset/location.png')}
              />
              <Text style={btnText} numberOfLines={1}>
                {search ? <Text>{search}</Text> :location?location: 'BH-Brazil'}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};
