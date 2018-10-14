import { Provider } from "mobx-react";
import "normalize.css";
import * as React from "react";
import * as ReactDOM from "react-dom";

import "antd/dist/antd.css";
import App from "./components/app";
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("index")
);
