import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import {createStore, applyMiddleware} from "redux";
import reducer from './reducers';
import {Provider} from "react-redux";
import {logger} from "redux-logger";
import thunk from "redux-thunk";

// step1: create the react store

const store = createStore(reducer, applyMiddleware(logger, thunk));

// step2: Provide the react store to all components
const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.