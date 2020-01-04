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
    margin: 20px;

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
      right: 60px;
      top: 20px;
    }

    .name {
      text-align: right;
      width: 150px;
      height: 20px;
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

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 400px);
    position: absolute;
    left: 140px;
    top: 50px;
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
    <S>
      {saved.map(item => (
        <div key={item.name} className="item">
          <Link to={`${item.restaurant}/${item.url}`} key={item.url}>
            <img
              alt="item"
              src={`https://res.cloudinary.com/baudelaire/image/upload/w_300/v1577777469/menu/${
                item.restaurant
              }/${item.url}.jpg`}
            />
          </Link>

          <img
            src={`https://res.cloudinary.com/baudelaire/image/upload/w_300/v1577778466/menu/${
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
