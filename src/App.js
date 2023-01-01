import React, { useState } from "react";
import Category from "./Category";
import items from "./data";
import Menu from "./Menu";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  return (
    <div className="content">
      <h1>Our Menu</h1>
      <Category categories={categories} filterItems={filterItems} />
      <Menu menuItems={menuItems} />
    </div>
  );
};

export default App;
