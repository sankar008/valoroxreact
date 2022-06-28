import React, { useState, useEffect } from "react";
import ContactUsBg from "./../../assets/images/contact.png";
import * as API from "./../../api/api";

const initialFormData = {
  name: "",
  email: "",
  number: "",
  msg: "",
};

export default function ContactUs() {
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");
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
      const response = await API.contact_us(formData);

      setMessage(response.data.msg);
    } catch (e) {
      // console.log(e);
    }
  };

  return (
    <div className="flex md:h-auto lg:min-h-screen xl:min-h-screen bg-white lg:px-36 px-4 shadow-sm">
      <div
        className="w-1/2 bg-cover md:block hidden"
        style={{
          backgroundImage: `url(${ContactUsBg})`,
          backgroundSize: "100% 60%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      {/* <div className="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 overflow-hidden">
        <img src="log_in.webp" alt="hey" />
      </div> */}

      <div className="md:w-1/2 max-w-lg mx-auto lg:my-auto my-10 px-4 py-5 shadow-none">
        <div className="text-left p-0 font-sans">
          <h1 className=" text-gray-800 text-3xl font-medium">Contact Us</h1>
          <h3 className="p-1 text-gray-700">
            Feel free to get in touch with us!
          </h3>
        </div>
        <div className="mt-5">
          <input
            type="text"
            className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-800 focus:border-transparent "
            placeholder="Full Name"
            name="name"
            onChange={handleChange}
          />
          {/* <div className="text-red-800">
            {simpleValidator.current.message("name", formData.name, "required")}
          </div> */}
        </div>
        <div className="mt-5">
          <input
            type="text"
            className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-800 focus:border-transparent "
            placeholder="Email ID"
            name="email"
            onChange={handleChange}
          />
          {/* <div className="text-red-800">
            {simpleValidator.current.message(
              "email",
              formData.email,
              "required|email"
            )}
          </div> */}
        </div>
        <div className="mt-5">
          <input
            type="tel"
            className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-800 focus:border-transparent "
            placeholder="Phone Number"
            name="number"
            onChange={handleChange}
          />
        </div>
        <div className="mt-5">
          <textarea
            //   type="text"
            className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-800 focus:border-transparent  "
            placeholder="Message"
            name="msg"
            onChange={handleChange}
          />
        </div>
        <div className="mt-5 text-green-500">{message}</div>

        {/* <div className="mt-6 block p-5 text-sm md:font-sans text-xs text-gray-800">
            <input type="checkbox" className="inline-block border-0" />
            <span display="inline" className="">
              By creating an account you are agreeing to our
              <a className="" href="/s/terms" target="_blank" data-test="Link">
                <span className="underline ">Terms and Conditions</span>
              </a>
              and
              <a
                className=""
                href="/s/privacy"
                target="_blank"
                data-test="Link"
              >
                <span className="underline">Privacy Policy</span>
              </a>
            </span>
          </div> */}

        <div className="mt-10">
          <button
            className="`py-3 bg-red-800 text-white w-full rounded hover:bg-white border-2 border-red-800 hover:text-red-800 py-2"
            onClick={handleSubmit}
          >
            Contact Us
          </button>
        </div>

        {/* <a className="" href="/login" data-test="Link">
          <span className="block  p-5 text-center text-gray-800  text-xs ">
            Already have an account?
          </span>
        </a> */}
      </div>
    </div>
  );
}
