import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Route, IndexRoute } from 'react-router';


// Route containers:

import App from './containers/App';
import SelectCar from './containers/SelectCar';
import SelectItems from './containers/SelectItems';

import Error from './containers/Error';

/**
 * Returns routes and checks authentication using onEnter prop from react-router.
 *
 * @param {object} store
 * @returns JSX
 */
export default (store) => {

  /**
   * Check authentication and handle redirect to login page.
   *
   * @param {object} nextState - from react-router
   * @param {function} replace - from react-router
   */
  const requireAuth = (nextState, replace) => {
    // Ignore this function.
    return true;
    const { api: { apiUser }} = store.getState();
    if(!apiUser.token) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }}
      );
    }
  };

  return(
    <Route path="/">

      <Route component={App} onEnter={requireAuth}>

        <IndexRoute component={SelectCar} />

        <Route path="/selectItems" component={SelectItems} />

      </Route>

      {/* Error */}
      <Route path="*" component={Error} />

    </Route>
  )

}
