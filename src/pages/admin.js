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

let categories = ["appetizer", "entree", "dessert"];

export const Admin = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState();
  const [theme, setTheme] = useState();

  let types = [...new Set(items.map((x) => x.types.split(",")).flat())].filter(
    (x) => x
  );

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
      <button
        onClick={() => {
          form();
        }}
      >
        json
      </button>

      <button
        onClick={() => {
          let item = {};
          itemInputs.forEach((x) => {
            item[x] = "";
          });
          setItem(item);
        }}
      >
        +
      </button>

      <div id="inputs">
        {restaurantInputs.map((input) => (
          <div key={input}>
            {input}
            <input key={input} id={input} />
          </div>
        ))}
      </div>

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
        {categories.map((cat) => (
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

      {item && (
        <div id="admin-item-modal">
          <div id="admin-item">
            <button
              onClick={() => {
                setItem(null);
              }}
            >
              X
            </button>

            {item.url && (
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
            )}

            <button
              onClick={() => {
                let item = {};
                itemInputs.forEach((x) => {
                  item[x] = document.getElementById(`item-${x}`).value;
                });
                console.log(item);

                item.types = [...new Set(item.types.split(","))].join(",");
                console.log(item);

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
                } else if (
                  item.url !== "" &&
                  categories.includes(item.category)
                ) {
                  let temp = items.map((x) => (x.url === item.url ? item : x));
                  setItems(temp);
                  setItem(null);
                } else {
                  alert("error");
                }
              }}
            >
              save
            </button>

            <div id="suggestions">
              <div className="suggested">
                suggested category
                <div className="suggestion">
                  {categories.map((x) => (
                    <div
                      key={x}
                      onClick={() => {
                        document.getElementById("item-category").value = x;
                      }}
                    >
                      {x}
                    </div>
                  ))}
                </div>
              </div>
              <div className="suggested">
                suggested types
                <div className="suggestion">
                  {types.map((x) => (
                    <div
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {itemInputs.map((x) => (
              <div key={x}>
                {x}
                <input id={`item-${x}`} key={x} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
