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
  grid-template-columns: ${props =>
    props.restaurant !== null ? "repeat(4, 1fr)" : "repeat(3, 1fr)"};
  background: var(--theme1);
  text-align: center;

  .page-link {
    padding: 10px;
    color: var(--light);
    i {
      display: block;
      font-size: 25px;
    }
  }

  .page-link * {
    transition: 0.3s;
  }

  .active {
    .page-link {
      color: var(--dark);
      i {
        color: var(--dark);
      }
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
          home
        </div>
      </NavLink>

      {restaurant !== null && (
        <NavLink exact to={`/${restaurant}`}>
          <div className="page-link">
            <i className="material-icons-round">menu_book</i>
            menu
          </div>
        </NavLink>
      )}

      {Pages.map(x => (
        <NavLink key={x.name} exact to={x.location}>
          <div className="page-link">
            <i className="material-icons-round">{x.icon}</i>
            {x.name}
          </div>
        </NavLink>
      ))}
    </S>
  );
};
