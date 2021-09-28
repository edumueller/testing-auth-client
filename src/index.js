import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import Feature from "./components/Feature";
import Signout from "./components/auth/Signout";
import reducers from "./reducers";
import { applyMiddleware } from "redux";

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") },
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/feature" exact component={Feature} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signout" exact component={Signout} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
