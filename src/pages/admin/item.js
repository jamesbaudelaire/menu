import React, { useEffect } from "react";
import "./item.scss";

let categories = ["appetizer", "entree", "dessert"];

export const Item = ({ item, setItem, setItems, items, itemInputs }) => {
  let types = [...new Set(items.map((x) => x.types.split(",")).flat())].filter(
    (x) => x
  );

  useEffect(() => {
    if (item) {
      itemInputs.forEach((x) => {
        document.getElementById(`item-${x}`).value = item[x];
      });
    }
  }, [item]);

  return (
    <div id="admin-item">
      <i
        id="close"
        onClick={() => {
          setItem(null);
        }}
        className="material-icons-round"
      >
        close
      </i>

      <div id="suggestions">
        <div className="suggested">
          suggested category
          <div className="suggestion">
            {categories.map((x) => (
              <button
                key={x}
                onClick={() => {
                  document.getElementById("item-category").value = x;
                }}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
        <div className="suggested">
          suggested types
          <div className="suggestion">
            {types.map((x) => (
              <button
                key={x}
                onClick={() => {
                  let input = document.getElementById("item-types");
                  if (input.value === "") {
                    input.value = x;
                  } else {
                    input.value += `,${x}`;
                  }
                }}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div id="inputs">
        {itemInputs.map((x) => (
          <div key={x}>
            {x}
            <input id={`item-${x}`} key={x} />
          </div>
        ))}
      </div>

      <div id="item-buttons">
        <i
          id="save-item"
          className="material-icons-round"
          onClick={() => {
            let item = {};
            itemInputs.forEach((x) => {
              item[x] = document.getElementById(`item-${x}`).value;
            });

            item.types = [...new Set(item.types.split(","))].join(",");

            let check = () => {
              //check if already exists by url
              return items.filter((x) => x.url === item.url).length;
            };

            if (
              check() === 0 &&
              item.url !== "undefined" &&
              item.url !== "" &&
              categories.includes(item.category)
            ) {
              items.push(item);
              setItems(items);
              setItem(null);
            } else if (item.url !== "" && categories.includes(item.category)) {
              let temp = items.map((x) => (x.url === item.url ? item : x));
              setItems(temp);
              setItem(null);
            } else {
              alert("error");
            }
          }}
        >
          save
        </i>

        {item.url && (
          <i
            id="delete-item"
            onClick={() => {
              if (window.confirm(`Delete ${item.name}?`)) {
                let temp = items.filter((x) => x.url !== item.url);
                setItems(temp);
                setItem(null);
              }
            }}
            className="material-icons-round"
          >
            delete
          </i>
        )}
      </div>
    </div>
  );
};
