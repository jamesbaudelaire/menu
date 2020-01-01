import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Restaurants } from "restaurants";

import { useSelector } from "react-redux";

const S = styled.div``;

export const Home = () => {
  const dark = useSelector(s => s.dark);

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <S>
      {Object.keys(Restaurants).map(restaurant => (
        <Link to={`${restaurant}`} key={restaurant}>
          <img
            src={`https://res.cloudinary.com/baudelaire/image/upload/w_700/v1577778466/menu/${restaurant}/logo.png`}
            alt="logo"
            className="logo"
            style={{ filter: dark ? "invert(1)" : "invert(0)" }}
          />
        </Link>
      ))}
    </S>
  );
};
