import React, { useEffect, useState } from "react";
import "../../styles/items.scss";
import { Link } from "react-router-dom";

import { FilterNav } from "./filterNav";
import { useSelector } from "react-redux";

import { IO } from "../../functions/IO";

import { version } from "../../version";
import { motion } from "framer-motion";
import { Item } from "./itemModal";

export const Items = ({ restaurant, items }) => {
  const filter = useSelector((s) => s.filter);
  const lastItem = useSelector((s) => s.lastItem);

  const [selectedItem, setSelectedItem] = useState();

  let itemsCopy = items;

  if (filter) {
    items = items
      .filter((item) => item.types)
      .filter((item) => item.types.includes(filter));
  }

  let categories = () => [...new Set(items.map((item) => item.category))];
  let categoryItems = (category) =>
    items.filter((item) => item.category === category);

  useEffect(() => {
    let targets = document.querySelectorAll(".item");
    targets.forEach(IO);
  });

  useEffect(() => {
    let item = document.getElementById(lastItem);

    if (item) {
      item.scrollIntoView({
        block: "center",
        inline: "center"
      });
    }
  }, [lastItem]);

  return (
    <>
      <motion.div
        id="items"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ bounce: 0 }}
      >
        {categories().map((category) => (
          <div className="category" key={category}>
            <div className="category-name"> {category}</div>
            <div className="items">
              {categoryItems(category).map((item) => (
                <div
                  data-img={`https://res.cloudinary.com/baudelaire/image/upload/w_700/${version}/menu/${restaurant}/${item.url}.jpg`}
                  className="item"
                  id={item.url}
                  key={item.url}
                  onClick={() => {
                    setSelectedItem(item);
                  }}
                />
              ))}
            </div>
          </div>
        ))}

        <FilterNav items={itemsCopy} filter={filter} />
      </motion.div>
      {selectedItem && <Item item={selectedItem} setItem={setSelectedItem} />}
    </>
  );
};
