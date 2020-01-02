import React, { useEffect } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { Load } from "functions/load";

const S = styled.div`
  opacity: 0;
  transition: 0.5s;
  &.loading {
    opacity: 1;
  }

  .darkmode {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    font-size: 40px;
  }

  .info {
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
        margin: 20px 0;
        i {
          margin: 10px;
          font-size: 40px;
        }
      }
    }
  }

  .contact {
    margin: 20px;
    margin-top: 50px;
    .title {
      font-size: 20px;
    }
    font-size: 15px;
    i {
      display: block;
      font-size: 40px;
      margin: 10px;
    }
  }
`;

export const About = () => {
  const dark = useSelector(state => state.dark);
  const dispatch = useDispatch();

  const { loading } = Load();

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <S className={loading ? "loading" : ""}>
      <i
        style={{ color: dark ? "var(--light)" : "var(--dark)" }}
        onClick={() => {
          dispatch({ type: "dark" });
        }}
        className="material-icons-round darkmode"
      >
        brightness_6
      </i>

      <div className="info">
        <div className="title">M3NU</div>
        <ul>
          <li>
            <i className="material-icons-round">restaurant_menu</i>A modern
            solution for boring pdf menus
          </li>
          <li>
            <i className="material-icons-round">send</i>
            Share your favorite items with family and friends
          </li>
          <li>
            <i className="material-icons-round">favorite</i>
            Save items you loved or want to try next
          </li>
          <li>
            <i className="material-icons-round">near_me</i>
            Browse local menus
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
