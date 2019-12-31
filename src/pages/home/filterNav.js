import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { filterItems } from "redux/actions";
import { Load } from "functions/load";

const S = styled.div`
  background: var(--theme3);
  border-radius: 30px;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 115px;
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;

  transition: 0.5s;
  opacity: 0;
  transform: translatey(20px);
  &.loading {
    opacity: 1;
    transform: translateY(0);
  }

  div {
    background: var(--theme1);
    color: white;
    display: inline-block;
    margin: 10px;
    padding: 5px 10px;
    border-radius: 30px;
    transition: 0.5s;
    &.selected {
      background: var(--theme2);
      color: black;
      box-shadow: var(--shadow);
    }

    :first-child {
      margin-left: 20px;
    }
    :last-child {
      margin-right: 20px;
    }
  }
`;

export const FilterNav = ({ items }) => {
  const filter = useSelector(s => s.filter);
  const dispatch = useDispatch();
  const { loading } = Load();

  let filters = [...new Set(items.map(x => x.types).flat())];

  return (
    <S className={loading ? "loading" : ""}>
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
