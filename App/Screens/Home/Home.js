import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
  ImageBackground,
  Modal,
  KeyboardAvoidingView
} from 'react-native';
import {
  TopTextStyle,
  FlatListStyle,
  ListContainer,
  listView2,
  TextDes,
  imageStyle,
  backgroundImageStyle,
  StatusContainer,
  StatusText,
  StatusContainerSell,
  GestureNumberText,
  locationpinStyle,
  locationpinText,
  locationpinContainer,
  IconGesture,
  LookingContainer,
  LookingTopTextContainer,
  LookingName,
  LookingForTextContainer,
  lookingForText,
  LookLocationpinCotainer,
  UserDetailContainer,
  userImage,
  UserName,
  RatingContainer,
  SliderIconContainer,
  ToplocationContainer,
  cancelTextStyle,
  cancelTextContainer,
  locationpinStyle1,
  crossContainer,
  SearchStyle,
  SearchContainer,
  SearchTopContainer,
  ApplyButtonText,
  KMTextStyle,
  TextDistance,
  Row,
  RowContainer,
  modalContainerTop,
  modalContainerTop1,
  containerFilter,
  filterText,
  crossmodal,
  TextName,
  imageView2,
  StatusContainerFavour,
  filterStyle,
  locationbar,
  ImageLogo,
  locationpinStyle2
} from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ant from 'react-native-vector-icons/AntDesign'
import {
  responsiveFontSize,responsiveHeight, responsiveWidth
} from 'react-native-responsive-dimensions';
import {
  COLOR_PRIMARY,
  COLOR_BACKGROUND,
  TEXTINPUT_COLOR,
  COLOR_FAVOUR,
} from '../../Resources/Color/Color';
import {Slider} from 'react-native-elements';
import Button from '../../Common/Button/Button';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

