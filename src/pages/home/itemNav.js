import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { saveItem } from "redux/actions";
import { useDispatch, useSelector } from "react-redux";

const S = styled.div`
  background: grey;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  .action {
    padding: 10px;
    i {
      display: block;
      font-size: 25px;
    }
  }
`;

export const ItemNav = ({ name, item }) => {
  let { restaurant } = useParams();

  const dispatch = useDispatch();

  let saved = useSelector(s => s.saved).map(x => x.url);

  let share = () => {
    let location = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: "Menu App",
        text: `${name} ${item.name}`,
        url: `${location}`
      });
    } else {
      console.log(location);
    }
  };

  return (
    <S>
      <Link to={location => ({ ...location, pathname: `/${restaurant}` })}>
        <div className="action">
          <i className="material-icons-round">arrow_back_ios</i>
          back
        </div>
      </Link>

      <div
        className="action"
        onClick={() => {
          share();
        }}
      >
        <i className="material-icons-round">send</i>
        share
      </div>

      <div
        className="action"
        onClick={() => {
          item.restaurant = restaurant;
          dispatch(saveItem(item));
        }}
      >
        <i
          className="material-icons-round"
          style={{ color: saved.includes(item.url) ? "red" : "" }}
        >
          favorite
        </i>
        save
      </div>
    </S>
  );
};
