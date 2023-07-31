import React from "react";
import ItemModel from "./ItemModel";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    // max-width-sm property removed
    // <div className=" m-3 p-2 mx-auto w-[150px]  sm:w-[200px] bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  bg-white  border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    //   <img className="small " src={product.image} alt={product.name} />

    //   <h2 className="mt-2 font-bold text-ellipsis text-xl p-1 inline-block w-[65%] text-left">
    //     {product.name}
    //   </h2>

    //   <div className="  inline-block w-[35%]"></div>
    //   <h2 className=" text-base text-right font-bold ">₹ {product.price}</h2>
    //   <h2 className=" text-right font-extralight text-xs ">
    //     <s>₹ {product.mrp}</s>
    //   </h2>

    //   <h2 className="inline-block ml-1 text-xs">
    //     ( {product.quantity} {product.unit} )
    //   </h2>

    //   <ItemModel product={product} />

    //   <div className="mx-auto my-2">
    //     {product.availability == 1 ? (
    //       <button
    //         className="btn-grad w-full mx-5 "
    //         onClick={() => onAdd(product)}
    //       >
    //         Add To Cart
    //       </button>
    //     ) : (
    //       <button
    //         className="btn-disabled w-full mx-5 "
    //         disabled
    //         onClick={() => onAdd(product)}
    //       >
    //         Out of stock
    //       </button>
    //     )}
    //   </div>
    // </div>
    <div className="max-w-sm mx-auto m-2 ">
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a id={product.id}>
          <img
            className="rounded-t-2xl p-2 object-cover aspect-video h-48 "
            // objectcover aspect
            src={product.images[0].image}
            // src={"http://127.0.0.1:8000/" + product.images[0].image}
            // src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white h-20 text-ellipsis overflow-hidden ">
              {product.name}
              {/* {console.log(product.images[0].image)} */}
            </h3>
          </a>
          {/* <div className="flex items-center mt-2.5 mb-5">
            <svg
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div> */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Rs. {product.price} /-
              {"  "}
              <span className="text-sm font-bold text-gray-900 dark:text-gray-400">
                <s>Rs.{product.mrp}</s>
              </span>
            </span>
            {/* <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a> */}
          </div>
          <div className="relative w-full h-24">
            <div className="absolute bottom-0 right-0 left-0">
              {/* this div added */}
              <ItemModel product={product} />
              <div className="mx-auto my-2 w-full">
                {/* {product.availability == 1 ? ( */}
                {1 ? (
                  <button
                    className="btn-grad w-full mx-auto "
                    onClick={() => onAdd(product)}
                  >
                    Add To Cart
                  </button>
                ) : (
                  <button
                    className="btn-disabled w-full mx-auto px-5 "
                    disabled
                    onClick={() => onAdd(product)}
                  >
                    Out of stock
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {product.membership_price && (
          <div className="bg-gradient-to-r from-yellow-200 to-yellow-500 text-center  rounded-lg ">
            <div className="  p-2 text-sm text-center font-bold rounded-lg items-center justify-between transition hover:bg-grey-light dark:text-black">
              Membership Price: Rs.{product.membership_price}/-
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
