import React, { useEffect, useState } from "react";
import { Restaurants } from "../restaurants";
import "./admin.scss";

let restaurantInputs = [
  "name",
  "url",
  "phone",
  "pdf",
  "address",
  "map",
  "categories"
];
let itemInputs = ["name", "url", "category", "types", "sides", "info"];

let colors = [
  "d50000",
  "aa00ff",
  "6200ea",
  "304ffe",
  "0091ea",
  "00c853",
  "ffd600",
  "ff6d00"
];

export const Admin = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState();
  const [theme, setTheme] = useState();

  //prefill restaurant details
  useEffect(() => {
    setItems(Restaurants.rialto.items);
    restaurantInputs.forEach((x) => {
      document.getElementById(x).value = Restaurants.rialto[x];
    });
    setTheme(Restaurants.rialto.theme);
  }, []);

  //prefill item details
  useEffect(() => {
    if (item) {
      itemInputs.forEach((x) => {
        document.getElementById(`item-${x}`).value = item[x];
      });
    }
  }, [item]);

  //generate restaurant json
  let form = () => {
    let restaurant = {};
    restaurant.theme = theme;

    restaurantInputs.forEach((x) => {
      restaurant[x] = document.getElementById(x).value;
    });

    restaurant.items = items;

    console.log(JSON.stringify(restaurant));
  };

  return (
    <div id="admin">
      <div id="inputs">
        {restaurantInputs.map((input) => (
          <div key={input}>
            {input}
            <input key={input} id={input} />
          </div>
        ))}

        <div id="theme">
          {colors.map((x) => (
            <div
              key={x}
              onClick={() => {
                setTheme(x);
              }}
              style={{ background: `#${x}` }}
              className={x === theme ? "selected" : ""}
            >
              {x === theme && <i className="material-icons-round">check</i>}
            </div>
          ))}
        </div>

        <div id="admin-items">
          {["appetizer", "entree", "dessert"].map((cat) => (
            <div key={cat}>
              <div>{cat}</div>
              {items
                .filter((item) => item.category === cat)
                .map((item) => (
                  <div
                    key={item.url}
                    className="item"
                    onClick={() => {
                      setItem(item);
                    }}
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            form();
          }}
        >
          update
        </button>

        <button
          onClick={() => {
            setItem({});
          }}
        >
          +
        </button>

        {item && (
          <div id="admin-item-modal">
            <div id="admin-item">
              {itemInputs.map((x) => (
                <div key={x}>
                  {x}
                  <input id={`item-${x}`} key={x} />
                </div>
              ))}

              <button
                onClick={() => {
                  setItem(null);
                }}
              >
                X
              </button>
              <button
                onClick={() => {
                  let item = {};
                  itemInputs.forEach((x) => {
                    item[x] = document.getElementById(`item-${x}`).value;
                  });
                  let temp = items.map((x) => (x.url === item.url ? item : x));
                  setItems(temp);
                  setItem(null);
                }}
              >
                save
              </button>
              <button
                onClick={() => {
                  if (window.confirm(`Delete ${item.name}?`)) {
                    let temp = items.filter((x) => x.url !== item.url);
                    setItems(temp);
                    setItem(null);
                  }
                }}
              >
                delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
