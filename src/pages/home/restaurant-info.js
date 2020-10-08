import React from "react";

import { Link } from "react-router-dom";
import { Restaurants } from "../../restaurants";

export const Info = ({ restaurant, version }) => {
  let R = Restaurants[restaurant];

  return (
    <div id="item-info">
      <Link to={`/${restaurant}`}>
        <img
          src={`
          https://res.cloudinary.com/baudelaire/image/upload/${version}/menu/${restaurant}/logo.png
          `}
          alt="logo"
          className="logo"
        />
      </Link>

      <div className="actions">
        <a className="action" href={`tel:${R.phone}`} rel="noopener noreferrer">
          <i className="material-icons-round">phone</i>
          {R.phone}
        </a>

        <a
          className="action"
          href={`${R.location.address}`}
          rel="noopener noreferrer"
        >
          <i className="material-icons-round">near_me</i>
          {R.location.name}
        </a>

        <a
          className="action"
          href={R.pdf}
          rel="noopener noreferrer"
          target="blank"
        >
          <i className="material-icons-round">description</i>
          PDF
        </a>
      </div>
    </div>
  );
};
