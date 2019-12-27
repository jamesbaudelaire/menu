import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import { Nav } from "nav";
import { Pages } from "pages";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { Reducers } from "./redux/reducers";
import { useSelector } from "react-redux";

import { LS } from "functions/LS";

const store = createStore(Reducers);

store.subscribe(() => {
  LS.save(store.getState());
});

const GS = createGlobalStyle`

/* @import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto"); */

@import url("https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp");

:root{
--font1:'';
--font2:'';
--dark:rgb(30,30,30);
--light:rgb(240,240,240);
--theme:red;
}


body{
  margin:0;
  padding:0;
  background:${props => (props.dark ? "var(--dark)" : "var(--light)")};
  color:${props => (props.dark ? "var(--light)" : "var(--dark)")};

  ::after {
    content: "";
    display: block;
    height: 200px;
  }
  user-select:none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

a{
  text-decoration:none;
  color:unset;
}



`;

const App = () => {
  const dark = useSelector(state => state.dark);
  return (
    <>
      <GS dark={dark} />
      <BrowserRouter>
        <Pages />
        <Nav />
      </BrowserRouter>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
