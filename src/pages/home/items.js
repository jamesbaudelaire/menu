import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FilterNav } from "./filterNav";
import { useSelector } from "react-redux";

import { IO } from "functions/IO";

import { version } from "version";

const S = styled.div`
  .category-name {
    margin: 20px;
    margin-bottom: 0;
    font-size: 24px;
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
    border-radius: 20px;
    height: 250px;
    width: calc(100% - 100px);

    background-color: black;
    background-size: cover;

    opacity: 0;
    transition: 0.3s;
    transform: scale(0.8);
    &.io {
      box-shadow: var(--shadow);
      opacity: 1;
      transform: scale(1);
    }
  }

  a:last-child {
    margin-right: 20px;
  }

  @media screen and (min-width: 500px) {
    display: grid;

    .item {
      width: 300px;
      &:hover,
      &.active {
        transform: scale(0.95);
        box-shadow: unset;
      }
    }

    .category {
      width: 100vw;
    }
  }

  @media screen and (min-width: 1000px) {
    box-shadow: inset 1px 1px 5px black;
    border-radius: 40px 0 0 0;
    position: absolute;
    margin-top: 120px;
    height: calc(100% - 120px);
    overflow: scroll;

    left: 430px;
    text-align: left;

    .category {
      width: calc(100vw - 430px);
    }
  }
`;

export const Items = ({ restaurant, items }) => {
  const filter = useSelector(s => s.filter);
  const lastItem = useSelector(s => s.lastItem);

  let itemsCopy = items;

  if (filter) {
    items = items
      .filter(item => item.types)
      .filter(item => item.types.includes(filter));
  }

  let categories = () => [...new Set(items.map(item => item.category))];
  let categoryItems = category =>
    items.filter(item => item.category === category);

  useEffect(() => {
    let targets = document.querySelectorAll(".item");
    targets.forEach(IO);
  });

  useEffect(() => {
    let item = document.getElementById(lastItem);
    if (item) {
      item.scrollIntoView({
        block: "center",
        inline: "center"
      });
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
                  data-img={`https://res.cloudinary.com/baudelaire/image/upload/w_700/${version}/menu/${restaurant}/${
                    item.url
                  }.jpg`}
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
