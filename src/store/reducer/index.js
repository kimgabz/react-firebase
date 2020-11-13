import { combineReducers } from 'redux';
import { linkReducer } from './link.reducer';

export default combineReducers({
  link: linkReducer,
});
