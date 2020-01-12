import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { filterItems } from "redux/actions";
import { Load } from "functions/load";
import { lastItem } from "../../redux/actions";

const S = styled.div`
  background: var(--theme3);
  border-radius: 10px;
  position: fixed;
  z-index: 90;
  bottom: 0;
  left: 0;
  height: 115px;
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;

  transition: transform 0.5s, opacity 0.5s;

  opacity: 0;
  transform: translatey(20px);
  &.loading {
    opacity: 1;
    transform: translateY(0);
  }

  div {
    cursor: pointer;
    color: white;
    display: inline-block;
    margin: 10px 5px;
    padding: 5px 10px;
    border-radius: 30px;
    transition: 0.5s;
    &.selected {
      background: var(--theme2);
      color: black;
    }

    :first-child {
      margin-left: 10px;
    }
    :last-child {
      margin-right: 10px;
    }
  }

  @media screen and (min-width: 1000px) {
    position: fixed;
    top: 20px;
    max-width: 500px;
    bottom: unset;
    left: 140px;
    width: auto;
    box-shadow: var(--shadow);
    text-align: center;
    margin: auto;
    height: auto;
  }
`;

export const FilterNav = ({ items }) => {
  const filter = useSelector(s => s.filter);
  const dispatch = useDispatch();
  const { loading } = Load();

  useEffect(() => {
    if (filter) {
      document.querySelector(".selected").scrollIntoView({
        behavior: "smooth",
        inline: "center"
      });
    }
  });

  let filters = [...new Set(items.map(x => x.types).flat())].filter(x => x);

  return (
    <S className={loading ? "loading" : ""}>
      {filters.map(x => (
        <div
          className={filter == x ? "selected" : ""}
          key={x}
          onClick={() => {
            window.scroll(0, 0);
            dispatch(lastItem(""));
            dispatch(filterItems(x));
          }}
        >
          {x}
        </div>
      ))}
    </S>
  );
};
