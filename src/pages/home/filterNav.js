import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { filterItems } from "redux/actions";

const S = styled.div`
  background: red;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 110px;
  width: 100%;
  div {
    display: inline-block;
    margin: 10px;
    background: grey;
    padding: 5px 10px;
    border-radius: 30px;
    &.selected {
      background: red;
    }
  }
`;

export const FilterNav = ({ items }) => {
  const filter = useSelector(s => s.filter);
  const dispatch = useDispatch();

  let filters = [...new Set(items.map(x => x.types).flat())];

  return (
    <S>
      {filters.map(x => (
        <div
          className={filter == x ? "selected" : ""}
          key={x}
          onClick={() => {
            dispatch(filterItems(x));
          }}
        >
          {x}
        </div>
      ))}
    </S>
  );
};
