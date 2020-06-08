import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { filterItems } from "redux/actions";
import { lastItem } from "../../redux/actions";
import { useAnimation } from "../../functions/animation";

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
  height: 130px;
  font-weight: bold;
  width: 100%;
  font-size: 14px;
  max-width: 500px;
  right: 0;
  margin: auto;
  white-space: nowrap;
  overflow-x: scroll;
  font-family: var(--font1);

  transition: 0.3s;
  transform: translatey(20px);
  &.loaded {
    transform: translatex(0);
  }

  div {
    cursor: pointer;
    display: inline-block;
    margin: 15px 0px;
    padding: 5px 15px;
    border-radius: 20px;
    transition: 0.3s;
    &.selected {
      color: var(--theme);
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
    top: 20px;
    max-width: calc(100% - 300px);
    border-radius: 40px 0 0 40px;
    bottom: unset;
    left: 300px;
    right: unset;
    /* box-shadow: none; */
    margin: 0;
    height: 60px;
    transform: none;
  }
`;

export const FilterNav = ({ items }) => {
  const filter = useSelector(s => s.filter);
  const dispatch = useDispatch();

  const load = useAnimation();

  useEffect(() => {
    if (filter) {
      document.querySelector(".selected").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
    }
  });

  let filters = [...new Set(items.map(x => x.types).flat())].filter(x => x);

  return (
    <S className="dark-mode" {...load}>
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
