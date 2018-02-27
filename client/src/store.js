
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = applyMiddleware(thunk, promise, logger);

const store = createStore(
  rootReducer,
  compose(
    middleware,
    devTools
  )
);

export default store;