import React from "react";
import { useCart } from "react-use-cart";
import { ReactComponent as CheckCircleIcon } from "./../../assets/icons/checked.svg";
import { Link } from "react-router-dom";

export default function Modal() {
  const { emptyCart } = useCart();
  return (
    <>
      <div className="text-black justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none w-full">
            <CheckCircleIcon className="w-36 absolute top-0 -mt-16 left-72" />
            {/*header*/}
            <div className="items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t ">
              
              <h3 className="text-xl font-semibold mt-24 text-center mb-3">
              Thank you for your trust in ValeoRx.
              </h3>

              <h3 className="text-xl font-semibold mt-2 text-center mb-3">
              We accept Zelle, CashApp, and Venmo. 
              </h3>

              <h3 className="text-xl font-semibold mt-2 text-center mb-5">
              Please call us Toll Free to complete your purchase. It’s easy and painless!
       888-254-4844
              </h3>
            </div>

            <div>
              <Link to="/">
                <button
                  className="mx-auto bg-green-500 w-full p-3 border-0 text-3xl leading-none font-semibold outline-none rounded-b-lg focus:outline-none text-white "
                  onClick={() => emptyCart()}
                >
                  OK
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
