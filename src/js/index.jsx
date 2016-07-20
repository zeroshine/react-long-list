import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';
import App from './containers/App';

import 'normalize.css/normalize.css';

const store = configureStore();

render(
  <Provider store={store}>
    <div style={{ display: 'flex' }}>
      <App />
    </div>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept(['./containers/App', './containers/App2'], () => {
    render(
      <Provider store={store}>
        <div style={{ display: 'flex' }}>
          <App />
        </div>
      </Provider>,
      document.getElementById('app')
    );
  });
}
