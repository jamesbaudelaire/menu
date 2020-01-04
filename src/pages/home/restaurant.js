import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Items } from "./items";
import { Item } from "./item";

import { Route, Link, useParams, Switch } from "react-router-dom";
import { Restaurants } from "restaurants";
import { useDispatch } from "react-redux";
import { getRestaurant } from "redux/actions";
import { useSelector } from "react-redux";

import { Load } from "functions/load";

const S = styled.div`
  .logo {
    width: calc(100% - 100px);
    margin: 20px auto;
    display: block;
    max-width: 300px;
  }

  .actions {
    font-family: var(--font2);
    text-align: center;
    .action {
      display: block;
      i {
        font-size: 40px;
        margin: 10px;
      }
    }
    margin-bottom: 50px;
  }

  .item-info {
    opacity: 0;
    transition: 0.5s;
    &.loading {
      opacity: 1;
    }
  }

  @media screen and (min-width: 1200px) {
    .item-info {
      position: fixed;
      left: 100px;
      top: 80px;
    }
  }
`;

const Info = () => {
  let { restaurant } = useParams();

  const dark = useSelector(s => s.dark);

  let R = Restaurants[restaurant];

  const { loading } = Load();

  return (
    <div className={loading ? "item-info loading" : "item-info"}>
      <Link to={`/${restaurant}`}>
        <img
          src={`
          https://res.cloudinary.com/baudelaire/image/upload/v1578175862/menu/${restaurant}/logo.png
          `}
          alt="logo"
          className="logo"
          style={{ filter: dark ? "invert(1)" : "invert(0)" }}
        />
      </Link>

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
    </div>
  );
};

export const Restaurant = () => {
  let { restaurant } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurant(restaurant));
  });

  return (
    <S>
      {Restaurants[restaurant] ? (
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
      ) : (
        <div className="not-found">???</div>
      )}
    </S>
  );
};
