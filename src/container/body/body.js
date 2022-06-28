import React from "react";
import HomeBanner from "../banner/homeBanner";
import ProductList from "../ProductList/behavioralHealthList";
import CancerOncology from "../ProductList/cancerOncologyList";

export default function Body() {
  return (
    <div>
      <HomeBanner />

      {/* SECTION 2 */}
      {/* <div className="h-40 sm:h-52 lg:h-80 md:h-64 xl:h-80 rounded-lg mb-5 xl:mx-2 lg:mx-2">
        <div className="grid grid-cols-2 lg:gap-5 gap-4">
          <Link to={"/category/behavioral-health"}>
            <div
              className="bg-blue-200 rounded-lg h-40 sm:h-52 lg:h-80 md:h-64 xl:h-80 relative"
              style={{
                backgroundImage: `url(${BannerImage2})`,
                backgroundColor: "#A41C22",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                backgroundSize: "cover",
              }}
            >
              <div className="text-red-800 p-2 sm:p-4 md:p-5 lg:p-5 xl:p-6 lg:text-2xl text-sm  align-center lg:top-5 lg:left-3 ">
                <div className="uppercase font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                  BEHAVIORAL HEALTH
                </div>
                <div className="uppercase font-bold text-black text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">
                  Products
                </div>
                <div className="uppercase text-xs sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                  Up to <span className="font-bold">60% off</span>
                </div>
                <div className="inline-block align-middle pt-2"></div>
              </div>
            </div>
          </Link>

          <Link to={"/category/cancer-oncology"}>
            <div
              className="bg-red-300 rounded-lg h-40 sm:h-52 lg:h-80 md:h-64 xl:h-80 relative"
              style={{
                backgroundImage: `url(${BannerImage3})`,
                backgroundColor: "#A41C22",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                backgroundSize: "cover",
              }}
            >
              <div className="text-red-800 p-2 sm:p-4 md:p-5 lg:p-5 xl:p-6 lg:text-2xl text-sm  align-center lg:top-5 lg:left-3">
                <div className="uppercase font-bold text-xs sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                  DIABETES / <br />
                  ENDOCRINOLOGY
                </div>
                <div className="uppercase font-bold text-black text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">
                  Products
                </div>
                <div className="uppercase text-xs sm:text-md md:text-lg lg:text-xl xl:text-2xl">
                  Up to <span className="font-bold">60% off</span>
                </div>
                <div className="inline-block align-middle pt-2"></div>
              </div>
            </div>
          </Link>
        </div>
      </div> */}

      {/* PRODUCT SECTION */}
      <div className="h-auto rounded-xl border-2 mt-0 relative mb-5 ">
        <div className="text-2xl font-bold my-2 mx-3">Behavioral Health</div>
        <ProductList />
      </div>

      <div className="h-auto rounded-xl border-2  mt-0 relative mb-5 ">
        {/* <ProductList /> */}
        <div className="text-2xl font-bold my-2 mx-3">Cancer/ Oncology</div>
        <CancerOncology />
      </div>

      {/* <div className="h-auto rounded-xl border-2 mt-0 relative mb-5 "> */}
      {/* <ProductList /> */}
      {/* <div className="text-2xl font-bold my-2 mx-3">Trending Products</div>
        <TrendingList /> */}
      {/* </div> */}
    </div>
  );
}
