import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FilterNav } from "./filterNav";
import { useSelector } from "react-redux";

const S = styled.div`
  .category-name {
    margin: 20px;
  }

  .items {
    white-space: nowrap;
    overflow-x: scroll;
  }

  .item {
    margin: 20px;
    display: inline-block;
    height: 200px;
    width: 300px;
    background: red;
  }
`;

export const Items = ({ restaurant, items }) => {
  const filter = useSelector(s => s.filter);

  let itemsCopy = items;

  if (filter) {
    items = items.filter(item => item.types.includes(filter));
  }

  // let filterItems = x => {
  //   if (filter == x) {
  //     setFilter(null);
  //   } else {
  //     setFilter(x);
  //   }
  // };

  let categories = () => [...new Set(items.map(item => item.category))];
  let categoryItems = category =>
    items.filter(item => item.category === category);

  return (
    <S>
      <img src="" alt="logo" />

      {categories().map(category => (
        <div className="category" key={category}>
          <div className="category-name"> {category}</div>
          <div className="items">
            {categoryItems(category).map(item => (
              <Link to={`${restaurant}/${item.url}`} key={item.url}>
                <div
                  className="item"
                  style={{
                    backgroundImage: `url('https://res.cloudinary.com/baudelaire/image/upload/w_500/v1561749060/menus-app/${restaurant}/${
                      item.url
                    }.jpg')`
                  }}
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
