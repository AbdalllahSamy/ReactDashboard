import React from "react";
import ReactDOM from "react-dom";

import './index.js';
import App from "./App";
import { ContextProvider } from "./context/ContextProvider.js";

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>
    , document.getElementById("root")
);