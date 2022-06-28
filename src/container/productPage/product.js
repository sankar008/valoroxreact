import React, { useState } from "react";
import { ReactComponent as ShoppingCart } from "./../../assets/icons/shopping-cart.svg";
import { ReactComponent as WishList2 } from "./../../assets/icons/wishlist2.svg";
import { Link } from "react-router-dom";
import * as c from "./../../const";
import NumberFormat from "react-number-format";
import { useCart } from "react-use-cart";
export default function ProductCard(props) {
  const { addItem } = useCart();
  const {
    id,
    name,
    price,
    sell_price,
    discount,
    description,
    image,
    category,
    category_slug,
    lab,
  } = props;
  const URL = props && c.URL + "/uploads/products/" + image;

  const data = {
    id: id,
    price: sell_price,
    name: name,
    url: URL,
  };
  const [addWishlist, setAddWishlist] = useState(false);
  return (
    <div className="bg-white w-full h-auto rounded-lg lg:px-12 mb-5">
      <div className="grid lg:grid-cols-2 md:grid-cols-2">
        <div className="relative">
          <img
            src={URL}
            alt="Product"
            className="p-10 w-full transition duration-500 ease-in-out transform hover:-translate-y-5 hover:scale-110"
          />
          <div className="absolute top-5 right-5 rounded-full p-2 shadow-xl">
            {addWishlist ? (
              <WishList2
                width="18px"
                height="18px"
                fill="#991B1B"
                onClick={() => setAddWishlist(!addWishlist)}
              />
            ) : (
              <WishList2
                width="18px"
                height="18px"
                fill="#c3c3c3"
                onClick={() => setAddWishlist(!addWishlist)}
              />
            )}
          </div>
        </div>
        <div className="p-5 my-auto">
          {discount > 0 ? (
            <div
              className="h-auto w-16 bg-green-500 top-3 left-3 rounded-lg text-center my-auto py-auto text-white"
              style={{ fontSize: "10px" }}
            >
              - {discount}% OFF
            </div>
          ) : null}
          <div className="text-3xl mt-5">{name}</div>
          <div className="text-md mb-5">{lab}</div>
          <div className="my-5 text-2xl text-red-800">
            <NumberFormat
              value={sell_price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            {/* {c.CURRENCY} {Number(sell_price).toFixed(2)} */}
            {discount > 0 ? (
              <span className="line-through text-gray-500 ml-4">
                <NumberFormat
                  value={price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                {/* {c.CURRENCY} {Number(price).toFixed(2)} */}
              </span>
            ) : null}
          </div>
          <div
            className="my-5 text-md"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <div className="my-5 flex lg:w-5/12 justify-center bg-red-800 cursor-pointer rounded p-2 hover:bg-red-900 transition ease-in duration-300 py-auto border-2 border-red-800">
            <div className="w-12 h-12 rounded-full relative">
              <ShoppingCart
                width="25px"
                fill="white"
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />{" "}
            </div>
            <button
              className="text-lg text-white font-semibold pt-1 focus:outline-none"
              key={id}
              onClick={() => {
                addItem(data);
              }}
            >
              Add to Cart
            </button>
          </div>
          <div className="my-5">
            {/* <div className=" text-black font-semibold text-sm">
              SKU: <span className="text-gray-400 font-light">N/A - 227</span>
            </div> */}
            <div className=" text-black font-semibold">
              Categories:{" "}
              <Link to={"/category/" + category_slug}>
                <span className="text-gray-400 font-light">{category}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
