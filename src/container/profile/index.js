import React, { useState, useEffect } from "react";
import { ReactComponent as User } from "./../../assets/icons/profile-user.svg";
import { ReactComponent as Address } from "./../../assets/icons/padlock.svg";
import { ReactComponent as Logout } from "./../../assets/icons/logout.svg";
import { ReactComponent as ShoppingBag } from "./../../assets/icons/shopping-bag.svg";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import UserProfile from "./userProfile";
import UserAddress from "./address";
import Orders from "./order";

export default function Index(props) {
  const allTab = props.location.state ? props.location.state.tab : "Profile";
  const history = useHistory();
  const location = useLocation();
  const [tab, setTab] = useState(allTab);
  // const userData = JSON.parse(localStorage.getItem("userData"));
  const renderContent = (tab) => {
    switch (tab) {
      case "ChangePassword":
        return <UserAddress />;
      case "Orders":
        return <Orders />;
      default:
        return <UserProfile />;
    }
  };

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth") === "true";
    window["scrollTo"]({ top: 0, behavior: "smooth" });
    if (!isAuth) {
      history.push({ pathname: "/login" });
      return false;
    }
    setTab(allTab);
  }, [allTab]);

  const logout = () => {
    window.localStorage.clear();
    history.replace({
      ...location,
      state: undefined,
    });
    history.push({
      pathname: "/login",
    });
  };

  return (
    <div className="lg:px-36 xl:px-36 px-8">
      <div className="flex flex-wrap gap-0">
        <div className="flex flex-col bg-white lg:w-64 md:w-40 h-auto lg:px-4 text-gray-900 my-5 shadow-lg border-red-800 rounded-lg lg:block xl:block w-96">
          <div className="flex flex-wrap mt-8">
            <div className="w-full">
              <img
                src="https://seventhqueen.com/themes/kleo/wp-content/uploads/rtMedia/users/44269/2020/07/dummy-profile.png"
                className="mx-auto w-16 h-16 rounded-full"
                alt="profile"
              />
            </div>
            <div className=" w-full mx-auto text-center my-2">
              <span className="font-semibold text-red-800 text-xl">
                {/* {userData.name}  */}
              </span>
            </div>
          </div>
          <div className="mt-10 mb-4">
            <ul className="ml-4">
              <li
                className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-200  hover:font-bold rounded rounded-lg cursor-pointer"
                onClick={() => setTab("Profile")}
              >
                <span>
                  <User fill="maroon" width="25px" height="25px" />
                </span>
                <span className="ml-2 text-red-800">Profile</span>
              </li>
              <li
                className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-200  hover:font-bold rounded rounded-lg cursor-pointer"
                onClick={() => setTab("ChangePassword")}
              >
                <span>
                  <Address width="24px" height="24px" fill="maroon" />
                </span>

                <span className="ml-2 text-red-800">Privacy</span>
              </li>
              <li
                className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black hover:bg-gray-200  hover:font-bold rounded rounded-lg cursor-pointer"
                onClick={() => setTab("Orders")}
              >
                <span>
                  <ShoppingBag width="24px" height="24px" fill="maroon" />
                  {/* <Address width="24px" height="24px" fill="maroon" /> */}
                </span>

                <span className="ml-2 text-red-800">Orders</span>
              </li>
              <li
                className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black hover:bg-gray-200  hover:font-bold rounded rounded-lg cursor-pointer"
                onClick={logout}
              >
                <span>
                  <Logout width="24px" height="24px" fill="maroon" />
                  {/* <Address width="24px" height="24px" fill="maroon" /> */}
                </span>

                <span className="ml-2 text-red-800">Logout</span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-full md:w-3/4 lg:w-3/4 flex lg:p-5 xl:p-5 p-2 rounded-lg my-3 lg:my-0">
          {renderContent(tab)}
        </div>
      </div>
    </div>
  );
}
