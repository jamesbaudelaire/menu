import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSaved } from "redux/actions";
const S = styled.div`
  .item {
    background: grey;
    height: 200px;
    width: calc(100% - 40px);
    margin: 20px;
  }
`;

export const Saved = () => {
  let saved = useSelector(s => s.saved);
  let dispatch = useDispatch();
  return (
    <S>
      {saved.map(item => (
        <div
          key={item.name}
          className="item"
          style={{
            backgroundImage: `url('')`
          }}
        >
          <div className="name">{item.name}</div>
          <i
            className="material-icons-round"
            onClick={() => dispatch(deleteSaved(item))}
          >
            delete
          </i>

          <Link to={`${item.restaurant}/${item.url}`} key={item.url}>
            <i className="material-icons-round">link</i>
          </Link>
        </div>
      ))}
    </S>
  );
};
