import React, { useState } from "react";
import * as API from "./../../api/api";
import * as appUtil from "./../../helper/appUtils";

const initialFormData = {
  password: "",
  confirmPassword: "",
};

export default function UserProfile() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(false);
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const { value, name } = e.currentTarget;
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
      const { password, confirmPassword } = formData;
      if (password === confirmPassword) {
        const requestObj = {
          user_id: userData.id,
          password: password,
          password_confirmation: confirmPassword,
        };
        const response = await API.change_password(requestObj);

        if (response.data) {
          setSuccess(true);
          setError(false);
          setLoading(false);
          setMsg(true);
        }
      } else {
        setError(true);
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

    let validateConfirmPassword = appUtil.validatePass(confirmPassword);
    if (validateConfirmPassword === 1) {
      setErrorConfirmPassword({
        field: "confirmPassword",
        message: "",
      });
    }
    if (!(validateConfirmPassword === 1)) {
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
    <div className="w-full">
      <div className="px-8 py-4 bg-white text-red-800 text-xl text-semibold rounded-lg w-full shadow-md">
        Privacy
      </div>
      <div
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-5"
        // style={{ width: "138%" }}
      >
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              New Password
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 focus:outline-none"
              id="grid-first-name"
              type="password"
              placeholder="**********"
              name="password"
              onChange={handleChange}
            />
            {errorPassword.field === "password" && (
              <p className="text-12px font-semibold text-red-800 mt-2">
                {errorPassword.message}
              </p>
            )}
          </div>
        </div>
        <div className="-mx-3 md:flex mb-3">
          <div className="md:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Confirm Password
            </label>
            <input
              className={
                "appearance-none block w-full focus:outline-none bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              }
              id="grid-first-name"
              type="password"
              placeholder="**********"
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
        {error ? (
          <span className="text-12px font-semibold text-red-800 mt-2">
            Password doesn't match
          </span>
        ) : null}

        <button
          className={`my-2 py-3 bg-red-800 text-white w-full rounded hover:bg-red-900 border-2 border-red-800 hover:text-white focus:outline-none ${
            success ? "cursor-not-allowed" : null
          }
            `}
          onClick={handleSubmit}
        >
          {loading ? (
            <div className="loader ease-linear rounded-full mx-auto border-2 border-t-2 border-gray-200 h-5 w-5"></div>
          ) : (
            <div className="text-white">
              {success ? "Password Changed" : "Change Password"}
            </div>
          )}{" "}
        </button>
        {msg ? (
          <div className="text-green-500">Profile updated successfully!!</div>
        ) : null}
      </div>
    </div>
  );
}
