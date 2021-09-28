import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";

import App from "./components/App";
import Welcome from "./components/Welcome";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome} />
    </App>
  </BrowserRouter>,
  document.querySelector("#root")
);
