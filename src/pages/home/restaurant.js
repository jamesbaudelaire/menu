import React, { useEffect } from "react";
import styled from "styled-components";

import { Items } from "./items";
import { Item } from "./item";

import { Route, Link, useParams, Switch } from "react-router-dom";
import { Restaurants } from "../../restaurants";
import { useDispatch } from "react-redux";
import { getRestaurant } from "../../redux/actions";

import { version } from "../../version";
import { Info } from "./restaurant-info";

const S = styled.div`
  .item-info {
    font-family: var(--font1);
  }
  .logo {
    margin: 20px auto;
    display: block;
    max-width: 200px;

    @media (prefers-color-scheme: dark) {
      filter: invert();
    }
  }

  .actions {
    margin: 0 20px;
    .action {
      display: block;
      i {
        color: #6200ea;
        font-size: 30px;
        margin: 10px;
      }
    }
  }

  .not-found {
    text-align: center;
    font-family: var(--font2);
    margin: 40px;
    i {
      font-size: 40px;
      color: #d50000;
      margin: 10px;
      display: block;
    }
  }

  @media screen and (min-width: 1000px) {
    .item-info {
      position: fixed;
      left: 30px;
      top: 20px;
      .logo {
        margin: 0;
      }
      .actions {
        margin: 0;
      }
    }
  }
`;

export const Restaurant = () => {
  let { restaurant } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurant(restaurant));
  });

  return (
    <S>
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
    </S>
  );
};
