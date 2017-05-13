import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from '../state/reducers'
import rootSagas from '../state/sagas'
import middlewares from '../middlewares'
import { loadState, saveState } from './state/localStorage'
import throttle from 'lodash/throttle'


const persistWhitelist = ['selectCar'];


/**
 * Configure store with reducers, initialState, sagas.
 *
 * @returns {object} Store
 */
export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducers,
    loadState(),
    applyMiddleware(
      ...middlewares,
      sagaMiddleware
    )
  );

  sagaMiddleware.run(rootSagas);

  // save states every second to localStorage
  store.subscribe(throttle(() => {
    saveState(store.getState(), persistWhitelist)
  }, 1000));

  return store;
};


