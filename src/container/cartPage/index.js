import React, { useState, useEffect } from "react";
import Breadcrumb from "./breadcrumb";
import * as c from "./../../const";
import CartItems from "./cartItems";
import { useCart } from "react-use-cart";
import CheckOut from "./../checkout/checkout";
import EmptyCart from "./../../assets/images/empty-cart.png";
import { useHistory } from "react-router";
import NumberFormat from "react-number-format";
export default function ProductPage() {
  const history = useHistory();
  const isAuth = localStorage.getItem("isAuth") === "true";

  const [showShippingAddress, setShowShippingAddress] = useState(false);
  useEffect(() => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  }, []);

  const { isEmpty, totalUniqueItems, cartTotal } = useCart();

  const onCheckOut = () => {
    if (!isAuth) {
      history.push({
        pathname: "/login",
      });
    } else {
      setShowShippingAddress(true);
    }
  };
  return (
    <div className="lg:px-36 px-4 bg-gray-100 ">
      <Breadcrumb />
      {isEmpty ? (
        <img
          src={EmptyCart}
          alt="empty"
          className="w-96 h-96 object-center mx-auto"
        />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-1 lg:gap-5 md:grid-2 sm:grid-2 ">
          <div className="lg:col-span-2 md:grid-cols-1 px-5 bg-white rounded-lg overflow-hidden">
            {showShippingAddress ? <CheckOut /> : <CartItems />}
          </div>
          <div className="lg:col-span-1 ">
            <div className="p-5 bg-gray-200 rounded-lg">
              <div className="border-b-2 pb-3 border-gray-400">
                Order Summary
              </div>
              <div className="flex justify-between mt-4">
                <div>{totalUniqueItems} Items</div>
                <div>
                  <NumberFormat
                    value={Number(cartTotal).toFixed(2)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  {/* {c.CURRENCY}
                  {Number(cartTotal).toFixed(2)} */}
                </div>
              </div>
              <div className="flex justify-between mt-4 border-b-2 pb-3 border-gray-400">
                <div>Shipping</div>
                <div>{c.CURRENCY} 0</div>
              </div>
              <div>
                <div className="flex justify-between mt-4">
                  <div>Total</div>
                  <div>
                    <NumberFormat
                      value={Number(cartTotal).toFixed(2)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </div>
                </div>
                {/* <Link to="/checkout"> */}

                <button
                  className={`bg-red-800 w-full mt-4 h-10 rounded-lg text-white uppercase transition ease-in duration-300 hover:bg-red-900 border-2 border-red-800 ${
                    showShippingAddress ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={onCheckOut}
                  disabled={showShippingAddress}
                >
                  Checkout
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
