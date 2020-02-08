import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Nav } from "./nav";
import { Pages } from "./pages";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { Reducers } from "./redux/reducers";

import { LS } from "functions/LS";
import { useAnimation } from "./functions/animation";

const store = createStore(Reducers);

store.subscribe(() => {
  LS.save(store.getState());
});

const GS = createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Averia+Serif+Libre|Open+Sans&display=swap");


@import url("https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp");


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
  font-size:14px;
  overscroll-behavior: contain;
  font-family:var(--font1);
  margin:0;
  padding:0;
  transition:.3s;
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
  background:var(--dark);
  color:var(--light)
}
}

i{
  transition:.3s;
  cursor: pointer;
  :active{
    transform:scale(.8)
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
  const load = useAnimation(1);

  return (
    <>
      <GS />

      <div id="app" {...load}>
        <BrowserRouter>
          <Pages />
          <Nav />
        </BrowserRouter>
      </div>
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
