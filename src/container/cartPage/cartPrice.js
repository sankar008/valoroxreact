import React from "react";
import { useCart } from "react-use-cart";
import * as c from "./../../const";
import { Link } from "react-router-dom";

export default function cartPrice() {
  const { totalUniqueItems, cartTotal, items } = useCart();
  return (
    <div className="p-5 bg-gray-200 rounded-lg">
      <div className="border-b-2 pb-3 border-gray-400">Order Summary</div>
      <div className="flex justify-between mt-4">
        <div>{totalUniqueItems} Items</div>
        <div>
          <NumberFormat
            value={cartTotal}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
          as
          {/* {c.CURRENCY} */}
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
            {/* {c.CURRENCY}
            {Number(cartTotal).toFixed(2)} */}
          </div>
        </div>
        {isAuth ? (
          <Link to="/checkout">
            <button
              className="bg-red-800 w-full mt-4 h-10 rounded-lg text-white uppercase transition ease-in duration-300 hover:bg-red-900 border-2 border-red-800"
              // onClick={() => console.log(items)}
            >
              Checkout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button
              className="bg-red-800 w-full mt-4 h-10 rounded-lg text-white uppercase transition ease-in duration-300 hover:bg-red-900 border-2 border-red-800"
              // onClick={() => console.log(items)}
            >
              Checkout
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
