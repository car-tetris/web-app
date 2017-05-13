import { combineReducers } from 'redux';

import apiError from './apiError/apiErrorReducer';

const feReducer = combineReducers({
  apiError
});

export default feReducer;
