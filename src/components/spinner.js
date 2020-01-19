import React from "react";
import styled from "styled-components";

import { Load } from "functions/load";

const S = styled.div`
  transition: 0.3s;
  opacity: 0;
  &.loading {
    opacity: 1;
  }

  .spinner {
    height: 70px;
    width: 70px;
    animation: rotate 1s linear infinite;

    circle {
      fill: none;
      stroke: var(--theme1);
      stroke-width: 4;
      stroke-dasharray: 100;
      stroke-dashoffset: 200;
      animation: loading 3s linear infinite;
    }

    @keyframes loading {
      to {
        stroke-dashoffset: 0;
      }
    }
    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }
  }

  .spinner {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const Spinner = () => {
  const { loading } = Load();

  return (
    <S className={loading ? "loading" : ""}>
      <svg className="spinner">
        <circle cx="35" cy="35" r="20" />
      </svg>
    </S>
  );
};
