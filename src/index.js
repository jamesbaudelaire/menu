import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Nav } from "nav";
import { Pages } from "pages";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { Reducers } from "./redux/reducers";
import { useSelector } from "react-redux";

import { LS } from "functions/LS";

import { Load } from "functions/load";

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
--theme1:#304ffe;
--theme2:#ffd600;
--theme3:#1a237e;
--shadow:0 10px 6px -6px rgba(0,0,0,.5);

}

::-webkit-scrollbar {
display: none;
}

#app{
opacity:0;
transition:.5s;
&.loading{
 opacity:1 
}
}

body{
  user-select:none;
  overscroll-behavior: contain;
  font-family:var(--font1);
  transition:.5s;
  margin:0;
  padding:0;
  background:${props => (props.dark ? "var(--dark)" : "var(--light)")};
  color:${props => (props.dark ? "var(--light)" : "var(--dark)")};

  ::after {
    content: "";
    display: block;
    height: 200px;
  }
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

a{
  text-decoration:none;
  color:unset;
}

i{
  cursor: pointer;
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
    left: 140px;
    top: 40px;
}

}

@media screen and (min-width: 1000px) {


}



`;

const App = () => {
  const dark = useSelector(state => state.dark);

  const { loading } = Load();

  return (
    <div id="app" className={loading ? "loading" : ""}>
      <GS dark={dark} />
      <BrowserRouter>
        <Pages />
        <Nav />
      </BrowserRouter>
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
