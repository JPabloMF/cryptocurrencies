import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeEnhancers } from '../constants';

import apiReducer from './reducers';
import mySaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ crypto: apiReducer }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);

export default store;
