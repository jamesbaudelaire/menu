import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Nav } from "./nav";
import { Pages } from "./pages";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { Reducers } from "./redux/reducers";

import { LS } from "./functions/LS";

import "./index.scss";
import "./desktop.scss";

const store = createStore(Reducers);

store.subscribe(() => {
  LS.save(store.getState());
});

const App = () => {
  return (
    <div id="app">
      <BrowserRouter>
        <Pages />
        <Nav />
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
