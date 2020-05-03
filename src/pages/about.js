import React, { useEffect } from "react";
import styled from "styled-components";

import { useAnimation } from "functions/animation";

const S = styled.div`
  i {
    font-size: 40px;
  }
  font-family: var(--font2);

  .info {
    margin: 20px;
    .slogan {
      font-size: 18px;
    }
    .title {
      font-size: 28px;
      font-family: var(--font1);
    }
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
      margin: 10px;
    }
  }

  opacity: 0;
  transition: 0.5s;
  &.loaded {
    opacity: 1;
  }
`;

export const About = () => {
  const load = useAnimation();

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <S id="about" {...load}>
      <div className="info">
        <div className="title">M3NU</div>
        <ul>
          <span className="slogan">a modern menu</span>
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
          <i className="material-icons-round">email</i>
        </a>
      </div>
    </S>
  );
};
