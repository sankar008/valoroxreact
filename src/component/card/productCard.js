import React, { useState } from "react";
import { ReactComponent as ShoppingCart } from "./../../assets/icons/shopping-cart.svg";
import { ReactComponent as WishList2 } from "./../../assets/icons/wishlist2.svg";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import * as API from "./../../api/api";
const ItemCard = (props) => {
  const {
    image,
    slug,
    name,
    description,
    price,
    sell_price,
    discount,
    id,
    lab,
  } = props;

  const user = JSON.parse(localStorage.getItem("userData"));

  const { addItem } = useCart();
  const data = {
    id: id,
    name: name,
    price: sell_price,
    url: image,
  };

  const [addWishlist, setAddWishlist] = useState(false);
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
      <div
        className="lg:flex-1 mx-2 rounded overflow-hidden border-2 border-red-50 hover:border-2 hover:border-red-800 hover:rounded-lg hover:shadow-xl my-2 relative"
        style={{ height: "550px" }}
      >
        <Link to={"/product/" + slug}>
          {discount > 0 ? (
            <div
              className="h-auto w-16 bg-green-500 top-3 left-3 rounded-lg absolute text-center my-auto py-auto text-white"
              style={{ zIndex: 999, fontSize: "10px" }}
            >
              - {discount}% OFF
            </div>
          ) : null}
          <img
            className="transition duration-500 ease-in-out w-full h-80 transform hover:-translate-y-5 hover:scale-110"
            src={image}
            alt={name}
          />
          <div className="px-6 py-4">
            {/* <div className="font-light text-base mb-1">{category}</div> */}

            <div className="font-bold text-xl descriptionMulti">{name}</div>
            <div className="font-light text-xs mb-2 descriptionMulti">
              {lab}
            </div>
            <div className="text-red-800 text-xl mb-2">
              <NumberFormat
                value={Number(sell_price).toFixed(2)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              {/* {c.CURRENCY} {Number(sell_price).toFixed(2)} */}
              {discount > 0 ? (
                <span className="line-through text-gray-500 ml-4">
                  <NumberFormat
                    value={Number(price).toFixed(2)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </span>
              ) : null}
            </div>
            <p
              className="text-grey-darker text-base description"
              dangerouslySetInnerHTML={{ __html: description }}
            >
              {/* {description} */}
            </p>
          </div>
        </Link>
        <Link to="/cart">
          <div
            className="px-6 mx-auto flex justify-center hover:bg-red-800 cursor-pointer rounded bg-red-800 p-2 text-white border-2 border-red-800 transition ease-in duration-100 absolute bottom-0 mx-5 hover:bg-red-900 w-full"
            key={id}
            onClick={() => addItem(data)}
          >
            <div className="w-12 h-12 rounded-full relative ">
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
        <div
          className="absolute top-3 right-3 cursor-default"
          style={{ zIndex: 999 }}
        >
          {addWishlist ? (
            <WishList2
              width="18px"
              height="18px"
              fill="#991B1B"
              onClick={handleWishList}
            />
          ) : (
            <WishList2
              width="18px"
              height="18px"
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
