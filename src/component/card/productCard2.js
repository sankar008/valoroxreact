import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ShoppingCart } from "./../../assets/icons/shopping-cart.svg";
import { ReactComponent as WishList2 } from "./../../assets/icons/wishlist2.svg";

import NumberFormat from "react-number-format";
import { useCart } from "react-use-cart";
import * as API from "./../../api/api";
const ItemCard = (props) => {
  const { image, slug, name, price, sell_price, discount, id, description } =
    props;
  const { addItem } = useCart();
  const data = {
    id: id,
    name: name,
    price: sell_price,
    url: image,
  };
  const [addWishlist, setAddWishlist] = useState(false);
  const user = JSON.parse(localStorage.getItem("userData"));

  const handleWishList = async () => {
    setAddWishlist(!addWishlist);
    try {
      const requestObj = {
        product_id: id,
        user_id: user.id,
      };
      await API.wishlist_store(requestObj);
    } catch (e) {}
  };
  return (
    <>
      <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden relative h-96">
        {discount > 0 ? (
          <div
            className="h-auto w-16 bg-green-500 top-3 left-3 rounded-lg absolute text-center my-auto py-auto text-white"
            style={{ zIndex: 999, fontSize: "10px" }}
          >
            - {discount}% OFF
          </div>
        ) : null}
        <Link to={"/product/" + slug}>
          <div
            className="flex items-end justify-end h-56 w-full bg-cover transition duration-500 ease-in-out transform hover:-translate-y-5 hover:scale-110"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center center",
            }}
            // style={{backgroundImage: `url("asd")`}}
          >
            {/* <Link to="/cart"> */}
            {/* <div
          className="p-2 rounded-full bg-red-800 text-white mx-5 -mb-4 hover:bg-white hover:text-red-800 focus:outline-none border-2 border-red-800"
          key={id}
          onClick={() => addItem(data)}
        >
          <svg
            className="h-5 w-5 hover:text-red-800 focus:text-red-800"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </div> */}

            {/* </Link> */}
          </div>
          <div className="px-5 py-3">
            <h3 className="text-gray-700 font-bold capitalize">{name}</h3>

            <span className="text-red-800 mt-2 ">
              {/* {c.CURRENCY} {Number(sell_price).toFixed(2)} */}
              <NumberFormat
                value={Number(sell_price).toFixed(2)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              {discount > 0 ? (
                <span className="line-through text-gray-500 ml-4">
                  <NumberFormat
                    value={Number(price).toFixed(2)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  {/* {c.CURRENCY} {Number(price).toFixed(2)} */}
                </span>
              ) : null}
            </span>
            <p
              className="text-grey-darker text-base descriptionMulti"
              dangerouslySetInnerHTML={{ __html: description }}
            >
              {/* {description} */}
            </p>
          </div>
          <div
            className="px-6 mx-auto flex justify-center hover:bg-red-800 cursor-pointer rounded bg-red-800 p-2 text-white border-2 border-red-800 transition ease-in duration-100 bottom-0 mx-5 hover:bg-red-900 w-full"
            key={id}
            onClick={() => addItem(data)}
          >
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
            <div className="my-auto text-lg font-semibold">Add to Cart</div>
          </div>
        </Link>
        <div className="absolute top-3 right-3">
          {addWishlist ? (
            <WishList2
              width="25px"
              height="25px"
              fill="#991B1B"
              onClick={handleWishList}
            />
          ) : (
            <WishList2
              width="25px"
              height="25px"
              fill="#c3c3c3"
              onClick={handleWishList}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ItemCard;
