import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl';
import { Router, browserHistory } from 'react-router'
import configureIntl from './utils/configureIntl';
import getRoutes from './routes'
import registerServiceWorker from './utils/service-worker';


/**
 * Root is the first Component.
 * It integrates several providers like store provider from react-redux and the router from react-router.
 */
class Root extends Component {

  static routes;

  constructor(props) {
    super(props);

    registerServiceWorker();

    // do not re-render routes
    this.routes = getRoutes(this.props.store)
  }

  render() {
    const { store } = this.props;
    const { locale, intlData } = configureIntl();

    return(
      <Provider store={store}>
        <IntlProvider {...intlData}>
          <Router history={browserHistory} routes={this.routes} />
        </IntlProvider>
      </Provider>
    )
  }
}

Root.PropTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
