import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  TopText,
  TopTextStyle,
  TopView,
  TopView1,
  TopView2,
  TopView3,
  ViewFlex7,
  TextStyleDo,
  TextStyleDo1,
  StyleView,
  cardText,
} from './Style';
import {Container} from '../SignUp/Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const AddPost = ({navigation}) => {

  return (
    <View style={Container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={Container}>
        <View style={TopTextStyle}>
          <Text style={TopText}>Post</Text>
        </View>
        <ScrollView style={TopView}>
          <TouchableOpacity
            style={TopView1}
            onPress={() => navigation.navigate('PostingData')}>
            <View style={TopView2}>
              <View
                style={[
                  TopView3,
                  {
                    backgroundColor: 'rgba(0, 152, 155, 0.1)',
                    marginLeft: responsiveHeight(1),
                  },
                ]}>
                <Entypo
                  name="heart-outlined"
                  size={responsiveFontSize(3.3)}
                  color={'#00989B'}
                />
              </View>
            </View>
            <View style={ViewFlex7}>
              <Text style={[TextStyleDo1, {color: '#00989B'}]}>Donate</Text>
              <Text style={cardText}>
                Make a positive impect! Help empower people to fight 
                global problem of waste,poverty,pollution and climate change.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Favour')}
            style={StyleView}>
            <View style={TopView2}>
              <View
                style={[
                  TopView3,
                  {
                    backgroundColor: 'rgba(222, 141, 0, 0.1)',
                    marginLeft: responsiveHeight(1),
                  },
                ]}>
                <Entypo
                  name="star-outlined"
                  size={responsiveFontSize(3.3)}
                  color={'#DE8D00'}
                />
              </View>
            </View>
            <View style={ViewFlex7}>
              <Text style={[TextStyleDo1, {color: '#DE8D00'}]}>Favour</Text>
              <Text style={cardText}>
                Ask for a favour,you can get help to perform any services.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Selling')}
            style={StyleView}>
            <View style={TopView2}>
              <View
                style={[
                  TopView3,
                  {
                    backgroundColor: 'rgba(200, 0, 26, 0.1)',
                    marginLeft: responsiveHeight(1),
                  },
                ]}>
                <AntDesign
                  name="pay-circle-o1"
                  size={responsiveFontSize(3.3)}
                  color={'#C8001A'}
                />
              </View>
            </View>
            <View style={ViewFlex7}>
              <Text style={[TextStyleDo1, {color: '#C8001A'}]}>Sale</Text>
              <Text style={cardText}>
                Do you want to make some money selling things you are not
                using?Post it!
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LookingFor');
            }}
            style={[TopView1, {marginBottom: responsiveHeight(2)}]}>
            <View style={TopView2}>
              <View
                style={[
                  TopView3,
                  {
                    backgroundColor: 'rgba(0, 92, 231, 0.1)',
                    marginLeft: responsiveHeight(1),
                  },
                ]}>
                <Ionicons
                  name="ios-search"
                  size={responsiveFontSize(3.3)}
                  color={'#005CE7'}
                />
              </View>
            </View>
            <View style={ViewFlex7}>
              <Text style={[TextStyleDo1, {color: '#005CE7'}]}>
                Looking For
              </Text>
              <Text style={cardText}>
                Are you Looking for something specific like a tour guide,a gymmate or an
                English Teacher?
              </Text>
              <Text style={cardText}>Let everyone know?</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
