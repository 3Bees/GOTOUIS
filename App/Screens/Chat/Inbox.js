import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import {
  TopTextStyle,
  TopText,
  ViewHeader,
  imageStyle,
  headerViewText,
  HeaderText,
  ViewT_D,
  ViewTop1,
  ViewTop2,
  ViewIncomingMsg,
  incomingMsgText,
  ViewOutgoingContainer,
  ViewOutgoingMsg,
  ViewButtonContainer,
  textInputField,
} from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  COLOR_PRIMARY,
} from '../../Resources/Color/Color';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-navigation'

const { width, height } = Dimensions.get('window');
export default class Chat extends Component {
    static navigationOptions = {
        header: null,
      }
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      messages: [
        {id:1, sent: false,  msg: 'Lorem ipsum dolor',   image:'https://randomuser.me/api/portraits/men/44.jpg'},
        {id:2, sent: true,  msg: 'sit amet, consectetuer',   image:'https://randomuser.me/api/portraits/women/65.jpg'},
        {id:3, sent: false, msg: 'adipiscing elit. Aenean ', image:'https://randomuser.me/api/portraits/men/44.jpg'},
        {id:4, sent: true,  msg: 'commodo ligula eget dolor.',   image:'https://randomuser.me/api/portraits/women/65.jpg'},
       
      ]
    };
    this.send = this.send.bind(this);
    this.reply = this.reply.bind(this);
    this.renderItem   = this._renderItem.bind(this);
  }

  reply() {
    var messages = this.state.messages;
    messages.push({
      id:Math.floor((Math.random() * 99999999999999999) + 1),
      sent: false,
      msg: this.state.msg,
      image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'
    });
    this.setState({msg:'', messages:messages});
  }

  send() {
    if (this.state.msg.length > 0) {
      var messages = this.state.messages;
      messages.push({
        id:Math.floor((Math.random() * 99999999999999999) + 1),
        sent: true,
        msg: this.state.msg,
        image:'https://www.bootdey.com/img/Content/avatar/avatar1.png'
      });
      this.setState({messages:messages});
      setTimeout(() => {
        this.reply();
      }, 2000);
    }
  }

  _renderItem = ({item}) => {
    if (item.sent === false) {
      return (
        <View style={styles.eachMsg}>
          <Image source={{ uri: item.image}} style={styles.userPic} />
          <View style={styles.msgBlock}>
            <Text style={styles.msgTxt}>{item.msg}</Text>
          </View>
        </View>
      );
    } else{
      return (
        <View style={styles.rightMsg} >
          <View style={styles.rightBlock} >
            <Text style={styles.rightTxt}>{item.msg}</Text>
          </View>
         
        </View>
      );
    }
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={TopTextStyle}
              onPress={() => this.props.navigation.goBack()}>
              <Ionicons
                style={TopText}
                name="ios-arrow-back"
                size={responsiveFontSize(5)}
                color={COLOR_PRIMARY}
              />
            </TouchableOpacity>
            <TouchableOpacity style={ViewHeader} onPress={()=>this.props.navigation.navigate('UserProfile')}>
            
              <Image
                style={imageStyle}
                source={require('../../Asset/cake.png')}
              />
          
            <View style={headerViewText}>
              <Text style={HeaderText}>Kiko Santos</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={ViewT_D}>
            <Text style={{color:'#76807C'}}>Friday,10:32</Text>
          </View>
         
          

          <ScrollView style={styles.list}>
            <FlatList 
              
              extraData={this.state}
              data={this.state.messages}
              keyExtractor = {(item) => {
                return item.id;
              }}
              renderItem={this.renderItem}/>
          
          </ScrollView>
         
          
         
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                onChangeText={(name_address) => this.setState({name_address})}/>
          </View>

            <TouchableOpacity style={styles.btnSend}>
              <Image source={require('../../Asset/circlesend.png')} style={styles.iconSend}  />
            </TouchableOpacity>
        </View>
        
        
      
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width,
    height,
  },
  list:{
    
    
    height:responsiveHeight(70)
  },
  header: {
    height: '10%',
    width: '100%',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
  },
  chatTitle: {
    color: '#fff',
    fontWeight: '600',
    margin: 10,
    fontSize: 15,
  },
  chatImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
  input: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 10,
    height: 40,
    width: width - 20,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
    borderColor:'#696969',
    borderWidth:1,
  },
  eachMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
  },
  rightMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
    alignSelf: 'flex-end',
    right:responsiveWidth(2)
  },
  userPic: {
    height: 30,
    width: 30,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  msgBlock: {
    width: 220,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 8,
    shadowColor: '#3d3d3d',
    shadowRadius: 0.5,
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 0.5,
    },
    borderWidth:1,
    borderColor:'rgba(29, 33, 31, 0.0781523)'
  },
  rightBlock: {
    width: 220,
    borderRadius: 10,
    backgroundColor: '#F4F5F5',
    padding: 8,
    shadowColor: '#3d3d3d',
    shadowRadius: 0.5,
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 0.5,
    },
  },
  msgTxt: {
    fontSize: responsiveFontSize(2.2),
    color: '#000000',
    
  },
  rightTxt: {
    fontSize: responsiveFontSize(2.2),
    color: '#000000',
    
  },
  footer:{
    
    alignSelf:'center',
    flexDirection: 'row',
    height: Platform.OS === 'android' ?responsiveHeight(7):responsiveHeight(6),
    backgroundColor: '#ffffff',
    paddingHorizontal:10,
    padding:5,
    width:'95%',
    
    marginHorizontal:responsiveWidth(4),
    borderColor: 'rgba(29, 33, 31, 0.0781523)',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderWidth: 1,
    marginBottom:responsiveWidth(2)
  },
  btnSend:{
    
    width:40,
    height: Platform.OS === 'android' ?40:responsiveHeight(5),
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:  Platform.OS === 'android' ?30:responsiveHeight(4),
    height:Platform.OS === 'android' ?30:responsiveHeight(4),
    alignSelf:'center',
  },
  inputContainer: {
  
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    
    height: Platform.OS === 'android' ?40:responsiveHeight(5),
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#000000',
    flex:1,
  },
  welcome: {
    fontSize: responsiveFontSize(3.8),
    fontWeight:'bold',
    textAlign: 'center',
    margin:7,
    color:'#2197db'
  },
  menu: {

    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: responsiveHeight(1.8),
    marginLeft: '4%',
    position: 'absolute'

  },
  menu1: {
    width: 10, height: 50, borderRadius: 42,
    marginTop: responsiveHeight(1.8),
    marginLeft: '90%',
    position: 'absolute'
  },
});  