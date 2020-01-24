import React, { useRef, useEffect } from "react";

export const useAnimation = (duration = 0.3, delay = 0) => {
  const el = useRef();
  useEffect(() => {
    if (el.current) {
      let { current } = el;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s
      ,transform ${duration}s ease-in-out ${delay}s
      `;
      current.style.opacity = "1";
      current.classList.add("loaded");
    }
  });
  return { ref: el, style: { opacity: 0 } };
};
