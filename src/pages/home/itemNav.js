import React from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router";
import { saveItem } from "redux/actions";
import { useDispatch, useSelector } from "react-redux";

const S = styled.div`
  box-shadow: inset 1px 1px 5px black;
  font-family: var(--font2);
  position: fixed;
  z-index: 80;
  height: 60px;
  border-radius: 50px 50px 0 0;
  bottom: 0px;
  padding-bottom: 65px;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  .action {
    cursor: pointer;
    padding: 15px;
    i {
      font-size: 30px;
    }
  }

  @media screen and (min-width: 1000px) {
    transform: translatey(20px);
    border-radius: 40px;
    left: 140px;
    top: 0px;
    bottom: unset;
    width: auto;
    padding: 0;
    box-shadow: none;
  }
`;

export const ItemNav = ({ item }) => {
  let { restaurant } = useParams();
  const dispatch = useDispatch();
  const dark = useSelector(state => state.dark);

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

  let back = () => {
    if (history.length < 2) {
      history.push(`/${restaurant}`);
    } else {
      history.goBack();
    }
  };

  return (
    <S style={{ background: dark ? "var(--dark)" : "var(--light)" }}>
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
