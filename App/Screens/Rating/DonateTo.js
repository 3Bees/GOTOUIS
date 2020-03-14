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
} from './Style';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
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
import ApiManager from '../../ApiManager/ApiManager';

export const DonateTo = ({navigation}) => {
  const [rating, setrating] = useState(0);
  const [btnCOlor, setbtnColor] = useState(false);
  const [data, setdata] = useState([]);
  const[post,setPost]=useState({})
  const [id, setId] = useState(navigation.state.params.id);
const[idd,setidd]=useState(false)

  useEffect(() => {
    if(idd==false){
    new ApiManager().getPostbyId(id).then(res=>{
      setPost(res) 
      setidd(true)}).catch(err=>{console.log(err)
        setidd(true)
      })
    new ApiManager()
      .interactWithPost(id)
      .then(res => {
        setidd(true)
        console.log(res.data.UsersInteractPost);
        setdata(res.data.UsersInteractPost)
      })
      .catch(err =>{ console.log(err)
        setidd(true)});}
  });
  return (
    <View style={Container}>
      <SafeAreaView style={Container}>
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
              marginTop: responsiveHeight(2),
              marginHorizontal: responsiveHeight(3),
            }}>
            Who did you donate "{post.data?post.data.Post.Subject:null}" to?
          </Text>
          <FlatList
            data={data}
            style={{marginTop: responsiveHeight(2)}}
            renderItem={(item, idex) => {
              console.log("item",item.item.Name)
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Rating',{id:item.item._id,_id:id})}
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'stretch',
                    borderColor: SECONDARY_COLOR,
                    borderRadius: responsiveHeight(6),
                    padding: 10,
                    borderWidth: 1,
                    backgroundColor: '#F4F5F5',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    marginHorizontal: responsiveHeight(3),
                    marginVertical: responsiveHeight(1),
                  }}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Image
                        source={{
                          uri:item.item.Photo,
                        }}
                        style={{
                          height: responsiveHeight(4),
                          width: responsiveHeight(4),
                          borderRadius: responsiveHeight(4),
                          backgroundColor: 'black',
                        }}
                      />
                      <View
                        style={{
                          marginHorizontal: responsiveHeight(1),
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}>
                        <Text
                          style={{
                            fontFamily:
                              Platform.OS === 'android'
                                ? 'Muli-Regular'
                                : 'Muli',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            color: TEXT_COLOR,
                            fontSize: responsiveFontSize(2),
                          }}>
                          {item.item.Name}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
