import React, { useEffect } from "react";
import { ItemNav } from "./itemNav";
import { useParams } from "react-router-dom";

import { Restaurants } from "../../restaurants";

import { useDispatch } from "react-redux";
import { lastItem } from "../../redux/actions";

import { version } from "../../version";

import "../../styles/item.scss";
import { motion } from "framer-motion";

export const Item = ({ items }) => {
  let { restaurant, item } = useParams();
  let search = items.filter((i) => i.url == item)[0];

  const dispatch = useDispatch(1);

  useEffect(() => {
    window.scroll(0, 0);
    if (search) {
      dispatch(lastItem(search.url));
    }
  });

  return (
    <motion.div
      id="item"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ bounce: 0 }}
    >
      {search ? (
        <>
          <div
            id="img"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/baudelaire/image/upload/w_700/${version}/menu/${restaurant}/${search.url}.jpg')`
            }}
          />
          <div className="details">
            <div className="name">{search.name}</div>

            {search.info && <div className="info">{search.info}</div>}

            {search.sides && (
              <div className="sides">
                {search.sides.map((side) => (
                  <div className="side" key={side}>
                    {side}
                  </div>
                ))}
              </div>
            )}

            {search.types && search.types.includes("salad") && (
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
          <ItemNav item={search} />
        </>
      ) : (
        <div className="not-found">
          <i className="material-icons-round">info</i>
          item not found or no longer available
        </div>
      )}
    </motion.div>
  );
};
