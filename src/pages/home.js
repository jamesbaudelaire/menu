import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Items } from "./home/items";
import { Item } from "./home/item";

import { Route, useParams } from "react-router-dom";
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
        <>
          <Route path="/:restaurant/:item">
            <Item items={Restaurants[restaurant].items} />
          </Route>
          <Items
            restaurant={restaurant}
            items={Restaurants[restaurant].items}
          />
        </>
      )}
    </S>
  );
};
