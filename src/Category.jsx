import React, { useState } from "react";

const Category = ({ categories, filterItems }) => {
  
  return (
    <div className="buttons">
      {categories.map((category, index) => {
        return (
          <button onClick={() => filterItems(category)} key={index}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
