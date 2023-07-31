import React, { useState } from "react";
import Product from "./Product";
import { ProductItem } from "./ProductItem";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ItemModel from "./ItemModel";

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className=" block order-last lg:order-first ">
      {/* h-screen */}

      {/* <ProductItem /> */}
      {/* <div className="grid grid-cols-2 gap-x-2 justify-evenly sm:grid-cols-2 xl:grid-cols-4 ">
   
        {products.map((product) => (
          <>
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          </>
        ))}
      </div> */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-4">
            {products.map((product) => (
              <>
                <Product
                  key={product.id}
                  product={product}
                  onAdd={onAdd}
                ></Product>
              </>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
