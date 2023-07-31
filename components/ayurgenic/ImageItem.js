import React from "react";
import Link from "next/link";

const ImageItem = ({ product }) => {
  return (
    <Link href={"/ayurgenic/all/#" + product.id} className="hover:scale-125 ">
      <a className="  w-96 h-80 bg-white rounded-lg shadow-md hover:scale-105 dark:bg-gray-800 dark:border-gray-700 relative flex flex-col justify-around">
        {/* <Link href="#"> */}
        <div className="p-1 w-[200px] rounded-xl h-[100px] object-fill aspect-auto">
          <img
            className=" object-cover aspect-video h-36"
            src={product.image}
            alt="product image"
          />
        </div>
        {/* </Link> */}
        <div className="px-1 pb-5 pt-10">
          {/* <Link href="#"> */}
          <h5 className="text-xl mx-2 my-1 font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          {/* </Link> */}

          <div className="flex justify-between items-center">
            <span className=" text-l mx-2 font-bold text-gray-900 dark:text-white">
              Rs.{product.price} /-{" "}
              <span className="text-sm  font-light text-gray-900 dark:text-white">
                <s>Rs.{product.mrp} </s>
              </span>
            </span>
            {/* <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a> */}
          </div>
        </div>
        {product.membership_price && (
          <div className="bg-gradient-to-r  from-yellow-200 to-yellow-500 text-center   ">
            <div className="  p-2 text-sm text-center font-bold rounded-lg items-center justify-between transition hover:bg-grey-light dark:text-black">
              Membership Price: Rs.{product.membership_price}/-
            </div>
          </div>
        )}
      </a>
    </Link>
  );
};

export default ImageItem;
