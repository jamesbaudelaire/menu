import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import { Nav } from "nav";
import { Pages } from "pages";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { Reducers } from "./redux/reducers";
const store = createStore(Reducers);

store.subscribe(() => {
  console.log(store.getState());
});

const GS = createGlobalStyle`

/* @import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto"); */

@import url("https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp");

:root{
--font1:'';
--font2:'';
}

body{
  margin:0;
  padding:0;
}

a{
  text-decoration:none;
  color:unset;
}

`;

const App = () => {
  return (
    <>
      <GS />
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
