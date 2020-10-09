import React from "react";
import { useParams, useHistory } from "react-router";
import { saveItem } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/item-nav.scss";
import { motion } from "framer-motion";

export const ItemNav = ({ item }) => {
  let { restaurant } = useParams();
  const dispatch = useDispatch();

  let saved = useSelector((s) => s.saved).filter(
    (x) => x.restaurant == restaurant
  );

  let share = () => {
    let location = window.location.href;
    if (navigator.share) {
      navigator.share({
        url: `${location}`
      });
    } else {
      prompt("URL", location);
    }
  };

  let history = useHistory();

  let back = () => {
    if (history.length < 2) {
      history.push(`/${restaurant}`);
    } else {
      history.goBack();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ bounce: 0 }}
      id="item-nav"
      className="dark-mode"
    >
      <div className="action" onClick={() => back()}>
        <i className="material-icons-round">undo</i>
        back
      </div>

      {item && (
        <div
          className="action"
          onClick={() => {
            share();
          }}
        >
          <i className="material-icons-round">send</i>
          share
        </div>
      )}

      {item && (
        <div
          className="action"
          onClick={() => {
            item.restaurant = restaurant;
            dispatch(saveItem(item));
          }}
        >
          <i
            className="material-icons-round"
            style={{
              color: saved.map((x) => x.url).includes(item.url) ? "#d50000" : ""
            }}
          >
            favorite
          </i>
          save
        </div>
      )}
    </motion.div>
  );
};
