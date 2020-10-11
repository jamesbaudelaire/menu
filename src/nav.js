import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles/nav.scss";

import { motion } from "framer-motion";

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
  const restaurant = useSelector((state) => state.restaurant);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ bounce: 0 }}
      id="nav"
      style={{
        gridTemplateColumns: `${
          restaurant !== null ? "repeat(4, 1fr)" : "repeat(3, 1fr)"
        }`
      }}
    >
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

      {Pages.map((x) => (
        <NavLink key={x.name} exact to={x.location}>
          <div className="page-link">
            <i className="material-icons-round">{x.icon}</i>
            <span>{x.name}</span>
          </div>
        </NavLink>
      ))}
    </motion.div>
  );
};
