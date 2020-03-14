import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth
} from 'react-native-responsive-dimensions';
import {COLOR_PRIMARY,COLOR_BACKGROUND,SECONDARY_COLOR,TEXTINPUT_COLOR,INITIAL_BUTTON, COLOR_LOOKING_FOR} from '../../Resources/Color/Color';

export const ForgetPasswordView = {
  marginTop: responsiveHeight(6),
};
export const UserDetailContainer = {
  flexDirection: 'row',
 
  left:responsiveWidth(1.5),
  marginVertical: responsiveHeight(1),
  
  
};
export const ForgetPasswordText = {
  fontSize: responsiveFontSize(3),
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  
  
};
export const tabStyle = {backgroundColor: 'transparent'};
export const activeTabStyle = {backgroundColor: 'transparent'};
export const containerStyle = {
  flex: 1,
  backgroundColor: 'white',
};
export const SettingView = {
  marginTop:Platform.OS === 'android' ? responsiveHeight(7):responsiveHeight(3),
  left: responsiveWidth(5),
  
 
};
export const SettingView1 = {
  marginTop: Platform.OS === 'android' ?responsiveHeight(7):responsiveHeight(3),
  left: responsiveWidth(90),
  
 
};

export const itemText={
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  
 
  fontSize: responsiveFontSize(2.1),
}
export const flexfour={flex: 0.4,borderTopRightRadius: responsiveHeight(1)}

export const StatusFlatlist={
  marginTop: responsiveHeight(1),
  right: responsiveHeight(2.3),
  position: 'absolute',
  borderRadius:5
}

export const statusText={
  alignSelf: 'center',
  color: COLOR_BACKGROUND,
  marginHorizontal: 4,
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
}

export const UserImageContainer={
  flexDirection: 'row',
  bottom: responsiveHeight(0),
  
  marginVertical: responsiveHeight(1),
  marginHorizontal: responsiveHeight(1),
  alignItems: 'center',
}

export const imagelookingStyle={
  height: responsiveHeight(4),
  width: responsiveHeight(4),
  borderRadius: responsiveHeight(4),
  backgroundColor: 'black',
}
export const Myloc={
  marginTop: responsiveHeight(7),
  height: responsiveHeight(12),
}
export const IconSend={
  flexDirection: 'row',
  alignSelf: 'stretch',
  borderColor: SECONDARY_COLOR,
  height: responsiveHeight(6),
  backgroundColor: 'white',
  alignItems: 'center',
}
export const crossContainerTop={
  height: responsiveHeight(15),
  marginTop: Platform.OS === 'android' ?responsiveHeight(8):responsiveHeight(2),
  width: responsiveHeight(15),
  borderRadius: responsiveHeight(15),
  backgroundColor: COLOR_PRIMARY,
  zIndex: 0,
}
export const Center={justifyContent: 'center', alignItems: 'center'}
export const backContainer={
  marginTop: Platform.OS === 'android' ?responsiveHeight(7):responsiveHeight(3),
  left: responsiveHeight(3),
  position: Platform.OS === 'android' ?'absolute':null,
  zIndex: 1,
}

export const userImage={
  height: responsiveHeight(15),
  width: responsiveHeight(15),
  borderRadius: responsiveHeight(15),
}

