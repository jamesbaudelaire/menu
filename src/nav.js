import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Load } from "functions/load";
import { useSelector } from "react-redux";

const S = styled.div`
  position: fixed;
  border-radius: 10px 10px 0 0;
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: ${props =>
    props.restaurant !== null ? "repeat(4, 1fr)" : "repeat(3, 1fr)"};
  background: var(--theme1);
  text-align: center;
  transition: 0.5s;

  opacity: 0;
  transform: translatey(20px);
  &.loading {
    opacity: 1;
    transform: translateY(0);
  }

  .page-link {
    padding: 10px;
    color: var(--light);
    i {
      display: block;
      font-size: 25px;
    }
  }

  .page-link * {
    transition: 0.5s;
  }

  .active {
    .page-link {
      color: var(--dark);
      i {
        color: var(--dark);
      }
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
  const { loading } = Load();
  const restaurant = useSelector(state => state.restaurant);

  return (
    <S className={loading ? "loading" : ""} restaurant={restaurant}>
      <NavLink exact to={`/`}>
        <div className="page-link">
          <i className="material-icons-round">home</i>
          home
        </div>
      </NavLink>

      {restaurant !== null && (
        <NavLink exact to={`/${restaurant}`}>
          <div className="page-link">
            <i className="material-icons-round">restaurant_menu</i>
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
