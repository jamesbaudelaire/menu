import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

const S = styled.div``;

export const Settings = () => {
  const dark = useSelector(state => state.dark);
  const dispatch = useDispatch();
  return (
    <S>
      Settings
      <button
        onClick={() => {
          dispatch({ type: "dark" });
        }}
      >
        dark
      </button>
    </S>
  );
};
