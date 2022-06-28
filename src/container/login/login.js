import React, { useState, useEffect } from "react";
import * as API from "./../../api/api";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import * as appUtil from "./../../helper/appUtils";
import LoginImg from "./../../assets/images/login.png";
const initialFormData = {
  email: "",
  password: "",
};

export default function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
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
        email: formData.email,
        password: formData.password,
      };
      const response = await API.login(requestObj);

      if (response.status === 200) {
        localStorage.setItem("isAuth", true);
        localStorage.setItem("userData", JSON.stringify(response.data));
        history.push({
          pathname: "/profile",
        });
        setLoading(false);
      }

      if (response.status === 202) {
        setMsg(response.data);
        setLoading(false);
      }
    } catch (e) {}
  };

  function validateInput() {
    const { email, password } = formData;
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
        msg = "8 digit password required.";
      }
      setErrorPassword({
        field: "password",
        message: msg,
      });
      flag = false;
    }

    return flag;
  }

  return (
    <div className="flex lg:min-h-screen md:h-auto bg-white lg:px-36 xl:min-h-screen px-8">
      <div
        className="w-1/2 bg-cover md:block hidden"
        style={{
          backgroundImage: `url(${LoginImg})`,
        }}
      ></div>

      <div className="md:w-1/2 max-w-lg mx-auto my-auto px-4 py-5 shadow-none">
        <div className="text-left p-0 font-sans">
          <h1 className=" text-gray-800 text-3xl font-medium">
            Login to your account
          </h1>
        </div>

        <div className="mt-5">
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

        <p className="text-12px font-semibold text-red-800 ">{msg}</p>
        <div className="mt-5">
          <button
            className={`py-3 bg-red-800 w-full text-white rounded hover:bg-white border-2 border-red-800 hover:bg-red-900 focus:outline-none`}
            onClick={handleSubmit}
          >
            {loading ? (
              <div className="loader ease-linear rounded-full mx-auto border-2 border-t-2 border-gray-200 h-5 w-5"></div>
            ) : (
              <div className="text-white">Sign In</div>
            )}
          </button>
        </div>

        <Link to="/sign-up">
          <span className="block  px-5 my-2 text-center text-gray-800  text-xs ">
            New Here? Sign Up.
          </span>
        </Link>
        <Link to="/forgotPassword">
          <span className="block  px-5 my-2 text-center text-gray-800  text-xs ">
            forgot password?
          </span>
        </Link>
      </div>
    </div>
  );
}
