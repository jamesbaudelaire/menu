import React, { useEffect } from "react";
// import styled from "styled-components";
import "../styles/saved.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSaved } from "../redux/actions";

import { IO } from "../functions/IO";

import { version } from "../version";

import { Restaurants } from "../restaurants";

import { motion } from "framer-motion";

export const Saved = () => {
  let saved = useSelector((s) => s.saved);
  let dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <motion.div id="saved" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {saved.length < 1 && (
        <div className="saved-notice">
          <i className="material-icons-round">favorite</i>
          saved items will appear here
        </div>
      )}

      {saved.map((item) => (
        <div
          key={item.name}
          style={{
            background: Restaurants[item.restaurant]
              ? `#${Restaurants[item.restaurant].theme}`
              : "var(--dark)"
          }}
          className="item"
          id={item.name}
        >
          <Link to={`${item.restaurant}/${item.url}`} key={item.url}>
            <img
              className="food-img"
              alt="item"
              src={`https://res.cloudinary.com/baudelaire/image/upload/w_700/${version}/menu/${item.restaurant}/${item.url}.jpg`}
            />
          </Link>

          <img
            src={`https://res.cloudinary.com/baudelaire/image/upload/${version}/menu/${item.restaurant}/logo.png`}
            alt="logo"
            className="logo"
          />

          <div className="name">{item.name}</div>
          <i
            className="material-icons-round delete"
            onClick={() => {
              document.getElementById(`${item.name}`).classList.add("delete");
              dispatch(deleteSaved(item));
            }}
          >
            close
          </i>
        </div>
      ))}
    </motion.div>
  );
};
