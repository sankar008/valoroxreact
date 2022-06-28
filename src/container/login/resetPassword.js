import React, { useState } from "react";
import * as API from "../../api/api";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import * as appUtil from "./../../helper/appUtils";

const initialFormData = {
  email: "",
  password: "",
  confirmPassword: "",
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
export default function ContactUs(props) {
  let query = useQuery();
  const token = query.get("token");
  const email = query.get("email");
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");

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
        email: email,
        token: token,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
      };
      const response = await API.reset(requestObj);
      if (response.status === 200) {
        setMsg("Password reset successfully");
        setLoading(false);
        setTimeout(() => {
          history.push({
            pathname: "/login",
          });
        }, 4000);
      }
      if (response.status === 202) {
        setLoading(false);
      }
    } catch (e) {}
  };

  function validateInput() {
    const { password, confirmPassword } = formData;
    let flag = true;

    let validatePassword = appUtil.validatePass(password);
    if (validatePassword === 1) {
      setErrorPassword({
        field: "password",
        message: "",
      });
    }
    if (!(validatePassword === 1)) {
      let msg = "";
      if (validatePassword === 0) {
        msg = "Please enter the password.";
      } else {
        msg = "8 character password required";
      }
      setErrorPassword({
        field: "password",
        message: msg,
      });
      flag = false;
    }
    if (confirmPassword === password) {
      setErrorConfirmPassword({
        field: "confirmPassword",
        message: "",
      });
    } else {
      let msg = "Please enter the same password.";
      setErrorConfirmPassword({
        field: "confirmPassword",
        message: msg,
      });
      flag = false;
    }
    return flag;
  }

  return (
    <div className="flex md:h-auto lg:min-h-screen bg-white px-36">
      <div
        className="w-1/2 bg-cover md:block hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1520243947988-b7b79f7873e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGJsYWNrJTIwZm9yZXN0fGVufDB8fDB8eWVsbG93&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60)",
        }}
      ></div>

      <div className="md:w-1/2 max-w-lg mx-auto my-auto px-4 py-5 shadow-none">
        <div className="text-left p-0 font-sans mb-6">
          <h1 className=" text-gray-800 text-3xl font-medium">
            Reset Password
          </h1>
          <h3 className="p-1 text-gray-700">
            Don't worry! We've got your back.
          </h3>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 focus:outline-none"
            placeholder="Email"
            name="email"
            // onChange={handleChange}
            readOnly
            defaultValue={email}
          />
        </div>

        <div className="-mx-3 md:flex mb-0">
          <div className="md:w-full px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 focus:outline-none"
              id="grid-first-name"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {errorPassword.field === "password" && (
              <p className="text-12px font-semibold text-red-800 my-2">
                {errorPassword.message}
              </p>
            )}
          </div>
        </div>
        <div className="-mx-3 md:flex mb-3">
          <div className="md:w-full px-3 mb-6 md:mb-0">
            <input
              className={
                "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              }
              id="grid-first-name"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
            />

            {errorConfirmPassword.field === "confirmPassword" && (
              <p className="text-12px font-semibold text-red-800 mt-2">
                {errorConfirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-5">
          <button
            className="py-3 bg-red-800 text-white w-full rounded hover:bg-red-900 border-2 border-red-800 hover:border-red-900 focus:outline-none"
            onClick={handleSubmit}
          >
            {loading ? (
              <div className="loader ease-linear rounded-full mx-auto border-2 border-t-2 border-gray-200 h-5 w-5"></div>
            ) : (
              <div className="text-white">Confirm Password</div>
            )}
          </button>
        </div>
        <p className="text-12px font-semibold text-green-500 pt-2">{msg}</p>

        <Link to="/login">
          <span className="block  p-5 text-center text-gray-800  text-xs ">
            Back to Sign in
          </span>
        </Link>
      </div>
    </div>
  );
}
