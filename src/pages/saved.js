import React, { useEffect } from "react";
import "../styles/saved.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSaved } from "../redux/actions";

import { version } from "../version";

import { Restaurants } from "../restaurants";

import { AnimatePresence, motion } from "framer-motion";

export const Saved = () => {
  let saved = useSelector((s) => s.saved);
  let dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <motion.div
      id="saved"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ bounce: 0 }}
    >
     
      <AnimatePresence>

        {saved.map((item, i) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            exit={{ opacity: 0 ,scale:.9}}
            key={`${item.restaurant}-${item.url}`}
            style={{
              background: Restaurants[item.restaurant]
                ? `#${Restaurants[item.restaurant].theme}`
                : "var(--dark)"
            }}
            className="item"
            id={`${item.restaurant}-${item.url}`}
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
                dispatch(deleteSaved(item));
              }}
            >
              close
            </i>
          </motion.div>
        ))}

{saved.length < 1 && (
        <div
        className="saved-notice">
          <i className="material-icons-round">favorite</i>
          saved items will appear here
        </div>
      )}

      </AnimatePresence>
    </motion.div>
  );
};
