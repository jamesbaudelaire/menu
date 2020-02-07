import React, { useEffect } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { version } from "version";

import { useAnimation } from "functions/animation";

const S = styled.div`
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
      font-size: 24px;
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
      font-family: var(--font2);
    }
    i {
      display: block;
      margin: 10px;
    }
  }

  .version {
    font-family: var(--font2);
    margin: 40px;
    text-align: right;
  }
`;

export const About = () => {
  const dark = useSelector(state => state.dark);
  const dispatch = useDispatch();

  const load = useAnimation(0.5);

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <S id="about" {...load}>
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
        <a href="mailto:admin@m3nu.app">
          <i className="material-icons-round">email</i>
        </a>
      </div>

      <div className="version">{version}</div>
    </S>
  );
};
