import React, {useState,useEffect} from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  Container,
  Container2,
  TopTextStyle,
  TopText,
  ContainerInput,
  ButtonStyle,
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
} from 'react-native-responsive-dimensions';
import {COLOR_PRIMARY, TEXTINPUT_COLOR} from '../../Resources/Color/Color';

export const Location = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [id,setId]=useState('')

  useEffect(() => {
    setId(navigation.state.params.id)
  });
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
              id == '1' 
                ? navigation.navigate('MainTab')
                : navigation.goBack();
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
              <TextInput
                placeholder="Search Location"
                value={search}
                onChangeText={text => setSearch(text)}
                style={{margin:0,padding:0,fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,width:'100%',fontSize:responsiveFontSize(2),color:'#76807C'}}
              />
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
              <Text style={btnText}>BH - Brazil</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};
