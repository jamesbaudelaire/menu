import React from "react";

import { Home } from "pages/home";
import { Saved } from "pages/saved";
import { Settings } from "pages/settings";

import { Route, Switch } from "react-router-dom";

export const Pages = () => {
  return (
    <Switch>
      <Route path="/saved" component={Saved} />
      <Route path="/settings" component={Settings} />
      <Route path="/:restaurant" component={Home} />
    </Switch>
  );
};
