import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

// import bgImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-white flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h4 className="py-3 text-2xl md:text-2xl font-bold">
            India's Largest Online Thrift Store
          </h4>
          <p className="text-2xl">
            The online store we all need; the environment too.
          </p>
          <h5 className="py-3 text-1xl md:text-7xl text-">60% Off Site-wide</h5>
          <h6 className="py-3 text-1xl md:text-7xl text-">Join as</h6>
          <div className="flex align-middle ">
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
              <Link href="/customer/auth/login/">Buyer</Link>
            </button>

            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <Link href="/customer/auth/login/">Seller</Link>
            </button>
          </div>
        </div>
        <div>
          <img
            className="container px-32 py-8"
            src="/assets/hero.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
