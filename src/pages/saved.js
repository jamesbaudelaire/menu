import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSaved } from "redux/actions";

import { IO } from "functions/IO";

const S = styled.div`
  .item {
    position: relative;
    color: var(--light);
    border-radius: 10px;
    background: var(--theme1);
    height: 100px;
    width: calc(100% - 40px);
    max-width: 320px;
    margin: 20px auto;

    opacity: 0;
    transition: 0.5s;
    transform: translateY(30px);
    &.io {
      box-shadow: var(--shadow);
      opacity: 1;
      transform: translateY(0px);
    }

    img {
      height: 100px;
      border-radius: 10px 0 0 10px;
    }

    .logo {
      position: absolute;
      height: 30px;
      filter: invert();
      right: 50px;
      top: 10px;
    }

    .name {
      text-align: right;
      width: 150px;
      overflow: hidden;
      font-size: 15px;
      position: absolute;
      margin: 10px 15px;
      bottom: 0px;
      right: 0px;
    }
    .delete {
      font-size: 20px;
      position: absolute;
      top: 0;
      right: 0;
      background: var(--theme3);
      border-radius: 0 10px;
      padding: 10px;
    }
    .link {
      position: absolute;
      left: 50%;
      top: 10px;
      font-size: 30px;
    }
  }

  .saved-notice {
    text-align: center;
    font-family: var(--font2);
    margin: 20px;
    i {
      font-size: 40px;
      color: #d50000;
      margin: 10px;
      display: block;
    }
  }

  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 400px);
    justify-content: center;
  }
`;

export const Saved = () => {
  let saved = useSelector(s => s.saved);
  let dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);

    let targets = document.querySelectorAll(".item");
    targets.forEach((x, i) => {
      setTimeout(() => {
        IO(x);
      }, i * 50);
    });
  });

  return (
    <S id="saved">
      {saved.length < 1 && (
        <div className="saved-notice">
          <i className="material-icons-round">favorite</i>
          Saved items will appear here!
        </div>
      )}

      {saved.map(item => (
        <div key={item.name} className="item">
          <Link to={`${item.restaurant}/${item.url}`} key={item.url}>
            <img
              alt="item"
              src={`https://res.cloudinary.com/baudelaire/image/upload/w_700/menu/${
                item.restaurant
              }/${item.url}.jpg`}
            />
          </Link>

          <img
            src={`https://res.cloudinary.com/baudelaire/image/upload/menu/${
              item.restaurant
            }/logo.png`}
            alt="logo"
            className="logo"
          />

          <div className="name">{item.name}</div>
          <i
            className="material-icons-round delete"
            onClick={() => dispatch(deleteSaved(item))}
          >
            close
          </i>
        </div>
      ))}
    </S>
  );
};
