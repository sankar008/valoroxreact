import React, { useState, useEffect } from "react";
import * as API from "../../api/api";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import * as appUtil from "./../../helper/appUtils";
import RegisterImg from "./../../assets/images/register.png";
const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function ContactUs() {
  const [formData, setFormData] = useState(initialFormData);
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorCheck, setErrorCheck] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  useEffect(() => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  }, []);
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
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      const response = await API.register(requestObj);

      if (response.status === 200) {
        localStorage.setItem("isAuth", true);
        const userDetail = {
          name: response.data.name,
          email: response.data.email,
          id: response.data.id,
        };
        localStorage.setItem("userData", JSON.stringify(userDetail));
        history.push({
          pathname: "/profile",
        });
        setLoading(false);
      }
      if (response.status === 202) {
        setMsg(response.data.email);
        setLoading(false);
      }
    } catch (e) {}
  };

  function validateInput() {
    const { name, email, password, confirmPassword } = formData;
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

    if (!confirmPassword) {
      setErrorConfirmPassword({
        field: "confirmPassword",
        message: "Please enter the confirm password",
      });
      flag = false;
    } else if (confirmPassword === password) {
      setErrorConfirmPassword({
        field: "confirmPassword",
        message: "",
      });
    } else {
      setErrorConfirmPassword({
        field: "confirmPassword",
        message: "Password does not match.",
      });
      flag = false;
    }

    if (check) {
      setErrorCheck({
        field: "checkBox",
        message: "",
      });
    } else {
      setErrorCheck({
        field: "checkBox",
        message: "Please agree to our terms and condition",
      });

      flag = false;
    }

    if (!flag) {
    }
    return flag;
  }

  return (
    <div className="flex lg:min-h-screen xl:min-h-screen bg-white lg:px-36 px-8">
      <div
        className="w-1/2 bg-cover md:block hidden"
        style={{
          backgroundImage: `url(${RegisterImg})`,
        }}
      ></div>

      <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
        <div className="text-left p-0 font-sans">
          <h1 className=" text-gray-800 text-3xl font-medium">
            Create an account for free
          </h1>
          <h3 className="p-1 text-gray-700">
            Free forever. No payment needed.
          </h3>
        </div>
        <div className="mt-5">
          <input
            type="text"
            className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
          {errorName.field === "name" && (
            <p className="text-12px font-semibold text-red-800 mt-2">
              {errorName.message}
            </p>
          )}
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

        <div className="mt-3">
          <input
            type="password"
            className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
            placeholder="Password"
            onChange={handleChange}
            name="password"
          />

          {errorPassword.field === "password" && (
            <p className="text-12px font-semibold text-red-800 mt-2">
              {errorPassword.message}
            </p>
          )}
        </div>

        <div className="mt-3">
          <input
            type="password"
            className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
            placeholder="Confirm Password"
            onChange={handleChange}
            name="confirmPassword"
          />

          {errorConfirmPassword.field === "confirmPassword" && (
            <p className="text-12px font-semibold text-red-800 mt-2">
              {errorConfirmPassword.message}
            </p>
          )}
        </div>

        <div className="mt-3 block text-sm md:font-sans text-xs text-gray-800">
          <input
            type="checkbox"
            className="inline-block border-0"
            onChange={() => setCheck(!check)}
            name="check"
          />
          <span display="inline" className="">
            {" "}
            By creating an account you are agreeing to our{" "}
            <span className="underline ">Terms and Conditions</span>
            and <span className="underline">Privacy Policy</span>
          </span>
          {errorCheck.field === "checkBox" && (
            <p className="text-12px font-semibold text-red-800 mt-2">
              {errorCheck.message}
            </p>
          )}
        </div>
        <p className="text-12px font-semibold text-red-800 ">{msg}</p>
        <div className="mt-3">
          <button
            className="py-3 bg-red-800 text-white w-full rounded hover:bg-red-900 border-2 border-red-800"
            onClick={handleSubmit}
          >
            {loading ? (
              <div className="loader ease-linear rounded-full mx-auto border-2 border-t-2 border-gray-200 h-5 w-5"></div>
            ) : (
              <div className="text-white">Sign up with email</div>
            )}
          </button>
        </div>

        {/* <a className="" href="/login" data-test="Link"> */}
        <Link to="/login">
          <span className="block  p-5 text-center text-gray-800  text-xs ">
            Already have an account?
          </span>
        </Link>
        {/* </a> */}
      </div>
    </div>
  );
}
