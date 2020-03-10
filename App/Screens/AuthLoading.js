import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class AuthLoadingScreen extends Component {
  componentDidMount = async () => {
    let data = await AsyncStorage.getItem('token');
    setTimeout(() => {
      if (data) {
        this.props.navigation.navigate('MainTab');
      } else {
        this.props.navigation.navigate('Signin');
      }
    }, 5000);
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            height: '20%',
            width: '70%',
            resizeMode: 'contain',
          }}
          source={require('../Asset/goto.png')}
        />
      </View>
    );
  }
}
