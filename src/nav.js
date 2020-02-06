import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const S = styled.div`
  position: fixed;
  border-radius: 40px 40px 0 0;
  bottom: 0;
  z-index: 100;
  left: 0;
  width: 100%;
  display: grid;
  font-family: var(--font2);
  grid-template-columns: ${props =>
    props.restaurant !== null ? "repeat(4, 1fr)" : "repeat(3, 1fr)"};
  background: var(--theme1);
  text-align: center;

  .page-link {
    padding: 10px;
    color: black;
    transition: 0.3s;

    :active {
      transform: scale(0.8);
    }
    span {
    }
    i {
      transition: none;
      :active {
        transform: none;
      }
      display: block;
      font-size: 25px;
    }
  }

  .active {
    .page-link {
      color: var(--theme2);
    }
  }

  @media screen and (min-width: 1000px) {
    position: fixed;
    left: 0;
    top: 0;
    bottom: unset;
    padding: 10px 0 10px 0;
    width: 100px;
    margin: 20px;
    grid-template-columns: 1fr;
    border-radius: 60px;
    box-shadow: var(--shadow);
  }
`;

const Pages = [
  {
    name: "saved",
    location: "/saved",
    icon: "favorite"
  },
  {
    name: "about",
    location: "/about",
    icon: "help"
  }
];

export const Nav = () => {
  const restaurant = useSelector(state => state.restaurant);

  return (
    <S restaurant={restaurant}>
      <NavLink exact to={`/`}>
        <div className="page-link">
          <i className="material-icons-round">home</i>
          <span>home</span>
        </div>
      </NavLink>

      {restaurant !== null && (
        <NavLink exact to={`/${restaurant}`}>
          <div className="page-link">
            <i className="material-icons-round">menu_book</i>
            <span>menu</span>
          </div>
        </NavLink>
      )}

      {Pages.map(x => (
        <NavLink key={x.name} exact to={x.location}>
          <div className="page-link">
            <i className="material-icons-round">{x.icon}</i>
            <span>{x.name}</span>
          </div>
        </NavLink>
      ))}
    </S>
  );
};
