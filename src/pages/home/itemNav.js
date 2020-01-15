import React from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router";
import { saveItem } from "redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { Load } from "functions/load";

const S = styled.div`
  background: var(--theme3);
  position: fixed;
  z-index: 80;
  border-radius: 10px 10px 0 0;
  bottom: 45px;
  padding-bottom: 20px;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  .action {
    color: white;
    padding: 10px;
    i {
      transition: 0.5s;
      display: block;
      font-size: 25px;
    }
  }

  opacity: 0;
  transition: transform 0.5s, opacity 0.5s;
  transform: translatey(20px);
  &.loading {
    opacity: 1;
    transform: translateY(0);
  }

  @media screen and (min-width: 1000px) {
    left: 140px;
    top: 20px;
    bottom: unset;
    width: auto;
    border-radius: 10px;
    box-shadow: var(--shadow);
    padding: 0;
    height: 60px;
    .action {
      padding: 10px 20px;
    }
  }
`;

export const ItemNav = ({ item }) => {
  let { restaurant } = useParams();

  const { loading } = Load();

  const dispatch = useDispatch();

  let saved = useSelector(s => s.saved).filter(x => x.restaurant == restaurant);

  let share = () => {
    let location = `m3nu.app/${restaurant}/${item.url}`;
    if (navigator.share) {
      navigator.share({
        url: `${location}`
      });
    } else {
      prompt("URL", location);
    }
  };

  let history = useHistory();

  let back = () => {
    if (history.length < 2) {
      history.push(`/${restaurant}`);
    } else {
      history.goBack();
    }
  };

  return (
    <S className={loading ? "loading" : ""}>
      <div className="action" onClick={() => back()}>
        <i className="material-icons-round">arrow_back_ios</i>
        back
      </div>

      {item && (
        <div
          className="action"
          onClick={() => {
            share();
          }}
        >
          <i className="material-icons-round">send</i>
          share
        </div>
      )}

      {item && (
        <div
          className="action"
          onClick={() => {
            item.restaurant = restaurant;
            dispatch(saveItem(item));
          }}
        >
          <i
            className="material-icons-round"
            style={{
              color: saved.map(x => x.url).includes(item.url) ? "#d50000" : ""
            }}
          >
            favorite
          </i>
          save
        </div>
      )}
    </S>
  );
};
