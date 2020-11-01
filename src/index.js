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

const store = createStore(Reducers);

store.subscribe(() => {
  LS.save(store.getState());
});

const App = () => {
  return (
    <BrowserRouter>
      <Pages />
      <Nav />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
