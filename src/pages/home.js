import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Restaurants } from "restaurants";

import { IO } from "functions/IO";

const S = styled.div`
  .restaurant {
    width: calc(100% - 40px);
    border-radius: 10px;
    margin: 20px;
    box-shadow: var(--shadow);
    background: var(--theme1);
    height: 150px;
    position: relative;

    opacity: 0;
    transition: 0.5s;
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
`;

export const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);

    let targets = document.querySelectorAll(".restaurant");
    targets.forEach((x, i) => {
      setTimeout(() => {
        IO(x);
      }, i * 50);
    });
  });

  return (
    <S>
      <div className="restaurants">
        {Object.keys(Restaurants).map(restaurant => (
          <Link to={`${restaurant}`} key={restaurant}>
            <div className="restaurant">
              <img
                className="logo"
                alt="logo"
                src={`https://res.cloudinary.com/baudelaire/image/upload/w_700/v1577778466/menu/${restaurant}/logo.png`}
              />
            </div>
          </Link>
        ))}
      </div>
    </S>
  );
};
