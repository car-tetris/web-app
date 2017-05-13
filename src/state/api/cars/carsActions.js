import {
  CARS_ADD_DATA
} from '../apiConstants';

/**
 * @param {object} data
 */
export const data = (data) => ({
  type: CARS_ADD_DATA,
  data: data
});
