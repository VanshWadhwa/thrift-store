import React, { useState } from "react";

const BMI = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
  return (
    <div className="my-12 grid grid-cols-1  lg:grid-cols-2 ">
      <div className="p-5 my-auto text-center">
        <article>
          <h1 className="lg:text-6xl text-center sm:text-3xl md:text-4xl ">
            <b>BMI Calculator</b>
          </h1>
        </article>
        <p>
          Body mass index (BMI) is a measure of body fat based on height and
          weight that applies to adult men and women.{" "}
        </p>

        {console.log(bmi)}
        <div className="m-5">
          {!isNaN(bmi) ? (
            <div className=" border-dotted border-2 border-orange-500 p-5">
              <h1 className="text-4xl ">{bmi}</h1>
              <h2 className="text-2xl ">
                You are <b>{info}</b>
              </h2>
            </div>
          ) : (
            <></>
            // <div className="border-dotted border-2 border-red-500 p-5">
            //   <h1 className="text-4xl  ">Invalid Values</h1>
            // </div>
          )}
        </div>
      </div>{" "}
      <div>
        <label
          // htmlFor="text"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
          htmlForhtmlFor="name"
        >
          Enter your height
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="nnumber"
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height in cm"
        />
        <label
          // htmlFor="text"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
          htmlForhtmlFor="name"
        >
          Enter your Weight
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight in kg"
        />
        <div className="mx-auto my-10">
          <button onClick={handleBmi} className="btn-grad w-full !h-[50px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BMI;
