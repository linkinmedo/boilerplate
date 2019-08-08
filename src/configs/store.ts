import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "../reducers";
import rootSaga from "../sagas";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer(history), composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware)));

sagaMiddleware.run(rootSaga);
