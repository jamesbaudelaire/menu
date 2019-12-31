import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Load } from "functions/load";
import { useSelector } from "react-redux";

const S = styled.div`
  position: fixed;
  border-radius: 30px 30px 0 0;
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
    transition: 0.5s;

    i {
      display: block;
      font-size: 25px;
    }
  }

  .active {
    color: var(--dark);
  }
`;

const Pages = [
  {
    name: "saved",
    location: "/saved",
    icon: "favorite"
  },
  {
    name: "settings",
    location: "/settings",
    icon: "settings"
  }
];

export const Nav = () => {
  const { loading } = Load();
  const restaurant = useSelector(state => state.restaurant);
  return (
    <S className={loading ? "loading" : ""}>
      <NavLink exact to={`/${restaurant}`}>
        <div className="page-link">
          <i className="material-icons-round">restaurant_menu</i>
          menu
        </div>
      </NavLink>

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
