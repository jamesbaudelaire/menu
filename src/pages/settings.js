import React, { useEffect } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

const S = styled.div`
  .darkmode {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    font-size: 40px;
  }

  .info {
    max-width: calc(100% - 100px);
    margin: 20px;
    .title {
      font-size: 25px;
      font-family: var(--font1);
    }

    font-family: var(--font2);

    ul {
      list-style: none;
      padding: 0 10px;
      li {
        i {
          margin: 10px;
          font-size: 30px;
        }
      }
    }
  }

  .contact {
    max-width: calc(100% - 100px);
    margin: 20px;
    .title {
      font-size: 20px;
    }
    font-size: 15px;
    i {
      display: block;
      font-size: 30px;
      margin: 10px;
    }
  }
`;

export const Settings = () => {
  const dark = useSelector(state => state.dark);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <S>
      <i
        style={{ color: dark ? "var(--light)" : "var(--dark)" }}
        onClick={() => {
          dispatch({ type: "dark" });
        }}
        className="material-icons-round darkmode transition"
      >
        brightness_6
      </i>

      <div className="info">
        <div className="title">M3NU</div>
        <ul>
          <li>
            <i className="material-icons-round">restaurant_menu</i>A modern menu
            for the web.
          </li>
          <li>
            <i className="material-icons-round">send</i>
            Share your favorite items with family and friends.
          </li>
          <li>
            <i className="material-icons-round">favorite</i>
            Save items you loved or want to try next!
          </li>
        </ul>
      </div>

      <div className="contact">
        <div className="title">Interested in listing your menu?</div>
        <a href="mailto:ronakmystery@gmail.com?subject=I want to list my menu!">
          <i className="material-icons-round">email</i>
        </a>
      </div>
    </S>
  );
};
