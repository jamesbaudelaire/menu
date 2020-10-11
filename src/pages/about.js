import React, { useEffect } from "react";
import "../styles/about.scss";

import { motion } from "framer-motion";

export const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ bounce: 0 }}
    >
      <div className="info">
        <div className="title">M3NU</div>
        <ul>
          <span className="slogan">A modern menu...</span>
          <li>
            <i className="material-icons-round">send</i>
            share your favorite items
          </li>
          <li>
            <i className="material-icons-round">favorite</i>
            save items you loved or want to try next
          </li>
          <li>
            <i className="material-icons-round">near_me</i>
            browse local menus
          </li>
        </ul>
      </div>

      <div className="contact">
        <div className="title">Interested in listing your menu?</div>
        <a href="mailto:ronakmystery@gmail.com">
          <i className="material-icons-round email">email</i>
        </a>
      </div>
    </motion.div>
  );
};
