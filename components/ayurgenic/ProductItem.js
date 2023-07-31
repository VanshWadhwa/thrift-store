import React from "react";
import Link from "next/link";

export const ProductItem = ({ name, price, quantity, unit, description }) => {
  return (
    <div className="relative cardblock m-5 p-2 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link href="#">
        <img
          className="rounded-t-lg object-contain"
          src="https://lsmedia.linker-cdn.net/280948/2021/6922412.png"
          alt=""
        />
      </Link>

      <div className="p-5 ">
        <Link href="#">
          <React.Fragment>
            <h5 className="mb-2 text-4xl  font-medium tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>

            <h2 className="font-extralight inline-block text-2xl mb-5">
              Rs. {price}
            </h2>
          </React.Fragment>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <Link
          href="#"
          className=" right-[48px] mx-auto absolute bottom-5 justify-end w-3/4 inline-flex  py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <React.Fragment>
            <h2 className="mx-auto">Add to Cart</h2>

            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path> */}
            </svg>
          </React.Fragment>
        </Link>
      </div>
    </div>
  );
};
