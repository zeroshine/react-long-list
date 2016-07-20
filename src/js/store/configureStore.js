import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';


let createStoreWithMiddleware = applyMiddleware(
  createLogger({ logErrors: false }),
)(createStore);

if (process.env.NODE_ENV === 'production') {
  createStoreWithMiddleware = applyMiddleware(
  )(createStore);
}

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
