import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  return (
    <S>
      <div className="items">
        {items.map(item => (
          <Link to={`${restaurant}/${item.url}`} key={item.url}>
            <div
              className="item"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/baudelaire/image/upload/w_500/v1561749060/menus-app/lbrr/crabcake.jpg')`
              }}
            />
          </Link>
        ))}
      </div>
    </S>
  );
};