export const logoutText={
  color: COLOR_PRIMARY,
  fontSize: responsiveFontSize(2.2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  
}
export const logoutContainer={
  marginTop: Platform.OS === 'android' ?responsiveHeight(7):responsiveHeight(7.6),
  right: responsiveHeight(2),
  position: 'absolute',
  zIndex: 1,
}
export const btnImage={
  height: Platform.OS === 'android' ?  responsiveHeight(2.5): responsiveHeight(2.5),
  width: Platform.OS === 'android' ? responsiveWidth(5) : responsiveWidth(5),
  
  resizeMode:'contain'
}
export const textinputContainers={
  marginHorizontal: responsiveHeight(3),
}
export const crossContainer={
  height: responsiveHeight(4),
  width: responsiveHeight(4),
  borderRadius: responsiveHeight(4),
  bottom: responsiveHeight(1),
  left: responsiveHeight(12),
  backgroundColor: COLOR_PRIMARY,
  zIndex: 1,
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
}
export const sendStyle={
  marginHorizontal: responsiveWidth(3),
}
export const nameLocStyle={
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : null,
  fontStyle: 'normal',
  fontSize: responsiveFontSize(2.3),
  fontWeight: 'normal',
  marginHorizontal:responsiveWidth(3),
  width:responsiveWidth(40)
}
export const changeText={
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontStyle: 'normal',
  fontSize: responsiveFontSize(2),
  color: COLOR_PRIMARY,
  fontWeight: 'normal',
}
export const updateContainer={height: responsiveHeight(7)}
export const changeLocContainer={right: 5, position: 'absolute'}
export const usernameLook={
  color: '#76807C',
  alignSelf: 'center',
  marginHorizontal: responsiveWidth(1),
  fontSize:responsiveFontSize(1.5),
}

export const starRatingViewlook={
  flexDirection: 'row',
  marginLeft: responsiveHeight(0.3),
}
export const locConatiner={
  
  padding:1.5,
  
  backgroundColor: COLOR_PRIMARY,
  flexDirection: 'row',
 
}

export const StylePinContainer={
  top: responsiveHeight(11.5),
  flexDirection: 'row',
  //marginLeft:responsiveWidth(9)
  alignSelf:'flex-end',
  right: responsiveHeight(2.3),
}

export const ContainerLookingStyle={
  marginTop: responsiveHeight(1),
  right: responsiveHeight(1.5),
  position: 'absolute',
  backgroundColor: COLOR_LOOKING_FOR,
  borderRadius:5,
  top:responsiveHeight(0.5)
}

export const lookingForText={
  alignSelf: 'center',
  color: COLOR_BACKGROUND,
  marginHorizontal: 4,
  fontSize:responsiveFontSize(1.6),
  padding:1.5
}

export const lookingTop={
  borderRadius: responsiveHeight(1),
  backgroundColor:'white',
  elevation:2,
  marginHorizontal: responsiveHeight(3),
  marginTop: responsiveHeight(2.2),
  marginBottom: responsiveHeight(2.2),
  shadowColor: '#474747',
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.37,
  shadowRadius: 7.49,
}
export const lookingName={
  marginVertical: responsiveHeight(1),
  marginHorizontal: responsiveHeight(2),
}
export const gymText={
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
  
  fontSize: responsiveFontSize(2.3),
}

export const Stylepin={
  marginLeft: responsiveHeight(2.5),
  top: responsiveHeight(0.1),
}
export const locationTextStyle={
  color: '#ffffff',
  fontSize: responsiveFontSize(1.5),
  alignSelf: 'center',
  bottom: responsiveHeight(0.2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
}
export const locationTextStyle2={
  color: '#000000',
  fontSize: responsiveFontSize(1.5),
  alignSelf: 'center',
  bottom: responsiveHeight(0.2),
  fontFamily: Platform.OS === 'android' ? 'Muli-Bold' : 'Muli',
}

export const gestureView={
  top: responsiveHeight(11.5),
  flexDirection: 'row',
  //marginHorizontal: responsiveHeight(2),
  alignSelf:'flex-end',
  right: responsiveHeight(2.3),
}

export const gestureText={
  color: 'white',
  fontSize: responsiveFontSize(1.5),
  alignSelf: 'center',
}

export const imageFlatlistContainer={
  flexDirection: 'row',
  bottom: responsiveHeight(0),
  marginTop:responsiveHeight(3),
  
  
}

export const nameItem={
  color: TEXTINPUT_COLOR,
  alignSelf: 'center',
  marginHorizontal: responsiveWidth(1),
  fontSize:responsiveFontSize(1.5),
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
}

export const imageFlatlist={
  height: responsiveHeight(3.5),
  width: responsiveHeight(3.5),
  borderRadius: responsiveHeight(3.5),
  backgroundColor: 'black',
  
}
export const imageFlatlist2={
  height: responsiveHeight(3.5),
  width: responsiveHeight(3.5),
  borderRadius: responsiveHeight(3.5),
  backgroundColor: 'black',
  marginLeft:responsiveWidth(3)
  
}

export const flatListTop={marginTop: responsiveHeight(1),backgroundColor:'#fcfdfd'}

export const TopList={
  flexDirection: 'row',
  borderRadius: responsiveHeight(1),
  backgroundColor:'white',
  
  flex: 1,
  elevation:2,
  marginHorizontal: responsiveHeight(3),
  marginTop: responsiveHeight(1.2),
  marginBottom:responsiveHeight(1),
  shadowColor: '#474747',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.3,
  shadowRadius: 2.49,
}
export const flexSix={
  flex: 0.6,
  marginVertical: responsiveHeight(1),
  marginHorizontal: responsiveHeight(2),
}

export const tabBarborderStyles={
  height: 3,
  backgroundColor: COLOR_PRIMARY,
}
export const textActive={
  color: COLOR_PRIMARY,
  fontWeight: 'bold',
  
}
export const colorHeader={backgroundColor: 'white',} 
export const elev={elevation: 4,
  zIndex:0,
  shadowColor: '#474747',
  shadowOffset: {
    width: 1,
    height: 10,
  },
  shadowOpacity: 0.37,
  shadowRadius: 2.49,
}
export const directionCol={flexDirection: 'column'}
export const alignCenter={alignSelf: 'center',color:'#76807C',fontWeight:'bold'}


export const locationPinStyle={
  // marginLeft: responsiveHeight(2),
  // marginRight: responsiveHeight(1),
  // top:responsiveHeight(0.6),
  marginLeft:responsiveWidth(3),
  top:1
 
}
export const locationPinStyle3={
  // marginLeft: responsiveHeight(2),
  // marginRight: responsiveHeight(1),
  // top:responsiveHeight(0.6),
  
}
export const locationPinStyle2={
  // marginLeft: responsiveHeight(2),
  // marginRight: responsiveHeight(1),
  // top:responsiveHeight(0.6),
  
  top:responsiveHeight(1.2)
 
}
export const RatingStarStyle={marginRight: responsiveHeight(0.3),}

export const DirectionRow={flexDirection: 'row',marginTop:responsiveHeight(1)}

export const userName={
  
  fontSize: responsiveFontSize(2.8),
  fontFamily:'Muli-Bold'
}
export const textstyl3={
  color:'#76807C',
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontSize:responsiveFontSize(1.9)
}
export const textstyl={
  color:'#76807C',
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontSize:responsiveFontSize(1.7),
  
 
}
export const textstyl1={
  color:'#76807C',
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontSize:responsiveFontSize(1.7),
  marginBottom:responsiveHeight(2),
}
export const textstyl2={
  color:'#76807C',
  fontFamily: Platform.OS === 'android' ? 'Muli-Regular' : 'Muli',
  fontSize:responsiveFontSize(1.5)
}
export const Profilepics = {
  height: responsiveHeight(14),
  width: responsiveHeight(14),
  borderRadius: responsiveHeight(14),
};

export const profileImage = {
  height: responsiveHeight(14),
  bottom:responsiveHeight(1),
  width: responsiveHeight(14),
  borderRadius: responsiveHeight(14),
  backgroundColor: COLOR_PRIMARY,
};

export const StyleCenter = {justifyContent: 'center', alignItems: 'center',backgroundColor:'white',zIndex:1};
