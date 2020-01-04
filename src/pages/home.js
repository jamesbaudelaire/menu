import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Restaurants } from "restaurants";

import { IO } from "functions/IO";

const S = styled.div`
  .title {
    font-size: 30px;
    margin: 20px;
  }

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

  @media screen and (min-width: 1200px) {
    .restaurants {
      display: grid;
      grid-template-columns: repeat(3, 300px);
      justify-content: center;
    }
  }
`;

export const Home = () => {
  useEffect(() => {
    let targets = document.querySelectorAll(".restaurant");
    targets.forEach((x, i) => {
      setTimeout(() => {
        IO(x);
      }, i * 50);
    });
  });

  return (
    <S id="home">
      <div className="title">RESTAURANTS</div>

      <div className="restaurants">
        {Object.keys(Restaurants).map(restaurant => (
          <Link to={`${restaurant}`} key={restaurant}>
            <div className="restaurant">
              <img
                className="logo"
                alt="logo"
                src={`
                https://res.cloudinary.com/baudelaire/image/upload/v1578175862/menu/${restaurant}/logo.png
                `}
              />
            </div>
          </Link>
        ))}
      </div>
    </S>
  );
};
