import React from "react";

import { Restaurant } from "./pages/home/restaurant";
import { Saved } from "./pages/saved";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Admin } from "./pages/admin";

import { Route, Switch } from "react-router-dom";

export const Pages = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/saved" component={Saved} />
      <Route path="/about" component={About} />
      <Route path="/admin" component={Admin} />
      <Route path="/:restaurant" component={Restaurant} />
    </Switch>
  );
};
