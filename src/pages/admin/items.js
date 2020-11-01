import React from "react";
import "./items.scss";

export const Items = ({ item, setItem, items, categories, itemInputs }) => {
  return (
    <div id="admin-items">
      <i
        id="add-item"
        onClick={() => {
          let item = {};
          itemInputs.forEach((x) => {
            item[x] = "";
          });
          setItem(item);
        }}
        className="material-icons-round"
      >
        add_circle_outline
      </i>

      <div id="categories">
        {categories.map((cat) => (
          <div key={cat}>
            <div className="category-name">{cat}</div>
            {items
              .filter((x) => x.category === cat)
              .map((x) => (
                <div
                  key={x.url}
                  className={`item ${
                    item && item.url === x.url ? "selected" : ""
                  }`}
                  onClick={(e) => {
                    setItem(x);
                  }}
                >
                  {x.name}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
