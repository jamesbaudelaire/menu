import React, { useEffect } from "react";
import styled from "styled-components";
import { ItemNav } from "./itemNav";
import { useParams } from "react-router-dom";

import { Load } from "functions/load";
import { Restaurants } from "../../restaurants";

import { useDispatch } from "react-redux";
import { lastItem } from "redux/actions";

const S = styled.div`
  .item {
    opacity: 0;
    transition: opacity 0.5s;
    &.loading {
      opacity: 1;
    }
  }

  .img {
    width: 100%;
    height: 250px;
    background-size: cover;
  }
  .details {
    position: relative;
    padding: 20px;
  }
  .name {
    font-size: 25px;
  }
  .price {
    font-size: 25px;
    position: absolute;
    right: 0;
    top: 0;
    margin: 20px;
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
      font-size: 15px;
    }
  }
  .info {
    margin: 20px;
    font-size: 15px;
    font-family: var(--font2);
  }

  .not-found {
    text-align: center;
    margin: 20px;
    font-family: var(--font2);
  }

  @media screen and (min-width: 500px) {
    width: 400px;
    margin: 20px auto;
    margin-top: 50px;
  }

  @media screen and (min-width: 1000px) {
    position: absolute;
    left: 400px;
    top: 100px;

    .img {
      border-radius: 10px;
    }
  }
`;

export const Item = ({ items }) => {
  let { restaurant, item } = useParams();
  let search = items.filter(i => i.url == item)[0];

  const { loading } = Load();

  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(lastItem(search.url));
  });

  return (
    <S>
      {search ? (
        <div className={loading ? "item loading" : "item"}>
          <div
            className="img"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/baudelaire/image/upload/w_700/v1578175862/menu/${restaurant}/${
                search.url
              }.jpg')`
            }}
          />
          <div className="details">
            <div className="name">{search.name}</div>

            <div className="price">{search.price}</div>
            <div className="info">{search.info}</div>

            {search.toppings && (
              <div className="toppings">
                TOPPINGS
                <br />
                {search.toppings.map(topping => (
                  <div key={topping} className="topping">
                    {topping}
                  </div>
                ))}
              </div>
            )}

            {search.category == "entree" && (
              <div className="sides">
                SIDES
                <br />
                {Restaurants[restaurant].sides.map(side => (
                  <div key={side} className="side">
                    {side}
                  </div>
                ))}
              </div>
            )}

            {search.category == "salad" && (
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
        </div>
      ) : (
        <div className="not-found">
          Item doesn't exist or no longer available
        </div>
      )}

      <ItemNav item={search} />
    </S>
  );
};
