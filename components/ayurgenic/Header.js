import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function Header(props) {
  return (
    <header className=" p-3 top-0 right-0 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      {/* <div>
        <Link href="#/">
          <h1>Small Shopping Cart</h1>
        </Link>
      </div> */}
      <div className="flex flex-row  items-cente">
        Your Cart :{/* <AiOutlineShoppingCart /> : */}
        <span className="relative inline-block">
          <AiOutlineShoppingCart size={"1.5rem"} />
          {props.countCartItems ? (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {props.countCartItems}
            </span>
          ) : (
            ""
          )}
        </span>
        {/* <Link href="#/signin"> SignIn</Link> */}
      </div>
    </header>
  );
}
