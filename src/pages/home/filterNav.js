import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterItems } from "../../redux/actions";
import { lastItem } from "../../redux/actions";
import "../../styles/filter-nav.scss";

export const FilterNav = ({ items }) => {
  const filter = useSelector((s) => s.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filter) {
      document.querySelector(".selected").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
    }
  });

  let filters = [...new Set(items.map((x) => x.types).flat())].filter((x) => x);

  return (
    <div
      id="filter-nav"
    >
      {filters.map((x) => (
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
    </div>
  );
};
