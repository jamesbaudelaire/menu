import React, { useEffect, useState } from "react";
import { Restaurants } from "../restaurants";
import "./admin.scss";

import { Items } from "./admin/items";
import { Item } from "./admin/item";

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

  //generate restaurant json
  let form = () => {
    let restaurant = {};
    restaurant.theme = theme;

    restaurantInputs.forEach((x) => {
      restaurant[x] = document.getElementById(x).value;
    });

    restaurant.items = items;

    document.getElementById("json").value = JSON.stringify(restaurant);
  };

  return (
    <div id="admin">
      <div id="json-form">
        <button
          onClick={() => {
            form();
          }}
        >
          json
        </button>
        <textarea id="json" />
      </div>

      <Items
        items={items}
        item={item}
        setItem={setItem}
        itemInputs={itemInputs}
        categories={categories}
      />

      {item && (
        <Item
          items={items}
          item={item}
          setItem={setItem}
          setItems={setItems}
          itemInputs={itemInputs}
        />
      )}

      <div id="theme">
        {colors.map((x) => (
          <div
            key={x}
            onClick={() => {
              setTheme(x);
            }}
            style={{ background: `#${x}` }}
            className={x === theme ? "selected" : ""}
          ></div>
        ))}
      </div>

      <div id="restaurant-inputs">
        {restaurantInputs.map((input) => (
          <div key={input}>
            {input}
            <input key={input} id={input} />
          </div>
        ))}
      </div>
    </div>
  );
};
