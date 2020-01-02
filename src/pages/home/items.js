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

    background-color: var(--theme1);
    background-size: cover;

    opacity: 0.5;
    transition: 0.5s;
    transform: scale(0.9);
    &.io {
      opacity: 1;
      box-shadow: var(--shadow);
      transform: scale(1);
    }
  }

  a:last-child {
    margin-right: 20px;
  }
`;

export const Items = ({ restaurant, items }) => {
  const filter = useSelector(s => s.filter);
  const lastItem = useSelector(s => s.lastItem);

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

  useEffect(() => {
    if (lastItem) {
      document
        .getElementById(lastItem)
        .scrollIntoView({ block: "center", inline: "center" });
    }
  }, [lastItem]);

  return (
    <S>
      {categories().map(category => (
        <div className="category" key={category}>
          <div className="category-name"> {category}</div>
          <div className="items">
            {categoryItems(category).map(item => (
              <Link to={`${restaurant}/${item.url}`} key={item.url}>
                <div
                  style={{
                    backgroundImage: `url('https://res.cloudinary.com/baudelaire/image/upload/w_500/v1577777469/menu/${restaurant}/${
                      item.url
                    }.jpg')`
                  }}
                  className="item"
                  id={item.url}
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
