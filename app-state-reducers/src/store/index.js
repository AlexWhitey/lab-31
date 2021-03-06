import { createStore, combineReducers, applyMiddleware } from 'redux';

import reporter from './middleware/reporter.js.js';
import appReducer from './app-reducers.js.js';

let reducers = combineReducers({
  app: appReducer,
});

export default () => createStore(reducers, applyMiddleware(reporter));

// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
