import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  FlatList,
  ActivityIndicator,
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
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {
  INITIAL_BUTTON,
  COLOR_BACKGROUND,
  TEXTINPUT_COLOR,
  COLOR_PRIMARY,
} from '../../Resources/Color/Color';
import ApiManager from '../../ApiManager/ApiManager';
import {useSelector, useDispatch} from 'react-redux';

export const Chat = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (data.data == undefined) {
      chatData();
    }
  });
  const chatData = () => {
    new ApiManager()
      .ConversationList()
      .then(res => setData(res))
      .catch(error => console.log(error));
  };
  console.disableYellowBox = true;

  const User = useSelector(state => ({...state.User}));

  return (
    <View style={[Container, {backgroundColor: 'white'}]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={[Container, {backgroundColor: 'white'}]}>
        <View style={TopTextStyle}>
          <Text style={TopText}>Chat</Text>
        </View>
        {data.data ? (
          <FlatList
            style={ListStyle}
            data={data.data.Conversations}
            keyExtractor={item => item.id}
            renderItem={(item, index) => {
              console.log('item>>>>>>>', item.item);
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate('Inbox', {id: item.item._id})
                  }
                  style={[Container2, {backgroundColor: COLOR_BACKGROUND}]}>
                  <View style={ViewPad}>
                    <View style={imageView}>
                      {item.item.Participants.map(res => {
                        return User.user.Email !== res.Email ? (
                          <Image source={{uri: res.photo}} style={image} />
                        ) : null;
                      })}
                    </View>
                    <View style={TextContainer}>
                      {item.item.Participants.map(res => {
                        {console.log(User, res._id )}
                        return User.user.Email !== res.Email ? (
                          <Text style={Username}>{res.Name}</Text>
                        ) : null; 
                      })}
                      <Text style={TextComment}>{item.item.text}</Text>
                    </View>
                    <View style={TextContainer3}>
                      <Text style={Time}>10:32</Text>
                      <View style={Status}>
                        {item.item.status ? (
                          <View style={[Circle, {left: 8}]}></View>
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
        ) : (
          <ActivityIndicator
            size={'large'}
            color={COLOR_PRIMARY}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          />
        )}
      </SafeAreaView>
    </View>
  );
};
