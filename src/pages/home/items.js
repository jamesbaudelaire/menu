import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FilterNav } from "./filterNav";
import { useSelector } from "react-redux";

import { IO } from "functions/IO";

const S = styled.div`
  .category-name {
    margin: 20px;
    font-size: 25px;
    text-transform: uppercase;
  }

  .items {
    white-space: nowrap;
    overflow-x: scroll;
  }

  .item {
    margin: 20px;
    margin-right: 0;

    display: inline-block;
    border-radius: 30px;
    height: 200px;
    width: calc(100% - 80px);

    background: var(--grey);
    background-size: cover;

    opacity: 0.5;
    transition: 0.5s;
    transform: scale(0.9);
    &.io {
      box-shadow: var(--shadow);
      opacity: 1;
      transform: scale(1);
    }
  }

  a:last-child {
    margin-right: 20px;
  }

  .notice {
    margin: 10px;
    text-align: center;
    font-family: var(--font2);
    color: #d50000;
    font-size: 15px;
  }

  .logo {
    width: calc(100% - 60px);
    margin: 20px auto;
    display: block;
  }
`;

export const Items = ({ restaurant, items }) => {
  const filter = useSelector(s => s.filter);

  const dark = useSelector(s => s.dark);
  let itemsCopy = items;

  if (filter) {
    items = items.filter(item => item.types.includes(filter));
  }

  let categories = () => [...new Set(items.map(item => item.category))];
  let categoryItems = category =>
    items.filter(item => item.category === category);

  useEffect(() => {
    let targets = document.querySelectorAll(".item");

    targets.forEach(IO);
  });

  return (
    <S>
      <img
        src={`https://res.cloudinary.com/baudelaire/image/upload/w_700/v1577778466/menu/${restaurant}/logo.png`}
        alt="logo"
        className="logo"
        style={{ filter: dark ? "invert(1)" : "invert(0)" }}
      />

      {categories().map(category => (
        <div className="category" key={category}>
          <div className="category-name"> {category}</div>
          <div className="items">
            {categoryItems(category).map(item => (
              <Link to={`${restaurant}/${item.url}`} key={item.url}>
                <div
                  data-url={`https://res.cloudinary.com/baudelaire/image/upload/w_700/v1577777469/menu/${restaurant}/${
                    item.url
                  }.jpg`}
                  className="item"
                />
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="notice">
        Consuming raw or undercooked meats, poultry, seafood shellfish, or eggs
        may increase your risk of foodborne illness!
      </div>

      <FilterNav items={itemsCopy} filter={filter} />
    </S>
  );
};
