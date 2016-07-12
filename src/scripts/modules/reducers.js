import { combineReducers, } from 'redux';

import signIn  from './signIn/reducer';
import signOut from './signOut/reducer';



export default combineReducers({
  auth: signIn.merge(signOut),
});