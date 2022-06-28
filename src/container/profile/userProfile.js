import React, { useState } from "react";
import * as API from "./../../api/api";
import * as appUtil from "./../../helper/appUtils";
const initialFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  pin: "",
};

export default function UserProfile() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [formData, setFormData] = useState(initialFormData);
  const [msg, setMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorCity, setErrorCity] = useState("");
  const [errorState, setErrorState] = useState("");
  const [errorPin, setErrorPin] = useState("");
  const [edit, setEdit] = useState(false);
  if (userData) {
    initialFormData.name = userData.name ? userData.name : "";
    initialFormData.email = userData.email ? userData.email : "";
    initialFormData.city = userData.city_name ? userData.city_name : "";
    initialFormData.phone = userData.mobile_no ? userData.mobile_no : "";
    initialFormData.state = userData.state_name ? userData.state_name : "";
    initialFormData.pin = userData.pincode ? userData.pincode : "";
  }

  const handleChange = (e) => {
    const { value, name } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      let flag = validateInput();

      if (!flag) {
        setLoading(false);
        return;
      }
      const requestObj = {
        user_id: userData.id,
        name: formData.name,
        email: formData.email,
        city_name: formData.city,
        state_name: formData.state,
        mobile_no: formData.phone,
        pincode: formData.pin,
      };
      const response = await API.update_profile(requestObj);
      localStorage.setItem("userData", JSON.stringify(response.data));
      setMsg(true);
      setLoading(false);
      setEdit(false);
    } catch (e) {}
  };

  function validateInput() {
    const { name, email, phone, city, state, pin } = formData;
    let flag = true;

    let validFirstName = appUtil.validateName(name);
    if (validFirstName === 1) {
      setErrorName({
        field: "name",
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
        field: "name",
        message: msg,
      });
      flag = false;
    }

    let validateEmail = appUtil.validateEmail(email);
    if (validateEmail === 1) {
      setErrorEmail({
        field: "email",
        message: "",
      });
    }
    if (!(validateEmail === 1)) {
      let msg = "";
      if (validateEmail === 0) {
        msg = "Please enter your email.";
      } else {
        msg = "Please check your email format.";
      }
      setErrorEmail({
        field: "email",
        message: msg,
      });
      flag = false;
    }

    let validatePhone = appUtil.validatePhoneNumber(phone);
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

    let validateState = appUtil.validateCity(state);

    if (validateState === 1) {
      setErrorState({
        field: "state",
        message: "",
      });
    }
    if (!(validateState === 1)) {
      let msg = "";
      if (validateState === 0) {
        msg = "Please enter your state name.";
      }
      setErrorState({
        field: "state",
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
        msg = "Please enter your pin code.";
      }
      setErrorPin({
        field: "pin",
        message: msg,
      });
      flag = false;
    }

    return flag;
  }

  // const {name, email, }
  return (
    <div className="w-full">
      <div className="lg:px-8 xl:px-8 px-2 py-4 bg-white text-red-800 text-xl text-semibold rounded-lg w-full shadow-md">
        Profile
      </div>
      <div className="bg-white shadow-md rounded lg:px-8 px-2 pt-6 pb-8 mb-4 flex flex-col my-5 w-full">
        <div className="-mx-3 md:flex lg:mb-6 xl:mb-6 lg:w-full">
          <div className="lg:w-1/2 sm:w-full md:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 w-96 capitalize focus:outline-none"
              id="grid-first-name"
              type="text"
              placeholder="Name"
              value={formData.name}
              name="name"
              readOnly={!edit}
              onChange={handleChange}
            />
            {errorName.field === "name" && (
              <p className="text-12px font-semibold text-red-800 mt-2">
                {errorName.message}
              </p>
            )}
          </div>
          <div className="lg:w-1/2 sm:w-full md:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 focus:outline-none"
              id="grid-last-name"
              type="text"
              placeholder="Email"
              value={formData.email}
              readOnly={!edit}
              name="email"
              onChange={handleChange}
            />
            {errorEmail.field === "email" && (
              <p className="text-12px font-semibold text-red-800 mt-2">
                {errorEmail.message}
              </p>
            )}
          </div>
        </div>
        <div className="-mx-3 md:flex lg:mb-6 xl:mb-6 md:mb-0">
          <div className="md:w-full px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 focus:outline-none"
              id="grid-password"
              type="tel"
              readOnly={!edit}
              placeholder="Phone Number"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
            />
            {errorPhone.field === "phone" && (
              <p className="text-12px font-semibold text-red-800 mt-2">
                {errorPhone.message}
              </p>
            )}
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              City
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter focus:outline-none text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-city"
              type="text"
              readOnly={!edit}
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
          <div className="md:w-1/2 px-3 mb-2">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              State
            </label>

            <input
              className="appearance-none block w-full focus:outline-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-state"
              type="text"
              readOnly={!edit}
              placeholder="State Name"
              value={formData.state}
              name="state"
              onChange={handleChange}
            />
            {errorState.field === "state" && (
              <p className="text-12px font-semibold text-red-800 mt-2">
                {errorState.message}
              </p>
            )}
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Zip Code
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter focus:outline-none text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-zip"
              type="text"
              placeholder="Zip Code"
              readOnly={!edit}
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
        {edit ? (
          <button
            className="py-3 text-red-800 w-full rounded bg-red-800 border-2 border-red-800 hover:bg-red-900 my-2"
            onClick={handleSave}
          >
            {loading ? (
              <div className="loader ease-linear rounded-full mx-auto border-2 border-t-2 border-gray-200 h-5 w-5"></div>
            ) : (
              <div className="text-white hover:text-white">Save</div>
            )}
          </button>
        ) : (
          ""
        )}
        <button
          className="my-2 py-3 bg-red-800 text-white w-full rounded border-2 border-red-800 hover:bg-red-900 focus:outline-none"
          onClick={() => setEdit(!edit)}
        >
          {edit ? "Cancel" : "Edit"}
        </button>
        {msg ? (
          <div className="text-green-500">Profile updated successfully!!</div>
        ) : null}
      </div>
    </div>
  );
}
