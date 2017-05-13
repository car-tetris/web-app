import { combineReducers } from 'redux';

import cars from './cars/carsReducer';

const apiReducer = combineReducers({
  cars
});

export default apiReducer;
