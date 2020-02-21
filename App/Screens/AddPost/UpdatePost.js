import React, { useState, useEffect } from 'react';
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
import {
    COLOR_PRIMARY,
    TEXTINPUT_COLOR,
    TEXT_COLOR,
    SECONDARY_COLOR,
    INITIAL_BUTTON,
} from '../../Resources/Color/Color';
import Entypo from 'react-native-vector-icons/Entypo';
import { ForgetPasswordView, ForgetPasswordText } from './Style';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { aboutText } from '../Home/Style';
import { mylocationText, locationButtonViewTop, locationButtonView, btnImage, btnText } from '../Location/LocStyle';

export const UpdatePost = ({ navigation }) => {
    const [rating, setrating] = useState(0);
    const [btnCOlor, setbtnColor] = useState(false);
    const [data, setdata] = useState([1, 2, 3, 4])

    //   console.log(btnCOlor);
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
                            
                           
                            marginHorizontal:responsiveWidth(4),
                            marginTop:responsiveHeight(1)
                            
                            
                        }}>
                        Edit "Apple cake made from my mom"?
          </Text>
                    <Text style={{
                        marginTop:responsiveHeight(1),
                        marginLeft: responsiveHeight(2.2),
                        fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
                        color: '#76807C',
                        fontSize: responsiveFontSize(1.8),
                        marginVertical: responsiveHeight(0.5),
                    }}>Title</Text>
                    <View style={{
                        borderBottomColor: '#D5D6D5', borderBottomWidth: 1,
                        marginHorizontal: responsiveHeight(2.2),
                    }}>
                        <Text style={{
                           
                            marginVertical: responsiveHeight(3),
                            fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
                            
                            fontSize: responsiveFontSize(2.3),
                            marginVertical: responsiveHeight(0.5),
                        }}>Apple cake made from my mom</Text>
                    </View>
                    <Text style={{
                        marginLeft: responsiveHeight(2.2),
                        fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
                        marginTop:responsiveHeight(2),
                        color: '#76807C',
                        fontSize: responsiveFontSize(1.8),
                        marginVertical: responsiveHeight(0.5),
                    }}>About</Text>
                    <Text style={{
                        marginLeft: responsiveHeight(2.2),
                        marginHorizontal: responsiveHeight(3),
                        fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
                        
                        fontSize: responsiveFontSize(2.3),
                        marginVertical: responsiveHeight(0.5),
                    }}>i m giving away a delicious cake becuase it  was give two and i will not eat both.</Text>
                    <View style={{
                        marginHorizontal: responsiveHeight(2.2),
                    }}>
                        <Text style={mylocationText}>Location</Text></View>
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
                            <Text style={btnText}>New Boorklin,UK</Text>
                            <Text style={{ color: COLOR_PRIMARY, right: 10, position: 'absolute' }}>Change</Text>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity
                        style={ViewStyleImage}>
                        <ImageBackground style={[ViewStyleImage, { zIndex: 1 }]} source={require('../../Asset/cake.png')} >
                            <View style={{ height: responsiveHeight(6), width: responsiveHeight(6), borderRadius: responsiveHeight(6), justifyContent: 'center', alignItems: 'center', zIndex: 0, backgroundColor: COLOR_PRIMARY }}>
                                <Entypo name="cross" size={responsiveFontSize(2.5)} color={'white'} />
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <View
                        style={buttonView}>
                        <Button checked pressme={()=>navigation.goBack()}>Update</Button>
                    </View>

                </View>
            </SafeAreaView>
        </View >
    );
};
