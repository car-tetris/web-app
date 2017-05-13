import {
  FE_SELECT_CAR_ADD
} from '../feConstants';

const initState = null;

const selectCar = (state=initState, action) => {

  switch(action.type) {

    case FE_SELECT_CAR_ADD:
      return {
        ...state,
        ...action.car
      };

    default:
      return state

  }
};

export default selectCar;
