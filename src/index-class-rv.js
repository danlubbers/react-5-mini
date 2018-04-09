import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import "./index.css";

import store from './store';
import App from "./App";

ReactDOM.render(
    // Wrap App with Provider and add a store prop that equals our imported 'store'
    // This now makes Provider the root component and app.js is now the child of the Provider.
    // Provider is the component that is always listening for changes to the store
    <Provider store={ store }>
    <App />
    </Provider>
    
    , document.getElementById( 'root' ));
