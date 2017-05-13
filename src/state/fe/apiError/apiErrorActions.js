import {
  FE_API_ERROR_ADD,
  FE_API_ERROR_CLEAN,
  FE_API_ERROR_REQUEST_METHOD
} from '../feConstants';

/**
 * Add a error.
 * @param {object} error
 */
export const add = (error) => ({
  type: FE_API_ERROR_ADD,
  error: error
});

/**
 * Clean error logs.
 */
export const clean = () => ({
  type: FE_API_ERROR_CLEAN,
});

/**
 * Set the last request method.
 */
export const setRequestMethod = (data) => ({
  type: FE_API_ERROR_REQUEST_METHOD,
  data: data
});
