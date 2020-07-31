import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Nav } from "./nav";
import { Pages } from "./pages";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { Reducers } from "./redux/reducers";

import { LS } from "./functions/LS";
import { useAnimation } from "./functions/animation";

const store = createStore(Reducers);

store.subscribe(() => {
  LS.save(store.getState());
});

const GS = createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Averia+Serif+Libre|Open+Sans&display=swap");



:root{
--font2:'Open Sans', sans-serif;
--font1:'Averia Serif Libre', cursive;
--dark:rgb(30,30,30);
--light:rgb(240,240,240);
--theme:#00c853;
--shadow:0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

::-webkit-scrollbar {
display: none;
}


body{
  background:var(--light);
  color:var(--dark);
  user-select:none;
  overscroll-behavior: contain;
  font-family:var(--font1);
  margin:0;
  font-size:14px;
  padding:0;
  ::after {
    content: "";
    display: block;
    height: 200px;
  }
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (prefers-color-scheme: dark) {
  background:var(--dark);
  color:var(--light)
}
}

a{
  text-decoration:none;
  color:unset;
}

.dark-mode{
@media (prefers-color-scheme: dark) {
  background:var(--dark) !important;
  color:var(--light) !important;
}
}

i{
  transition:.3s;
  cursor: pointer;
  :active{
    transform:scale(.8)
  }
}

#app{
  transition:.5s;
  opacity:0;
  &.loaded{
    opacity:1;
  }
}



@media screen and (min-width: 500px) {

width: 400px;
    margin: auto;
}
@media screen and (min-width: 1000px) {

body{
    margin: auto;
}

#saved,#home,#about{
  position: absolute;
    left: 160px;
    top: 40px;
}

}



`;

const App = () => {
  const load = useAnimation();

  return (
    <div id="app" {...load}>
      <GS />
      <div>
        <BrowserRouter>
          <Pages />
          <Nav />
        </BrowserRouter>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
