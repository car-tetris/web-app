import {
  FE_SELECT_CAR_ADD
} from '../feConstants';

/**
 * Car data.
 * @param {object} car
 */
export const addCar = (car) => ({
  type: FE_SELECT_CAR_ADD,
  car: car
});
