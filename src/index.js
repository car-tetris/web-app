import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { configureStore } from './utils/configureStore'
import Root from './Root'


const store = configureStore();

const rootElem = document.getElementById('root');

render(
  <Root store={store} />,
  rootElem
);

// Only development: reloading code
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default;
    render(
      <AppContainer>
        <NextRoot store={store} />
      </AppContainer>,
      rootElem
    );
  });
}
