import React, { useEffect } from "react";
import { saveItem } from "../../redux/actions";
import { useParams } from "react-router-dom";

import { Restaurants } from "../../restaurants";

import { useDispatch, useSelector } from "react-redux";

import { version } from "../../version";

import "../../styles/item-modal.scss";
import { motion } from "framer-motion";

export const Item = ({ item, setItem }) => {
  const dispatch = useDispatch();
  let { restaurant } = useParams();

  let saved = useSelector((s) => s.saved).filter(
    (x) => x.restaurant == restaurant
  );

  let share = () => {
    let location = window.location.href + `/${item.url}`;
    if (navigator.share) {
      navigator.share({
        url: `${location}`
      });
    } else {
      prompt("URL", location);
    }
  };

  return (
    <motion.div
      id="item-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => {
        setItem(null);
      }}
    >
      <motion.div
        id="item"
        initial={{ opacity: 0, scale: 0.75, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
      >
        <i
          className="material-icons-round"
          id="save"
          onClick={(e) => {
            e.stopPropagation();

            item.restaurant = restaurant;
            dispatch(saveItem(item));
          }}
          style={{
            color: saved.map((x) => x.url).includes(item.url) ? "#d50000" : ""
          }}
        >
          favorite
        </i>

        <i
          className="material-icons-round"
          id="share"
          onClick={(e) => {
            e.stopPropagation();

            share();
          }}
        >
          send
        </i>

        <div
          id="img"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/baudelaire/image/upload/w_700/${version}/menu/${restaurant}/${item.url}.jpg')`
          }}
        />
        <div className="details">
          <div className="name">{item.name}</div>

          {item.info && <div className="info">{item.info}</div>}

          {item.sides && (
            <div className="sides">
              {item.sides.map((side) => (
                <div className="side" key={side}>
                  {side}
                </div>
              ))}
            </div>
          )}

          {item.types && item.types.includes("salad") && (
            <div className="dressings">
              DRESSINGS
              <br />
              {Restaurants[restaurant].dressings.map((dressing) => (
                <div key={dressing} className="dressing">
                  {dressing}
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
