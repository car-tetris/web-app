import { combineReducers } from 'redux';

//import api from './api/apiReducer';
import fe from './fe/feReducer';

const rootReducers = combineReducers({
  //api,
  fe
});

export default rootReducers;
