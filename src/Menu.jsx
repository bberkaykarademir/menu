import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <div className="menu">
      {menuItems.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <div className="item" key={id}>
            <img src={img} />
            <div className="details">
              <div className="titlesec">
                <h2>{title}</h2>
                <p className="price">${price}</p>
              </div>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
