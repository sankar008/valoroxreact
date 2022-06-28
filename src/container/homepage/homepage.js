import React from "react";
import LeftPanel from "../leftPanel/leftPanel";
import Body from "../body/body";

// import Categories from "../categories/categories";

export default function Homepage() {
  return (
    <div className="lg:px-36 lg:pt-12 pt-3">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4 px-4 hidden lg:flex">
          <LeftPanel />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4 mb-4">
          <Body />
        </div>
      </div>
    </div>
  );
}
