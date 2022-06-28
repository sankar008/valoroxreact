import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
            About <span className="text-red-800">You</span>
          </h1>
          <div className="my-5">
            <p className="my-5">
              Are you struggling to pay for your ridiculously expensive, Doctor
              prescribed medication each month for your chronic illness? Maybe
              you don't have private health insurance or don't qualify for state
              aid?
            </p>
            <p>Or maybe you don't have a Medicare Part D program?</p>
            <p>
              If this is you, then we can definitely help! Go to our website
              <Link to="/">www.ValeoRx.com</Link> to find the medication that
              you're looking for or give us a call at{" "}
              <a href="tel:888-254-4844">888-254-4844</a>. Chances are we can
              save you thousands of dollars each year on your Meds. Yes
              THOUSANDS!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
