import { applyMiddleware, compose, createStore, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import table from './tableReducer';
import  tableSaga  from './tableSaga';

// root saga and root reducer
export function* rootSaga() {
  yield all([
    tableSaga(),
  ]);
}

const rootReducer = combineReducers({ table });
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

export default store;
