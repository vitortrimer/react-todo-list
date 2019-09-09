import React from 'react';
import { hot } from "react-hot-loader/root";
import Root from "./components/Root";
import { Provider } from "react-redux";
import AppReducer from "./reducers/app";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import "./styles/css/main.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  AppReducer, composeEnhancers(applyMiddleware(thunk))
)

const App = () => {
  return(
    <Provider store={ store }>
      <Root />
    </Provider>
  )
}

export default hot(App);

