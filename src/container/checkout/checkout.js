import React, { useState } from "react";
import * as API from "./../../api/api";
import SuccessfullOrder from "./successfullOrder";
import * as appUtil from "./../../helper/appUtils";
import { useCart } from "react-use-cart";
const initialFormData = {
  shippingName: "",
  city: "",
  address: "",
  pin: "",
  landmark: "",
  number: "",
};
export default function Checkout() {
  const { items } = useCart();
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [formData, setFormData] = useState(initialFormData);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorName, setErrorName] = useState("");
  const [errorCity, setErrorCity] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [errorPin, setErrorPin] = useState("");
  const [errorLandmark, setErrorLandmark] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  if (userData) {
    initialFormData.name = userData.name;
    initialFormData.email = userData.email;
  }

  const handleChange = (e) => {
    const { value, name } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    setLoading(true);
    let flag = validateInput();

    if (!flag) {
      setLoading(false);
      return;
    }
    const productId = [];
    const productQty = [];
    items.map((item) => {
      productId.push(item.id);
      productQty.push(item.quantity);
      return true;
    });

    const ShippingAddress = {
      city: formData.city,
      address: formData.address,
      pin: formData.pin,
      Landmark: formData.landmark,
      "Mobile no": formData.number,
    };

    const requestObj = {
      user_id: userData.id,
      contact_person: formData.shippingName,
      product_id: productId,
      product_item: productQty,
      shipping_address: ShippingAddress,
    };

    const response = await API.order_place(requestObj);

    if (response.data) {
      setSuccess(true);
    }
  };

  function validateInput() {
    const { shippingName, city, address, pin, landmark, number } = formData;
    let flag = true;

    let validFirstName = appUtil.validateName(shippingName);
    if (validFirstName === 1) {
      setErrorName({
        field: "shippingName",
        message: "",
      });
    }
    if (!(validFirstName === 1)) {
      let msg = "";
      if (validFirstName === 0) {
        msg = "Please enter your name.";
      } else {
        msg = "Name should have characters only.";
      }
      setErrorName({
        field: "shippingName",
        message: msg,
      });
      flag = false;
    }

    let validatePhone = appUtil.validatePhoneNumber(number);
    if (validatePhone === 1) {
      setErrorPhone({
        field: "phone",
        message: "",
      });
    }
    if (!(validatePhone === 1)) {
      let msg = "";
      if (validatePhone === 0) {
        msg = "Please enter your phone.";
      } else {
        msg = "15 digit phone number allowed.";
      }
      setErrorPhone({
        field: "phone",
        message: msg,
      });
      flag = false;
    }

    let validateCity = appUtil.validateCity(city);
    if (validateCity === 1) {
      setErrorCity({
        field: "city",
        message: "",
      });
    }
    if (!(validateCity === 1)) {
      let msg = "";
      if (validateCity === 0) {
        msg = "Please enter your city name.";
      }
      setErrorCity({
        field: "city",
        message: msg,
      });
      flag = false;
    }

    let validateState = appUtil.validateCity(address);

    if (validateState === 1) {
      setErrorAddress({
        field: "address",
        message: "",
      });
    }
    if (!(validateState === 1)) {
      let msg = "";
      if (validateState === 0) {
        msg = "Please enter your address name.";
      }
      setErrorAddress({
        field: "address",
        message: msg,
      });
      flag = false;
    }

    //let validateLandmark = appUtil.validateCity(landmark);
    let validateLandmark = 1;
    if (validateLandmark === 1) {
      setErrorLandmark({
        field: "landmark",
        message: "",
      });
    }
    if (!(validateLandmark === 1)) {
      let msg = "";
      if (validateLandmark === 0) {
        msg = "Please enter the Unit number.";
      }
      setErrorLandmark({
        field: "landmark",
        message: msg,
      });
      flag = false;
    }

    let validatePin = appUtil.validatePinCode(pin);

    if (validatePin === 1) {
      setErrorPin({
        field: "pin",
        message: "",
      });
    }
    if (!(validatePin === 1)) {
      let msg = "";
      if (validatePin === 0) {
        msg = "Please enter your Zip code.";
      }
      setErrorPin({
        field: "pin",
        message: msg,
      });
      flag = false;
    }

    return flag;
  }
  return (
    <div className="w-full">
      {success ? (
        <SuccessfullOrder />
      ) : (
        <>
          <div className="mt-4 lg:px-8 xl:px-8 px-2 py-4 bg-white text-red-800 text-xl text-semibold rounded-lg w-full shadow-md">
            Shipping Address
          </div>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-5 w-full">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  type="text"
                  placeholder="Full Name"
                  value={formData.shippingName}
                  name="shippingName"
                  onChange={handleChange}
                />
                {errorName.field === "shippingName" && (
                  <p className="text-12px font-semibold text-red-800 mt-2">
                    {errorName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  City
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  name="city"
                  onChange={handleChange}
                />
                {errorCity.field === "city" && (
                  <p className="text-12px font-semibold text-red-800 mt-2">
                    {errorCity.message}
                  </p>
                )}
              </div>
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Zip Code
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  type="number"
                  placeholder="Zip Code"
                  value={formData.pin}
                  name="pin"
                  onChange={handleChange}
                />
                {errorPin.field === "pin" && (
                  <p className="text-12px font-semibold text-red-800 mt-2">
                    {errorPin.message}
                  </p>
                )}
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Address
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-last-name"
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  name="address"
                  onChange={handleChange}
                />
                {errorAddress.field === "address" && (
                  <p className="text-12px font-semibold text-red-800 mt-2">
                    {errorAddress.message}
                  </p>
                )}
              </div>
            </div>



            <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Unit,Apt,Suite Number
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  type="text"
                  placeholder="Unit,Apt,Suite Number"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                />
                {errorLandmark.field === "landmark" && (
                  <p className="text-12px font-semibold text-red-800 mt-2">
                    {errorLandmark.message}
                  </p>
                )}
              </div>  
            </div>      
            





            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                  type="number"
                  placeholder="Phone Number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                />
                {errorPhone.field === "phone" && (
                  <p className="text-12px font-semibold text-red-800 mt-2">
                    {errorPhone.message}
                  </p>
                )}
              </div>
            </div>
            <button
              className="bg-red-800 w-full mt-4 h-10 rounded-lg text-white uppercase transition ease-in duration-300 hover:bg-red-900 border-2 border-red-800 focus:outline-none"
              onClick={handleSave}
            >
              {loading ? (
                <div className="loader ease-linear rounded-full mx-auto border-2 border-t-2 border-gray-200 h-5 w-5"></div>
              ) : (
                <div className="text-white">Place Order</div>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
