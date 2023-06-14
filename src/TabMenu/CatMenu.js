import React from "react";

const CatMenu = ({ filterItem, catItems }) => {
  return (
    <>
      <div className="lower">
        <div className="top">
          {catItems.map((curElme, index) => {
            return (
              <button
                type="button"
                className="btn btn-warning"
                key={index}
                onClick={() => filterItem(curElme)}
              >
                {curElme}
              </button>
            );
          })}
          {/* <button
            type="button"
            class="btn btn-warning"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            type="button"
            class="btn btn-warning"
            onClick={() => filterItem("lunch")}
          >
            Lunch
          </button>
          <button
            type="button"
            class="btn btn-warning"
            onClick={() => filterItem("evening")}
          >
            Evening
          </button>
          <button
            type="button"
            class="btn btn-warning"
            onClick={() => filterItem("dinner")}
          >
            Dinner
          </button> */}
          {/* <button
            type="button"
            class="btn btn-warning"
            onClick={() => setItems(Menu)}
          >
            All
          </button> */}
        </div>
        <div className="bottom"></div>
      </div>
    </>
  );
};

export default CatMenu;
