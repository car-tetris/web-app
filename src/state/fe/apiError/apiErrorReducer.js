import {
  FE_API_ERROR_ADD,
  FE_API_ERROR_CLEAN
} from '../feConstants';

const initState = {
  // E.g.: post, get, ...
  lastRequestMethod: undefined,
  errors: []
};

const apiError = (state=initState, action) => {

  switch(action.type) {

    case FE_API_ERROR_ADD:
      return {
        ...state,
        errors: [action.error, ...state.errors]
      };

    case FE_API_ERROR_CLEAN:
      return {
        ...initState
      };

    default:
      return state

  }
};

export default apiError;
