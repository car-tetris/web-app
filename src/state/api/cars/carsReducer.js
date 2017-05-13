import {
  CARS_ADD_DATA
} from '../apiConstants';

const initState = {
  data: null
};

const cars = (state=initState, action) => {

  switch(action.type) {

    case CARS_ADD_DATA:
      return {
        ...state,
        data: action.data
      };

    default:
      return state

  }
};

export default cars;