export const Home = ({navigation}) => {
  const [modalVisible, setmodalVisible] = useState(false);
  const toggleModal = () => {
    setmodalVisible(!modalVisible);
  };
  console.disableYellowBox = true;
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
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      name: 'John DoeLink',
      text: 'Help me to change my wardobe',
      status: 'Favour',
      itemImage: require('../../Asset/wardrobe.png'),
    },
    {
      id: 4,
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      name: 'Finn DoRemiFaso',
      text: 'The best brand guiter',
      status: 'sell',
      itemImage: require('../../Asset/guiter.png'),
    },
  ];
  const [search, setSearch] = useState('');
  const [slide, setSlide] = useState(1);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: modalVisible ? 'rgba(0,0,0,0.1)' : '#fcfdfd',
      }}>
              <KeyboardAvoidingView  behavior="padding" enabled>

      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: modalVisible ? 'rgba(0,0,0,0.2)' : '#fcfdfd',
        }}>
        <View style={TopTextStyle}>
          <Image
            style={ImageLogo}
            source={require('../../Asset/goto.png')}
          />
        </View>
        <Modal
          animationType={'pokeman'}
          transparent={false}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            toggleModal();
          }}>
          <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.6)'}}>
          <View style={modalContainerTop1}>
            <View style={containerFilter}>
              <Text style={filterText}>Filter</Text>
              <TouchableOpacity
                style={crossmodal}
                onPress={() => {
                  toggleModal();
                }}>
                <Ant
                  name="close"
                  size={responsiveFontSize(3)}
                  color={COLOR_PRIMARY}
                  style={{top:responsiveHeight(0.8)}}
                />
              </TouchableOpacity>
            </View>
            <View style={RowContainer}>
              <View style={Row}>
                <Text style={TextDistance}>Distance</Text>
                <Text style={KMTextStyle}>{slide} KM</Text>
              </View>
              <Slider
                value={slide}
                onValueChange={values => setSlide(values)}
                minimumValue={1}
                maximumValue={10}
                step={1}
                thumbTintColor={COLOR_PRIMARY}
                maximumTrackTintColor="#DCDCDC"
                minimumTrackTintColor={COLOR_PRIMARY}
              />
            </View>
            <View style={ApplyButtonText}>
              <Button
                checked={slide}
                pressme={() => {
                  toggleModal();
                }}>
                Apply
              </Button>
            </View>
          </View>
          </View>
        </Modal>

        <View style={SearchTopContainer}> 
          <View style={SearchContainer}>
            <Ionicons
              name="ios-search"
              style={SearchStyle}
              size={responsiveFontSize(3)}
              color={COLOR_PRIMARY}
            />
            <TextInput
              placeholder="Search"
              value={search}
              onChangeText={text => setSearch(text)}
              style={{margin:0,padding:0,backgroundColor:'#F4F5F5',fontSize:responsiveFontSize(2)}}
            />
            {search ? (
              <TouchableOpacity
                style={crossContainer}
                onPress={() => setSearch('')}>
                <Entypo name="circle-with-cross" size={responsiveFontSize(3)} />
              </TouchableOpacity>
            ) : null}
          </View>
          {search ? (
            <View style={cancelTextContainer}>
              <Text style={cancelTextStyle}>Cancel</Text>
            </View>
          ) : (
            <View style={locationbar}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Location',{id:1})}
                style={ToplocationContainer}>
                <SimpleLineIcons
                  name="location-pin"
                  size={responsiveFontSize(2.5)}
                  color={COLOR_PRIMARY}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={SliderIconContainer}
                onPress={() => {
                  toggleModal();
                }}>
                <Image
                  style={filterStyle}
                  source={require('../../Asset/filter.png')}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <FlatList
          style={FlatListStyle}
          data={data}
          keyExtractor={item => item.id}
          renderItem={(item, index) => {
            return (
              <TouchableOpacity
                style={ListContainer}
                onPress={() => navigation.navigate('Detail')}>
                <View style={listView2}>
                  <Text style={TextDes}>{item.item.text}</Text>
                  <View style={imageView2}>
                    <Image style={imageStyle} source={{uri: item.item.image}} />
                    <Text style={TextName}>{item.item.name}</Text>
                  </View>
                </View>
                <ImageBackground
                  source={item.item.itemImage}
                  style={backgroundImageStyle}
                  imageStyle={{borderBottomRightRadius:responsiveHeight(1),borderTopRightRadius:responsiveHeight(1),height:'100%',width:'100%' ,backgroundColor:'white'}}>
                  <LinearGradient
                    colors={[
                      'rgba(29, 33, 31, 0.0001)',
                      'rgba(29, 33, 31, 0.5)',
                    ]}
                    style={{flex: 1,borderTopRightRadius:responsiveHeight(1),borderBottomRightRadius:responsiveHeight(1)}}>
                    {item.item.status == 'Donation' ? (
                      <View>
                        <View style={StatusContainer}>
                          <Text style={StatusText}>{item.item.status}</Text>
                        </View>
                        <View style={IconGesture}>
                          <MaterialCommunityIcons
                            name="gesture-tap"
                            color={COLOR_BACKGROUND}
                            size={responsiveFontSize(2)}
                            style={{bottom:2.8}}
                          />
                          <Text style={GestureNumberText}>3</Text>
                          <SimpleLineIcons
                            name="location-pin"
                            size={responsiveFontSize(1.5)}
                            color={'white'}
                            style={locationpinStyle}
                          />
                          <Text 
                            style={[
                              locationpinText,
                              {
                                color: 'white',
                              },
                            ]}>1.3 KM</Text>
                        </View>
                      </View>
                    ) : item.item.status == 'Favour' ? (
                      <View>
                        <View style={StatusContainerFavour}>
                          <Text style={StatusText}>{item.item.status}</Text>
                        </View>
                        <View style={locationpinContainer}>
                          <SimpleLineIcons
                            name="location-pin"
                            size={responsiveFontSize(1.5)}
                            color={COLOR_BACKGROUND}
                            style={[locationpinStyle2]}
                          />
                          <Text
                            style={[
                              locationpinText,
                              {
                                color: 'white',
                              },
                            ]}>1.3 KM</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={StatusContainerSell}>
                          <Text style={StatusText}>300$</Text>
                        </View>
                        <View style={IconGesture}>
                          <MaterialCommunityIcons
                            name="gesture-tap"
                            color={COLOR_BACKGROUND}
                            size={responsiveFontSize(2)}
                            style={{bottom:2}}
                          />
                          <Text style={GestureNumberText}>3</Text>
                          <SimpleLineIcons
                            name="location-pin"
                            size={responsiveFontSize(1.5)}
                            color={COLOR_BACKGROUND}
                            style={locationpinStyle}
                          />
                          <Text
                            style={[
                              locationpinText,
                              {
                                color: 'white',
                              },
                            ]}>
                            1.3 KM
                          </Text>
                        </View>
                      </View>
                    )}
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('Gymmate')} style={LookingContainer}>
         
        <View style={LookingTopTextContainer}>
            <Text style={LookingName}>Gymmate</Text>
            <Text style={{color:'#76807C',fontSize:responsiveFontSize(1.8),fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,}}>Looking for a mate to workout togather</Text>
          </View>
          <View style={LookingForTextContainer}>
            <Text style={lookingForText}>Looking For</Text>
          </View>
          <View style={LookLocationpinCotainer}>
           
          
          <View style={UserDetailContainer}>
            <Image style={userImage} />
            <View>
              <Text style={UserName}>Jequeline Robinson</Text>
              <View style={RatingContainer}>
                <Entypo name="star" size={responsiveFontSize(1.5)}  color={COLOR_FAVOUR}/>
                <Text style={{fontSize:responsiveFontSize(1.5),bottom:1,fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',color:'#76807C'}}>3.4</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'row',right:responsiveWidth(4.5)}}>
          <SimpleLineIcons
              name="location-pin"
              size={responsiveFontSize(1.5)}
              color={TEXTINPUT_COLOR}
              style={locationpinStyle1}
            />
            <Text
              style={[
                locationpinText,
                {
                  left:1,
                  top:1,
                  color: TEXTINPUT_COLOR,
                },
              ]}>
              1.3 KM
            </Text>
          </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
