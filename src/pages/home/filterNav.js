import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { filterItems } from "redux/actions";
import { lastItem } from "../../redux/actions";

const S = styled.div`
  border-radius: 40px 40px 0 0;
  box-shadow: inset 1px 1px 5px black;
  position: fixed;
  text-transform: uppercase;
  z-index: 90;
  bottom: 0;
  background: var(--light);
  color: var(--dark);
  left: 0;
  height: 110px;
  font-weight: bold;
  width: 100%;
  font-size: 12px;
  white-space: nowrap;
  overflow-x: scroll;
  font-family: var(--font2);

  div {
    cursor: pointer;
    display: inline-block;
    margin: 10px 0px;
    padding: 5px 15px;
    border-radius: 20px;
    transition: 0.3s;
    &.selected {
      background: var(--theme);
      box-shadow: var(--shadow);
      color: white;
    }

    :first-child {
      margin-left: 20px;
    }
    :last-child {
      margin-right: 20px;
    }
  }

  @media screen and (min-width: 1000px) {
    position: fixed;
    top: 0;
    max-width: 350px;
    border-radius: 40px;
    bottom: unset;
    left: 140px;
    width: auto;
    box-shadow: inset 1px 1px 5px black;
    text-align: center;
    margin: auto;
    height: auto;
    transform: translatey(20px);
  }
`;

export const FilterNav = ({ items }) => {
  const filter = useSelector(s => s.filter);
  const dispatch = useDispatch();

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
    <S className="dark-mode">
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
