import React from "react";
import WishlistContent from "./content";

export default function ProductPage() {
  return (
    <div className="lg:px-36 px-4 bg-gray-100 py-4">
      {/* <Breadcrumb /> */}

      {/* <div className="grid lg:grid-cols-3 md:grid-cols-1 lg:gap-5 md:grid-2 sm:grid-2 "> */}
      {/* <div className="lg:col-span-2 md:grid-cols-1 px-5 bg-white rounded-lg overflow-hidden"> */}
      <div className="mt-4 lg:px-8 xl:px-8 px-2 py-4 bg-white text-red-800 text-xl text-semibold rounded-lg w-full shadow-md">
        My Wishlist
      </div>
      <WishlistContent />
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
