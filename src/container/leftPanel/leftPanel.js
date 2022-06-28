import React from "react";
import Categories from "../categories/categories";
// import PopularCategories from "../popularCategories/popularCategories";
// import HotDeals from "../hotDeal/hotDeal";
import Product from "../product/product";

import UploadModel from "./../uploadPrescription/uploadPrescription";

export default function LeftPanel() {
  return (
    <div>
      <Categories />
      <Product />
      {/* <PopularCategories /> */}
      {/* <HotDeals /> */}
      <div
        className="lg:flex-1 mx-2 rounded overflow-hidden hover:rounded-lg hover:shadow-xl my-2 relative"
        
      ><div className="grid lg:col-span-2 col-span-1 my-auto h-16 text-white my-auto transition ease-in duration-300 ">
      <UploadModel />
    </div></div>
    </div>
  );
}
