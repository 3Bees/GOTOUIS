import React from 'react';
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
  TextContainer3,
  Status,
  Circle,
  ListStyle,
} from './Style';
import {Container2, Container} from '../SignUp/Style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  INITIAL_BUTTON, COLOR_BACKGROUND, TEXTINPUT_COLOR,
} from '../../Resources/Color/Color';

export const Chat = ({navigation}) => {
  console.disableYellowBox = true;
  let data = [
    {
      id: 3,
      image: require('../../Asset/chat1.png'),
      name: 'Jacquelince Robinson',
      text: 'Hi! can i collect it?',
      status: false,
    },
    {
      id: 2,
      image: require('../../Asset/chat2.png'),
      name: 'Kiko Santos',
      text: 'i`ve just sold it ',
      status: true,
    },
    {
      id: 4,
      image: require('../../Asset/chat3.png'),
      name: 'Finn Larissa Machado',
      text: 'Hi! can i collect it?',
      status: false,
      attachment: '',
    },
  ];
  return (
    <View style={[Container,{backgroundColor:'white'}]}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
      <SafeAreaView style={[Container,{backgroundColor:'white'}]}>
        <View style={TopTextStyle}> 
          <Text style={TopText}>Chat</Text>
        </View>
        <FlatList
          style={ListStyle}
          data={data}
          keyExtractor={item => item.id}
          renderItem={(item, index) => {
            return (
              <TouchableOpacity key={index} onPress={()=>navigation.navigate('Inbox')} style={[Container2,{backgroundColor:COLOR_BACKGROUND}]}>
                <View style={ViewPad}>
                  <View style={imageView}>
                    <Image source={item.item.image} style={image} />
                  </View>
                  <View style={TextContainer}>
                    <Text style={Username}>{item.item.name}</Text>
                    <Text style={TextComment}>{item.item.text}</Text>
                  </View>
                  <View style={TextContainer3}>
                    <Text style={Time}>10:32</Text>
                    <View style={Status}>
                      {item.item.status ? (
                        <View style={[Circle,{left:8}]}></View>
                      ) : (
                        <AntDesign
                          name="check"
                          color={TEXTINPUT_COLOR}
                          size={responsiveFontSize(2)}
                        />
                      )}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};
