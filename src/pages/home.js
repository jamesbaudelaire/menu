import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Items } from "./home/items";
import { Item } from "./home/item";

import { Route, useParams, Switch } from "react-router-dom";
import { Restaurants } from "restaurants";
import { useDispatch } from "react-redux";
import { getRestaurant } from "redux/actions";

const S = styled.div``;

export const Home = () => {
  let { restaurant } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant(restaurant));
  });

  return (
    <S>
      {Restaurants[restaurant] && (
        <Switch>
          <Route path="/:restaurant/:item">
            <Item
              restaurant={Restaurants[restaurant].name}
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
      )}
    </S>
  );
};
