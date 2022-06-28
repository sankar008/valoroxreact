import React from "react";
import BannerImage from "./../../assets/images/banner.png";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <div
      className="w-full lg:h-96 h-60 bg-red-200 lg:rounded-xl mb-5 lg:mx-2 xl:mx-2 flex flex-wrap content-center justify-center"
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundColor: "#A41C22",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center flex-wrap">
        <div className="sm:text-xl md:text-3xl lg:text-4xl text-center w-full px-3">
          Making life-saving medication affordable to all
        </div>
        <div className="inline-block align-middle pt-2 item-center">
          <Link
            to={{
              pathname: "/category/medicine",
              state: {
                slug: 1,
              },
            }}
          >
            <button className="bg-white text-black uppercase lg:text-xl text-sm lg:p-3 p-2 rounded-lg ">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
