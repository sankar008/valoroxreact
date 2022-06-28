import React, { useState } from "react";
import * as API from "./../../api/api";
import * as appUtil from "./../../helper/appUtils";
const inititalFormData = {
  name: "",
  email: "",
  number: "",
  address: "",
  pres_file: "",
};
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [formData, setFormData] = React.useState(inititalFormData);
  const [fileMsg, setFileMsg] = React.useState("");
  const [isFile, setIsFile] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorNumber, setErrorNumber] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [errorFile, setErrorFile] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (e) => {
    setFormData({
      ...formData,
      pres_file: Object(e.target.files[0]),
    });
    setIsFile(true);
    setFileMsg(`${e.target.files[0].name} ${" "} uploaded successfully`);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const { name, email, number, address, pres_file } = formData;
    try {
      let flag = validateInput();
      if (!flag) {
        setLoading(false);
        return;
      }
      const requestObj = new FormData();
      requestObj.append("name", name);
      requestObj.append("email", email);
      requestObj.append("number", number);
      requestObj.append("address", address);
      requestObj.append("pres_file", pres_file);
      const response = await API.upload_prescription(requestObj);
      if (response.data === "Data Sent Successfully") {
        setSuccess(true);
        setLoading(false);
      }
    } catch (e) {
      // console.log(e);
    }
  };

  function validateInput() {
    const { name, email, number, address, pres_file } = formData;
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

    let validatePhone = appUtil.validatePhoneNumber(number);
    if (validatePhone === 1) {
      setErrorNumber({
        field: "number",
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
      setErrorNumber({
        field: "number",
        message: msg,
      });
      flag = false;
    }

    if (address) {
      setErrorAddress({
        field: "address",
        message: "",
      });
    }
    if (!address) {
      let msg = "";
      if (address.trim() === "") {
        msg = "Please enter your address.";
      }
      setErrorAddress({
        field: "address",
        message: msg,
      });
      flag = false;
    }

    if (pres_file) {
      setErrorFile({
        field: "file",
        message: "",
      });
    } else {
      setErrorFile({
        field: "file",
        message: "Please upload your prescription.",
      });
      flag = false;
    }

    return flag;
  }
  return (
    <>
      <button
        className="bg-red-800 border-2 border-red-800 text-white font-medium capitalize text-md rounded shadow hover:shadow-lg outline-none ease-linear transition-all duration-150 hover:bg-red-900 rounded-lg focus:outline-none flex justify-center xl:py-1 xl:px-2 py-3 lg:py-1 lg:px-2 w-full"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <span className="my-auto ">Upload your Prescription</span>
      </button>
      {showModal ? (
        <>
          <div
            className="text-black justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none"
            style={{ zIndex: 9999 }}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none w-full">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    <span className="hidden lg:block xl:block">
                      Upload your Prescription
                    </span>
                  </h3>
                  <button
                    className="ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-red-800 opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div className="relative flex-auto">
                  <div className="flex flex-1 items-center justify-center">
                    <div className="rounded-lg px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                      <div className="py-2 text-left">
                        <input
                          type="text"
                          className="bg-white border border-gray-300 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-red-800 "
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

                      <div className="py-2 text-left">
                        <input
                          type="email"
                          className="bg-white border border-gray-300 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-red-800 "
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
                      <div className="py-2 text-left">
                        <input
                          type="tel"
                          className="bg-white border border-gray-300 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-red-800 "
                          placeholder="Phone number"
                          name="number"
                          onChange={handleChange}
                        />
                        {errorNumber.field === "number" && (
                          <p className="text-12px font-semibold text-red-800 mt-2">
                            {errorNumber.message}
                          </p>
                        )}
                      </div>
                      <div className="py-2 text-left">
                        <textarea
                          // type="email"
                          className="bg-white border border-gray-300 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-red-800 "
                          placeholder="Address"
                          name="address"
                          onChange={handleChange}
                        />
                        {errorAddress.field === "address" && (
                          <p className="text-12px font-semibold text-red-800 mt-2">
                            {errorAddress.message}
                          </p>
                        )}
                      </div>
                      <div className="py-2 text-left relative w-64 cursor-pointer">
                        <button className="text-red-800 font-bold py-2 px-4 w-full inline-flex items-center focus:outling-none">
                          <svg
                            fill="rgb(156,27,27)"
                            height="18"
                            viewBox="0 0 24 24"
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                          </svg>
                          <span className="ml-2">
                            {isFile ? "Uploaded" : "Upload Prescription"}
                          </span>
                        </button>
                        <input
                          className="cursor-pointer absolute block py-2 px-4 -mt-10 w-full opacity-0 pin-r pin-t"
                          type="file"
                          name="pres_file"
                          accept="image/*"
                          onChange={handleFileUpload}
                        />
                      </div>
                      {errorFile.field === "file" && (
                        <p className="text-12px font-semibold text-red-800 mt-2">
                          {errorFile.message}
                        </p>
                      )}
                      <div className="py-2 text-green-500 w-64 text-left">
                        {fileMsg}
                      </div>
                      <div className="py-2">
                        <button
                          type="submit"
                          className={`border-2 border-red-800 focus:outline-none bg-red-800 text-white font-semibold tracking-wider block w-full p-2 rounded-lg  hover:bg-red-900 hover:text-red-800 ${
                            success ? "cursor-not-allowed" : ""
                          }`}
                          onClick={handleSubmit}
                          disabled={success ? true : false}
                        >
                          {loading ? (
                            <div className="loader ease-linear rounded-full mx-auto border-2 border-t-2 border-gray-200 h-5 w-5"></div>
                          ) : (
                            <div className="text-white">Upload</div>
                          )}
                        </button>
                      </div>
                      {success ? (
                        <div className="py-2 text-green-500">
                          We will get in touch with you soon!
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
