import React from "react";
import { ProductItem } from "../../components/ayurgenic/ProductItem";

// import {fake}
import fake_ayurgenic from "../../public/fake_ayurgenic.json";

const FA = fake_ayurgenic;
const product_detail = () => {
  return (
    <div>
      Individual product detail
      {FA.map((item) => {
        <h1>{item.name}</h1>;
      })}
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default product_detail;
