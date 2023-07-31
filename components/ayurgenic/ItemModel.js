import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiStar, FiX } from "react-icons/fi";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ItemModel = ({ product }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="inset-0  flex items-center justify-center bg-white">
        <button
          type="button"
          onClick={openModal}
          className="w-full uppercase rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Learn More
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto bg-white">
            {/* <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all  dark:bg-gray-800 dark:border-gray-700">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 "
                  >
                    {product.name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm ">Rs.{product.price}/-</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div> */}
            <div className="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4 ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <Dialog.Panel className="flex text-base text-left transform transition w-full  dark:bg-gray-800 dark:border-gray-700  rounded-lg">
                  <div className="w-full relative flex items-center  px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <FiX className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                      <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-5 lg:col-span-6">
                        {/* <img
                          src={product.image}
                          alt={product.imageAlt}
                          className="object-center object-cover"
                        /> */}
                        <iframe
                          src="https://dev.wearfits.com/minimal-demo11"
                          width="600px"
                          height="600px"
                        />
                        {/* <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" /> */}
                      </div>
                      <div className="sm:col-span-8 lg:col-span-6">
                        <h2 className="text-3xl font-extrabold  sm:pr-12">
                          {product.name}
                        </h2>

                        <section
                          aria-labelledby="information-heading"
                          className="mt-2"
                        >
                          <h3 id="information-heading" className="sr-only">
                            Product information
                          </h3>

                          <p className="text-2xl font-bold ">
                            Price: ₹{product.price}/-
                            <span className="text-sm font-light">
                              {"    "}
                              {"    "}

                              <s>₹{product.mrp}/-</s>
                            </span>
                          </p>

                          <p className="text-2xl ">
                            Qty: {product.quantity} {product.unit}
                          </p>

                          {product.membership_price && (
                            <div className="bg-gradient-to-r from-yellow-200 to-yellow-500 text-center ">
                              <div className=" my-3 p-3  text-sm text-center font-semibold light dark:text-black">
                                Membership Price : Rs.{product.membership_price}
                                /-
                              </div>
                            </div>
                          )}

                          {/* Reviews */}
                          {/* <div className="mt-6">
                            <h4 className="sr-only">Reviews</h4>
                            <div className="flex items-center">
                              <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                  <FiStar
                                    key={rating}
                                    className={classNames(
                                      product.rating > rating
                                        ? "text-gray-900"
                                        : "text-gray-200",
                                      "h-5 w-5 flex-shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                              <p className="sr-only">
                                {product.rating} out of 5 stars
                              </p>
                              <a
                                href="#"
                                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                {product.reviewCount} reviews
                              </a>
                            </div>
                          </div> */}
                        </section>

                        <section
                          aria-labelledby="options-heading"
                          className="mt-10"
                        >
                          <h3 id="options-heading" className="font-bold">
                            About
                          </h3>
                          <button className="color-blue">
                            <Link
                              href={"https://dev.wearfits.com/minimal-demo11"}
                            >
                              Virtual Try On
                            </Link>
                          </button>
                          <p>{product.description}</p>
                        </section>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ItemModel;
