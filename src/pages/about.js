import React, { useEffect } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { Load } from "functions/load";

const S = styled.div`
  opacity: 0;
  transition: 0.3s;
  &.loading {
    opacity: 1;
  }
  i {
    font-size: 40px;
  }
  .darkmode {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
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
    <S className={loading ? "loading" : ""} id="about">
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
          a modern menu
          <li>
            <i className="material-icons-round">send</i>
            share your favorite items with family and friends
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
        <a href="mailto:admin@m3nu.app?subject=I want to list my menu!">
          <i className="material-icons-round">email</i>
        </a>
      </div>
    </S>
  );
};
