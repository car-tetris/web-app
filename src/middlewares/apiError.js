import { apiErrorAction } from '../state/fe';
import {
  FE_API_ERROR_ADD
} from '../state/fe/feConstants';

/*
 * Api error middleware.
 */
const apiError = store => next => action => {
  const { type, error, ignore } = action;

  if(!error || typeof error !== 'object')
    return next(action);

  // do not listen to own constants
  if(type !== FE_API_ERROR_ADD) {
    let action = apiErrorAction.add(error);
    action.error.time = new Date();
    store.dispatch(action);
  }

  return next(action);
};

export default apiError;
