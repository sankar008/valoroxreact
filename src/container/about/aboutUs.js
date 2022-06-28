import React, { useEffect } from "react";

import LoginImg from "./../../assets/images/aboutUs.png";

export default function AboutUs() {
  useEffect(() => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="flex  md:h-auto bg-white lg:px-36 px-8">
      <div
        className="w-1/2 bg-cover md:block hidden"
        style={{
          backgroundImage: `url(${LoginImg})`,
        }}
      ></div>

      <div className="md:w-1/2 max-w-lg mx-auto my-auto px-4 lg:py-24 xl:py-24 py-10 shadow-none">
        <div className="text-left p-0 font-sans">
          <h1 className=" text-gray-800 text-5xl font-medium mb-5 ">
            About <span className="text-red-800">Us</span>
          </h1>
          <div className="my-5">
            <p className="my-5">
              We are a Physician influenced pharmacy dedicated to providing
              lower cost medication to people all over the world, and for all
              illnesses...
            </p>
            <p>
              We sell the same branded pharmaceutical drugs at huge discounts!
              Many times the discounts can be as high as 60% off from what you
              would pay at your local pharmacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
