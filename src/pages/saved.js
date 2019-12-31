import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSaved } from "redux/actions";
const S = styled.div`
  .item {
    position: relative;
    border-radius: 30px;
    background: var(--grey);
    height: 100px;
    width: calc(100% - 40px);
    margin: 20px;
    img {
      height: 100px;
      border-radius: 30px;
    }
    .name {
      text-align: right;
      width: 200px;
      overflow: hidden;
      font-size: 20px;
      position: absolute;
      margin: 10px 15px;
      bottom: 0px;
      right: 0px;
    }
    .delete {
      font-size: 30px;
      position: absolute;
      top: 0;
      right: 0;
      background: #d50000;
      border-radius: 0 30px;
      padding: 10px;
    }
    .link {
      position: absolute;
      left: 50%;
      top: 10px;
      font-size: 30px;
    }
  }
`;

export const Saved = () => {
  let saved = useSelector(s => s.saved);
  let dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <S>
      {saved.map(item => (
        <div key={item.name} className="item">
          <Link to={`${item.restaurant}/${item.url}`} key={item.url}>
            <img
              alt="item"
              src={`https://res.cloudinary.com/baudelaire/image/upload/w_350/v1577777469/menu/${
                item.restaurant
              }/${item.url}.jpg`}
            />
          </Link>

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
