import React from "react";
import LeftPanel from "../leftPanel/leftPanel";
import ProductList from "./productList";

export default function Category(props) {
  const slug = props.match.params.slug;
  const allSlug = props.location.state ? props.location.state.slug : "";
  return (
    <div className="lg:px-36 lg:pt-12 pt-3">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4 px-4 hidden lg:flex xl:flex">
          <LeftPanel />
        </div>
        <div className="w-full sm:w-1/2 md:w-full lg:w-3/4 xl:w-3/4 mb-4">
          <ProductList slug={slug} allProd={allSlug} />
        </div>
      </div>
    </div>
  );
}
