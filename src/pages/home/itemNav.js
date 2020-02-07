import React from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router";
import { saveItem } from "redux/actions";
import { useDispatch, useSelector } from "react-redux";

const S = styled.div`
  font-family: var(--font2);
  text-transform: uppercase;
  border-radius: 50px 50px 0 0;
  width: 100%;
  font-size: 15px;
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
    position: fixed;
    transform: translatey(20px);
    border-radius: 40px;
    left: 120px;
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
    <S>
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
