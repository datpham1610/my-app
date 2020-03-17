import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import './css/bootstrap.min.css'
import './css/styles.css'
import * as serviceWorker from "./serviceWorker";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import countReducer from './reducers'

let store = createStore(countReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
