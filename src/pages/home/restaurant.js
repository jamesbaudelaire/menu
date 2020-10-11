import React, { useEffect } from "react";
import "../../styles/restaurant.scss";
import { Items } from "./items";
import { Item } from "./item";

import { Route, useParams, Switch } from "react-router-dom";
import { Restaurants } from "../../restaurants";
import { useDispatch } from "react-redux";
import { getRestaurant } from "../../redux/actions";

import { version } from "../../version";
import { Info } from "./restaurant-info";

export const Restaurant = () => {
  let { restaurant } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurant(restaurant));
  });

  return (
    <div id="restaurant">
      {Restaurants[restaurant] ? (
        <>
          <Switch>
            <Route path="/:restaurant/:item">
              <Item
                restaurant={Restaurants[restaurant]}
                items={Restaurants[restaurant].items}
              />
            </Route>
            <Route path="/:restaurant">
              <Items
                restaurant={restaurant}
                items={Restaurants[restaurant].items}
              />
            </Route>
          </Switch>
          <Info restaurant={restaurant} version={version} />
        </>
      ) : (
        <div className="not-found">
          <i className="material-icons-round">info</i>
          restaurant not found or no longer available
        </div>
      )}
    </div>
  );
};
