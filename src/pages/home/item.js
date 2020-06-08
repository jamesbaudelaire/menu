import React, { useEffect } from "react";
import styled from "styled-components";
import { ItemNav } from "./itemNav";
import { useParams } from "react-router-dom";

import { Restaurants } from "restaurants";

import { useDispatch } from "react-redux";
import { lastItem } from "redux/actions";

import { version } from "version";

import { useAnimation } from "functions/animation";

const S = styled.div`
  .img {
    width: 100%;
    height: 350px;
    background-size: cover;
  }
  .details {
    position: relative;
    padding: 20px;

    opacity: 0;
    transition: 0.5s;
    &.loaded {
      opacity: 1;
    }
  }
  .name {
    font-size: 24px;
  }
  .price {
    font-size: 20px;
    font-family: var(--font2);
    margin: 10px;
  }
  .sides,
  .toppings,
  .dressings {
    margin: 20px;
    font-size: 20px;
    .side,
    .dressing,
    .topping {
      font-family: var(--font2);
      display: inline-block;
      margin: 5px 10px;
      font-size: 14px;
    }
  }
  .info {
    margin: 20px;
    font-family: var(--font2);
  }

  @media screen and (min-width: 500px) {
    width: 450px;
    margin: 20px auto;
    .img {
      border-radius: 10px;
      box-shadow: var(--shadow);
    }
  }

  @media screen and (min-width: 1000px) {
    position: absolute;
    left: 300px;
    top: 20px;
  }
`;

export const Item = ({ items }) => {
  let { restaurant, item } = useParams();
  let search = items.filter(i => i.url == item)[0];

  const dispatch = useDispatch(1);

  useEffect(() => {
    window.scroll(0, 0);
    if (search) {
      dispatch(lastItem(search.url));
    }
  });

  const load = useAnimation();

  return (
    <S>
      <div id="item">
        {search ? (
          <>
            <div
              className="img"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/baudelaire/image/upload/w_700/${version}/menu/${restaurant}/${
                  search.url
                }.jpg')`
              }}
            />
            <div className="details" {...load}>
              <div className="name">{search.name}</div>
              <div className="info">{search.info}</div>

              {search.sides && (
                <div className="sides">
                  {search.sides.map(side => (
                    <div className="side" key={side}>
                      {side}
                    </div>
                  ))}
                </div>
              )}

              {search.types && search.types.includes("salad") && (
                <div className="dressings">
                  DRESSINGS
                  <br />
                  {Restaurants[restaurant].dressings.map(dressing => (
                    <div key={dressing} className="dressing">
                      {dressing}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <ItemNav item={search} />
          </>
        ) : (
          <div className="not-found">
            <i className="material-icons-round">info</i>
            item not found or no longer available
          </div>
        )}
      </div>
    </S>
  );
};
