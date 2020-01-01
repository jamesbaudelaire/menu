import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Items } from "./items";
import { Item } from "./item";

import { Route, useParams, Switch } from "react-router-dom";
import { Restaurants } from "restaurants";
import { useDispatch } from "react-redux";
import { getRestaurant } from "redux/actions";
import { useSelector } from "react-redux";

const S = styled.div`
  .logo {
    width: calc(100% - 100px);
    margin: 20px auto;
    display: block;
  }

  .notice {
    margin: 30px;
    margin-top: 100px;
    text-align: center;
    font-family: var(--font2);
    color: #d50000;
    font-size: 15px;
  }

  .actions {
    font-family: var(--font2);
    text-align: center;
    .action {
      display: block;
      i {
        font-size: 30px;
        margin: 10px;
      }
    }
    margin-bottom: 20px;
  }
`;

const Info = () => {
  let { restaurant } = useParams();

  const dark = useSelector(s => s.dark);

  let R = Restaurants[restaurant];

  return (
    <>
      <img
        src={`https://res.cloudinary.com/baudelaire/image/upload/w_700/v1577778466/menu/${restaurant}/logo.png`}
        alt="logo"
        className="logo"
        style={{ filter: dark ? "invert(1)" : "invert(0)" }}
      />

      <div className="actions">
        <a className="action" href={`tel:${R.phone}`} rel="noopener noreferrer">
          <i
            style={{ color: dark ? "var(--light)" : "var(--dark)" }}
            className="material-icons-round"
          >
            phone
          </i>
          {R.phone}
        </a>

        <a
          className="action"
          href={`${R.location.address}`}
          rel="noopener noreferrer"
        >
          <i
            style={{ color: dark ? "var(--light)" : "var(--dark)" }}
            className="material-icons-round"
          >
            near_me
          </i>
          {R.location.name}
        </a>
      </div>
    </>
  );
};

export const Restaurant = () => {
  let { restaurant } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurant(restaurant));
    window.scroll(0, 0);
  });

  return (
    <S>
      {Restaurants[restaurant] && (
        <Switch>
          <Route path="/:restaurant/:item">
            <Item
              restaurant={Restaurants[restaurant]}
              items={Restaurants[restaurant].items}
            />
            <Info />
          </Route>
          <Route path="/:restaurant">
            <Info />
            <Items
              restaurant={restaurant}
              items={Restaurants[restaurant].items}
            />
          </Route>
        </Switch>
      )}

      <div className="notice">
        Consuming raw or undercooked meats, poultry, seafood shellfish, or eggs
        may increase your risk of foodborne illness!
      </div>
    </S>
  );
};
