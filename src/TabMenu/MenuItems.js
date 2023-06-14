import React from "react";

const MenuItems = ({ items }) => {
  return (
    <>
      <div className="grid-container">
        {items.map((elem) => {
          const { id, name, image, describption, price } = elem;

          return (
            <>
              <div className="container" key={id}>
                <div className="left">
                  <img src={image} alt={name} srcset="" />
                </div>
                <div className="right">
                  <div className="name">{name}</div>
                  <p>{describption}</p>
                  <div className="option">
                    <div className="price">Price: {price}</div>
                    <button type="button" className="order">
                      Order Now
                    </button>
                  </div>
                  <div className="note">*Price may vary on selected date</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MenuItems;
