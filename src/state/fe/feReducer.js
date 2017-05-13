import { combineReducers } from 'redux';

import apiError from './apiError/apiErrorReducer';
import selectCar from './selectCar/selectCarReducer';

const feReducer = combineReducers({
  apiError,
  selectCar
});

export default feReducer;
