import React from "react";
import styled from "styled-components";

const S = styled.div`
  background: red;
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

const Buttons = [
  {
    name: "back",
    location: "/",
    icon: "arrow_back_ios"
  },
  {
    name: "share",
    location: "/saved",
    icon: "send"
  },
  {
    name: "save",
    location: "/settings",
    icon: "favorite"
  }
];

export const ItemNav = () => {
  return (
    <S>
      {Buttons.map(x => (
        <div className="action" key={x.name}>
          <i className="material-icons-round">{x.icon}</i>
          {x.name}
        </div>
      ))}
    </S>
  );
};
