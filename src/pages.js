import React from "react";

import { Restaurant } from "./pages/home/restaurant";
import { Saved } from "./pages/saved";
import { About } from "./pages/about";
import { Home } from "./pages/home";

import { Route, Switch } from "react-router-dom";

export const Pages = () => {


  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/saved" component={Saved} />
      <Route path="/about" component={About} />
      <Route path="/:restaurant" component={Restaurant} />
    </Switch>
  );
};
