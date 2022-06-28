import React, { useState } from "react";
import * as API from "../../api/api";
import { Link } from "react-router-dom";
import * as appUtil from "./../../helper/appUtils";
import ForgotImg from "./../../assets/images/forgot.png";
const initialFormData = {
  email: "",
};
export default function ContactUs() {
  const [formData, setFormData] = useState(initialFormData);

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      let flag = validateInput();
      if (!flag) {
        setLoading(false);
        return;
      }

      const requestObj = {
        email: formData.email,
      };
      const response = await API.reset_password(requestObj);

      if (response.status === 200) {
        setMsg("Mail has been sent to your email id.");
        setLoading(false);
      }

      if (response.status === 202) {
        // setMsg(response.data);

        setLoading(false);
      }
    } catch (e) {}
  };

  function validateInput() {
    const { email } = formData;
    let flag = true;

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
    return flag;
  }

  return (
    <div className="flex md:h-auto lg:min-h-screen bg-white lg:px-36 xl:px-36 px-8">
      <div
        className="w-1/2 bg-cover md:block hidden"
        style={{
          backgroundImage: `url(${ForgotImg})`,
        }}
      ></div>

      <div className="md:w-1/2 max-w-lg mx-auto lg:my-auto xl:my-auto my-10 px-4 py-5 shadow-none">
        <div className="text-left p-0 font-sans">
          <h1 className=" text-gray-800 text-3xl font-medium">
            Forgot Password?
          </h1>
          <h3 className="p-1 text-gray-700">
            Don't worry! We've got your back.
          </h3>
        </div>

        <div className="mt-3">
          {/* <label for="email" className="sc-bqyKva ePvcBv">
              Email
            </label> */}

          <input
            type="text"
            className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          {errorEmail.field === "email" && (
            <p className="text-12px font-semibold text-red-800 mt-2">
              {errorEmail.message}
            </p>
          )}
        </div>

        <div className="mt-5">
          <button
            className="py-3 bg-red-800 text-white w-full rounded hover:bg-red-900 border-2 border-red-800 hover:border-red-900 focus:outline-none"
            onClick={handleSubmit}
          >
            {loading ? (
              <div className="loader ease-linear rounded-full mx-auto border-2 border-t-2 border-gray-200 h-5 w-5"></div>
            ) : (
              <div className="text-white">Request password reset</div>
            )}
          </button>
        </div>
        <p className="text-12px font-semibold text-green-500 pt-2">{msg}</p>

        <Link to="/login">
          <span className="block p-2 text-center text-gray-800  text-xs ">
            Back to Sign in
          </span>
        </Link>
      </div>
    </div>
  );
}
