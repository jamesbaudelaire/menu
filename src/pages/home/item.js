import React, { useEffect } from "react";
import styled from "styled-components";
import { ItemNav } from "./itemNav";
import { useParams } from "react-router-dom";

const S = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  .img {
    width: 100%;
    height: 250px;
    background-size: cover;
  }
  .details {
    position: relative;
    padding: 20px;
  }
  .price {
    position: absolute;
    right: 0;
    top: 0;
    margin: 20px;
  }
  .type {
    margin: 20px;
  }
  .side {
    margin: 20px;
  }
`;

export const Item = ({ items, restaurant }) => {
  let { item } = useParams();
  let search = items.filter(i => i.url == item)[0];

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <S>
      {search && (
        <>
          <div
            className="img"
            style={{ backgroundImage: `url(${search.url})` }}
          />
          <div className="details">
            <div className="name">{search.name}</div>
            <div className="types">
              {search.types.map(type => (
                <div className="type" key={type}>
                  {type}
                </div>
              ))}
            </div>
            <div className="price">{search.price}</div>
            <div className="info">{search.info}</div>
            <div className="sides">
              {search.sides.map(side => (
                <div key={side} className="side">
                  {side}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <ItemNav item={search} name={restaurant} />
    </S>
  );
};
