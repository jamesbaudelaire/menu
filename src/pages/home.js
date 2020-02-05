import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Restaurants } from "restaurants";

import { useDispatch } from "react-redux";
import { lastItem, filterItems } from "redux/actions";
import { IO } from "functions/IO";

import { version } from "version";

const S = styled.div`
  .title {
    font-size: 30px;
    margin: 20px;
  }

  .restaurant {
    width: calc(100% - 40px);
    max-width: 300px;
    border-radius: 20px;
    margin: 20px auto;
    box-shadow: var(--shadow);
    background: var(--theme1);
    height: 150px;
    position: relative;

    opacity: 0;
    transition: 0.3s;
    transform: translateY(30px);
    &.io {
      box-shadow: var(--shadow);
      opacity: 1;
      transform: translateY(0px);
    }

    .logo {
      filter: invert();
      width: calc(100% - 60px);
      display: block;
      margin: auto;
      top: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  @media screen and (min-width: 500px) {
    .restaurants {
      display: grid;
      grid-template-columns: repeat(2, 2fr);
    }
  }

  @media screen and (min-width: 1000px) {
    .restaurants {
      grid-template-columns: repeat(2, 300px);
    }
  }
`;

export const Home = () => {
  const dispatch = useDispatch();

  const reset = () => {
    dispatch(lastItem(""));
    dispatch(filterItems(""));
  };

  useEffect(() => {
    let targets = document.querySelectorAll(".restaurant");
    targets.forEach((x, i) => {
      setTimeout(() => {
        IO(x);
      }, i * 50);
    });

    reset();
  });

  return (
    <S id="home">
      <div className="title">RESTAURANTS</div>

      <div className="restaurants">
        {Object.keys(Restaurants).map(restaurant => (
          <Link to={`${restaurant}`} key={restaurant}>
            <div
              className="restaurant"
              style={{ background: `#${Restaurants[restaurant].theme}` }}
            >
              <img
                className="logo"
                alt="logo"
                src={`
                https://res.cloudinary.com/baudelaire/image/upload/${version}/menu/${restaurant}/logo.png
                `}
              />
            </div>
          </Link>
        ))}
      </div>
    </S>
  );
};
