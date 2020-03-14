import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import {
  TopText,
  TopTextStyle,
  ViewPad,
  imageView,
  image,
  TextContainer,
  Username,
  TextComment,
  Time,
  TextContainer2,
} from './Style';
import {Container2, Container} from '../SignUp/Style';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  COLOR_PRIMARY,
  TEXT_COLOR,
  INITIAL_BUTTON,
} from '../../Resources/Color/Color';
import ApiManager from '../../ApiManager/ApiManager';

export const Notification = ({navigation}) => {
  const [notification, setNotification] = useState([]);
  const [checker,setChecker]=useState(false)
  useEffect(() => {
    if(checker==false){
    new ApiManager()
      .notification()
      .then(res => {
        console.log('res', res);
        setChecker(true)
        setNotification(res.data.Notifications);
      })
      .catch(err => console.log(err));}
  });
  console.disableYellowBox = true;
  let data = [
    {
      id: 3,
      image: require('../../Asset/chat1.png'),
      name: 'March SoulLaComa',
      text: 'Commented at your Post',
      route: 'EditDetails',
    },
    {
      id: 2,
      name: 'John DoeLink',
      text:
        'Congrats to donating $2, you are helping to turn the World into a better place to live',
      route: 'Rating',
    },
    {
      id: 4,
      name: 'Finn DoRemiFaso',
      text: 'Congrats you complete 1 sell',
      attachment: '',
      route: 'Rating',
    },
    {
      id: 5,
      name: 'Maria More More',
      text:
        'The world become better when We help each other.You are in the right way! ',
      route: 'Rating',
    },
    {
      id: 1,
      text: 'We are proud to have a found what you were looking for! ',
      route: 'Rating',
    },
    {
      id: 6,
      image: require('../../Asset/chat2.png'),
      name: 'Clark June Boom!',
      text: 'You`ve "received  on donation.Give some stars to donator!',
      route: 'Rating',
    },
  ];
  console.log(notification,"notification")
  return (
    <View style={Container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={Container}>
        <TouchableOpacity style={TopTextStyle}>
          <Text style={TopText}>Notifications</Text>
        </TouchableOpacity>
        {notification.length>0 ? (
          <FlatList
            style={{marginTop: responsiveHeight(2)}}
            data={notification}
            keyExtractor={item => item.id}
            renderItem={(item, index) => {
              console.log("item",item.item.Participant.Name)
              return (
                <TouchableOpacity
                  style={Container2}
                  onPress={() => navigation.navigate('EditDetails',{id:item.item.ResourceId})}
                  >
                  {/* {item.item.image ? ( */}
                    <View style={ViewPad}>
                      <View style={imageView}>
                        <Image source={item.item.image} style={image} />
                      </View>
                      <Text style={TextContainer}>
                        <Text style={Username}>{item.item.Participant.Name?item.item.Participant.Name:'name'}</Text>{' '}
                        <Text style={TextComment}>{item.item.Text}</Text>{' '}
                        <Text style={Time}>10:32</Text>
                      </Text>
                    </View>
                  {/* ) : (
                    <View style={ViewPad}>
                      <Text style={TextContainer2}>
                        <Text style={TextComment}>{item.item.text}</Text>{' '}
                        <Text style={Time}>10:32</Text>
                      </Text>
                    </View>
                  )} */}
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style>No Notification for you</Text>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};
