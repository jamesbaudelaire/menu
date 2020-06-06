import React from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router";
import { saveItem } from "redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useAnimation } from "../../functions/animation";

const S = styled.div`
  font-family: var(--font2);
  text-transform: uppercase;
  border-radius: 50px 50px 0 0;
  width: 100%;
  padding-bottom: 25px;
  right: 0;
  max-width: 540px;
  display: grid;
  background: var(--light);
  color: var(--dark);
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  position: fixed;
  bottom: 0px;
  margin: auto;
  z-index: 200;
  left: 0;
  height: 60px;
  box-shadow: inset 1px 1px 5px black;

  .action {
    cursor: pointer;
    margin: 20px;
    i {
      font-size: 30px;
    }
  }

  transition: 0.3s;
  transform: translatey(50px);
  &.loaded {
    transform: translatex(0);
    opacity: 1;
  }

  @media screen and (min-width: 1000px) {
    transform: none;
    left: 120px;
    top: 20px;
    right: unset;
    bottom: auto;
    width: auto;
    padding: 0;
    box-shadow: none;
    height: auto;
    opacity: 0;
  }
`;

export const ItemNav = ({ item }) => {
  let { restaurant } = useParams();
  const dispatch = useDispatch();

  let saved = useSelector(s => s.saved).filter(x => x.restaurant == restaurant);

  let share = () => {
    let location = window.location.href;
    if (navigator.share) {
      navigator.share({
        url: `${location}`
      });
    } else {
      prompt("URL", location);
    }
  };

  let history = useHistory();

  const load = useAnimation();

  let back = () => {
    if (history.length < 2) {
      history.push(`/${restaurant}`);
    } else {
      history.goBack();
    }
  };

  return (
    <S className="dark-mode" {...load}>
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
