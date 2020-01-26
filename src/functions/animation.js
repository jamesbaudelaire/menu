import React, { useRef, useEffect } from "react";

export const useAnimation = (duration = 0.3) => {
  const el = useRef();
  useEffect(() => {
    if (el.current) {
      let { current } = el;
      current.style.transition = `opacity ${duration}s`;
      current.style.opacity = "1";
    }
  });
  return { ref: el, style: { opacity: 0 } };
};
