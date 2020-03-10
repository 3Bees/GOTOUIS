import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Signin} from '../Screens/SignIn/Signin';
import {SignUp} from '../Screens/SignUp/SignUp';
import {ForgotPassword} from '../Screens/ForgotPassword/ForgotPassword';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {Image} from 'react-native'
import Ant from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Home} from '../Screens/Home/Home';
import {Chat} from '../Screens/Chat/Chat';
import {
  COLOR_PRIMARY,
  TEXTINPUT_COLOR,
  INITIAL_BUTTON,
  SECONDARY_COLOR,
} from '../Resources/Color/Color';
import {AddPost} from '../Screens/AddPost/AddPost';
import {Notification} from '../Screens/Notification/Notification';
import {Profile} from '../Screens/Profile/Profile';
import {Location} from '../Screens/Location/Location';
import {UpdateProfile} from '../Screens/Profile/UpdateProfile';
import Inbox from '../Screens/Chat/Inbox';
import {Detail} from '../Screens/Home/Detail';
import {Ratings} from '../Screens/Rating/Rating';
import {PostAdd} from '../Screens/AddPost/PostingData';
import {DonateTo} from '../Screens/Rating/DonateTo';
import {EditDetails} from '../Screens/Home/EditDetails';
import {ClosePost} from '../Screens/Rating/ClosePost';
import {Gymmate} from '../Screens/Home/Gymmate';
import {Favour} from '../Screens/AddPost/Favour';
import {LookingFor} from '../Screens/AddPost/LookingFor';
import {Selling} from '../Screens/AddPost/Selling';
import {UpdatePost} from '../Screens/AddPost/UpdatePost';
import {UserProfile} from '../Screens/Profile/UserProfile'
import AuthLoadingScreen from '../Screens/AuthLoading';

const MainTab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) =>  focused ?
        (
          <Image
          source={require('../Asset/tab1.png')}
          />
        ):(<Image
          source={require('../Asset/tab1e.png')}
          />)
      },
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) =>focused ?
        (
          <Image
          source={require('../Asset/tab2.png')}
          />
        ):(<Image
          source={require('../Asset/tab2e.png')}
          />)
      },
    },
    AddPost: {
      screen: AddPost,
      navigationOptions: {
        tabBarIcon: () => (
          <Ant
            name="pluscircle"
            color={COLOR_PRIMARY}
            size={responsiveFontSize(5)}
            style={{
              marginBottom: responsiveHeight(1),
            }}
          />
        ),
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) => focused ?
        (
          <Image
          source={require('../Asset/tab3.png')}
          />
        ):(<Image
          source={require('../Asset/tab3e.png')}
          />)
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) => focused ?
        (
          <Image
          source={require('../Asset/tab4e.png')}
          />
        ):(<Image
          source={require('../Asset/tab4.png')}
          />)
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: COLOR_PRIMARY,
      inactiveTintColor: TEXTINPUT_COLOR,
      style: {
        height: responsiveHeight(8.5),
        backgroundColor: 'white',
        borderTopColor: TEXTINPUT_COLOR,
        
        //elevation: 10
      },
    },
  },
);

const AuthStack = createStackNavigator(
  {
    AuthLoading:AuthLoadingScreen,
    MainTab: MainTab,
    Signin: Signin,
    SignUp: SignUp,
    ForgotPassword: ForgotPassword,
    Location: Location,
    UpdateProfile: UpdateProfile,
    Inbox: Inbox,
    Detail: Detail,
    Rating: Ratings,
    PostingData: PostAdd,
    DonateTo: DonateTo,
    EditDetails: EditDetails,
    ClosePost: ClosePost,
    Gymmate: Gymmate,
    Favour: Favour,
    LookingFor: LookingFor,
    Selling: Selling,
    UpdatePost:UpdatePost,
    UserProfile:UserProfile
  },
  {
    initialRouteName: 'AuthLoading',
    headerMode: 'none',
  },
);

const Main = createAppContainer(AuthStack);
export const Navigation = () => {
  return <Main />;
};
