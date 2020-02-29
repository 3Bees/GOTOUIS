import {combineReducers} from 'redux';
import {RootRed,Userdata} from './RootRed'

export default combineReducers({
    Root: RootRed,
    User:Userdata
  });