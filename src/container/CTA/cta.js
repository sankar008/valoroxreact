import React, { useState } from "react";
import * as API from "./../../api/api";
import { ReactComponent as Bell } from "./../../assets/icons/bell.svg";
import * as appUtil from "./../../helper/appUtils";

const initialData = {
  email: "",
};
export default function CTA() {
  const [formData, setFormData] = useState(initialData);
  const [errorEmail, setErrorEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMsg("");
    try {
      let flag = validateInput();
      if (!flag) {
        setLoading(false);
        return;
      }
      const requestBody = {
        email_id: formData.email,
      };
      const response = await API.subscribe(requestBody);
      if (response.status === 202) {
        setMsg("You are already registered with us. Thank You.");
      }
      if (response.status === 200) {
        setMsg("Thanks for subscribing us. We will get in touch with you soon");
      }
      setLoading(false);
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
    <div className="h-auto bg-gray-100 lg:p-16 px-5 py-10 text-center">
      <div className="pb-5">
        <div className="lg:text-4xl text-2xl mb-3">Sign Up For Newsletter </div>
        <div className="lg:text-base mb-3 text-sm">
          Join 14,000+ subscribers for latest offers{" "}
        </div>
      </div>
      <div className="mb-3 mx-auto relative lg:w-96 relative">
        <input
          className="lg:w-96 w-full h-10 rounded-lg focus:outline-none lg:px-5 px-2"
          onChange={handleChange}
          name="email"
          value={FormData.email}
        />
        <div className="absolute top-0 right-0">
          <button
            className=" bg-red-800 h-10 rounded-lg text-white lg:w-24 w-10 top-0 right-0  hover:bg-red-900 border-2 hover:border-red-800 transition ease-in duration-300 relative focus:outline-none"
            onClick={handleSubmit}
          >
            {loading ? (
              <div className="loader ease-linear rounded-full mx-auto border-2 border-t-2 border-gray-200 h-5 w-5"></div>
            ) : (
              <>
                <Bell
                  width="20px"
                  height="20px"
                  fill="white"
                  className="absolute inset-y-1/2 inset-x-1/2 lg:hidden"
                  style={{ transform: "translate(-50%, -50%)" }}
                />
                <span className="hidden lg:block focus:outline-none">
                  Subscribe
                </span>
              </>
            )}
          </button>
        </div>
        {errorEmail.field === "email" && (
          <p className=" absolute text-12px font-semibold text-red-800 mt-2">
            {errorEmail.message}
          </p>
        )}

        <p className="absolute text-12px font-semibold text-red-800 mt-2">
          {msg}
        </p>
      </div>
    </div>
  );
}
