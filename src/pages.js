import React from "react";

import { Restaurant } from "pages/home/restaurant";
import { Saved } from "pages/saved";
import { Settings } from "pages/settings";
import { Home } from "pages/home";

import { Route, Switch } from "react-router-dom";

export const Pages = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/saved" component={Saved} />
      <Route path="/settings" component={Settings} />
      <Route path="/:restaurant" component={Restaurant} />
    </Switch>
  );
};
