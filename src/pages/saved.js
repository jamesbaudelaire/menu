import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSaved } from "redux/actions";

import { IO } from "functions/IO";

import { version } from "version";

import { Restaurants } from "restaurants";

import { useAnimation } from "functions/animation";

const S = styled.div`
  .item {
    overflow: hidden;
    position: relative;
    color: var(--light);
    border-radius: 20px;
    height: 100px;
    width: calc(100% - 40px);
    max-width: 320px;
    margin: 20px auto;

    opacity: 0;
    transition: 0.3s;
    transform: translateY(30px);
    &.io {
      box-shadow: var(--shadow);
      opacity: 1;
      transform: translateY(0px);
    }
    &.delete {
      opacity: 0;
      transform: scale(0.9);
    }

    .food-img {
      width: 150px;
      border-radius: 20px 0 0 20px;
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
      color: black;
      background: var(--light);
      opacity: 0.5;
      border-radius: 0 20px;
      padding: 10px;
      &:hover {
        background: #d50000;
        color: white;
      }
      :active {
        transform: none;
      }
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

  const load = useAnimation(0.5);

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
        <div className="saved-notice" {...load}>
          <i className="material-icons-round">favorite</i>
          saved items will appear here
        </div>
      )}

      {saved.map(item => (
        <div
          key={item.name}
          style={{
            background: Restaurants[item.restaurant]
              ? `#${Restaurants[item.restaurant].theme}`
              : "var(--dark)"
          }}
          className="item"
          id={item.name}
        >
          <Link to={`${item.restaurant}/${item.url}`} key={item.url}>
            <img
              className="food-img"
              alt="item"
              src={`https://res.cloudinary.com/baudelaire/image/upload/w_700/${version}/menu/${
                item.restaurant
              }/${item.url}.jpg`}
            />
          </Link>

          <img
            src={`https://res.cloudinary.com/baudelaire/image/upload/${version}/menu/${
              item.restaurant
            }/logo.png`}
            alt="logo"
            className="logo"
          />

          <div className="name">{item.name}</div>
          <i
            className="material-icons-round delete"
            onClick={() => {
              document.getElementById(`${item.name}`).classList.add("delete");
              setTimeout(() => {
                dispatch(deleteSaved(item));
              }, 300);
            }}
          >
            close
          </i>
        </div>
      ))}
    </S>
  );
};
