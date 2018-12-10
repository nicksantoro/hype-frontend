import { combineReducers } from 'redux';
import events from './events'
import auth from './auth'
import formSwitcher from './formSwitcher'

// reducers

export default combineReducers({
  events,
  auth,
  formSwitcher
})