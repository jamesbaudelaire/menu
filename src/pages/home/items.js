import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FilterNav } from "./filterNav";
import { useSelector } from "react-redux";

import { IO } from "functions/IO";

const S = styled.div`
  .category-name {
    margin: 20px;
    margin-bottom: 0;
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
    border-radius: 10px;
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
`;

export const Items = ({ restaurant, items }) => {
  const filter = useSelector(s => s.filter);

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

      <FilterNav items={itemsCopy} filter={filter} />
    </S>
  );
};
