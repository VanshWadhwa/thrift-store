import React from "react";

const FilterButtons = ({ filterItem, setproductItems, items, products }) => {
  return (
    <>
      <div className="container  grid grid-cols-3  sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-content-center  content-center mx-auto">
      <button
          className="btn-filter m-5 text-sm"
          onClick={() => setproductItems(products)}
        >
          All Products
        </button>
        {items.map((Val, id) => {
          return (
            <button
              className="btn-filter m-5  my-5 text-sm "
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}

      </div>
    </>
  );
};

export default FilterButtons;
