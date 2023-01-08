import React from "react";
import reactDom from "react-dom";
import App from "./App";

import { store } from "./store";
import { Provider } from "react-redux";
import {BrowserRouter} from 'react-router-dom'

reactDom.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
, document.getElementById("root"));