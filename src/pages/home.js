import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Restaurants } from "../restaurants";

import { useDispatch } from "react-redux";
import { lastItem, filterItems } from "../redux/actions";

import { version } from "../version";
import "../styles/home.scss";
import { motion } from "framer-motion";

export const Home = () => {
  const dispatch = useDispatch();

  const reset = () => {
    dispatch(lastItem(""));
    dispatch(filterItems(""));
  };

  useEffect(() => {
    reset();
  });

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ bounce: 0 }}
    >
      <div className="title">RESTAURANTS</div>

      <div id="restaurants">
        {Object.keys(Restaurants).map((restaurant) => (
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
    </motion.div>
  );
};
