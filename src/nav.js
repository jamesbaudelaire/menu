import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const S = styled.div`
  position: fixed;
  box-shadow: inset 1px 1px 5px black;
  border-radius: 40px 40px 0 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  max-width: 500px;
  background: var(--light);
  padding-bottom: 10px;
  left: 0;
  height: 70px;
  right: 0;
  margin: auto;
  text-transform: uppercase;
  display: grid;
  font-family: var(--font1);
  grid-template-columns: ${props =>
    props.restaurant !== null ? "repeat(4, 1fr)" : "repeat(3, 1fr)"};
  text-align: center;

  .page-link {
    padding: 5px;
    border-radius: 50px;
    margin: 10px;
    transition: 0.3s;
    span {
    }
    i {
      transition: none;
      :active {
        transform: none;
      }
      display: block;
      font-size: 24px;
    }
  }

  .active {
    .page-link {
      color: var(--theme);
    }
  }

  @media screen and (min-width: 1000px) {
    position: fixed;
    left: 0px;
    right: unset;
    padding: 10px 0 10px 0;
    width: 80px;
    margin: 20px;
    height: auto;
    grid-template-columns: 1fr;
    border-radius: 60px;

    .page-link{
      margin:0;
      margin-bottom:5px;
    }
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
    <S restaurant={restaurant} className="dark-mode">
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
