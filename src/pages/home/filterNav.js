import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { filterItems } from "redux/actions";
import { lastItem } from "../../redux/actions";
import { useAnimation } from "../../hooks/animation";

const S = styled.div`
  background: var(--theme3);
  border-radius: 40px 40px 0 0;
  position: fixed;
  z-index: 90;
  bottom: 0;
  left: 0;
  height: 115px;
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;

  transition: transform 0.3s, opacity 0.3s;

  transform: translatey(100px);
  &.loaded {
    transform: translateY(0);
  }

  div {
    cursor: pointer;
    color: white;
    display: inline-block;
    margin: 10px 5px;
    padding: 5px 10px;
    border-radius: 20px;
    transition: 0.5s;
    &.selected {
      background: var(--theme2);
      color: black;
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
    max-width: 350px;
    border-radius: 40px;
    bottom: unset;
    left: 140px;
    width: auto;
    box-shadow: var(--shadow);
    text-align: center;
    margin: auto;
    height: auto;
    transform: translatey(20px);
  }
`;

export const FilterNav = ({ items }) => {
  const filter = useSelector(s => s.filter);
  const dispatch = useDispatch();

  const loadFilterNav = useAnimation(0.3, 0);

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
    <S {...loadFilterNav}>
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
