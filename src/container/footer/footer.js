import React, { useEffect, useState } from "react";
import { ReactComponent as PhoneCall } from "./../../assets/icons/phone-call.svg";
import { ReactComponent as Address } from "./../../assets/icons/worldwide.svg";
import { ReactComponent as Facebook } from "./../../assets/icons/facebook_icon.svg";
import { ReactComponent as Instagram } from "./../../assets/icons/instagram.svg";
import { ReactComponent as Twitter } from "./../../assets/icons/twitter.svg";
import { ReactComponent as Youtube } from "./../../assets/icons/youtube.svg";
import Logo from "./../../assets/images/logo.png";
import * as API from "../../api/api";
import { Link } from "react-router-dom";

export default function Footer() {
  // const isAuth = localStorage.getItem("isAuth") === "true";

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function CategorieApi() {
      try {
        const response = await API.category();
        const cat = [];
        for (let index = 0; index < 7; index++) {
          const element = response.data[index];
          cat.push(element);
        }
        setCategories(response ? cat : []);
      } catch (e) {}
    }
    CategorieApi();
  }, []);

  return (
    <div className="lg:px-36 xl:px-36 px-5 pb-10">
      <div className="grid lg:grid-cols-3 grid-cols-4 md:grid-cols-3 md:gap-1 lg:gap-5 gap-0 mt-5 border-b-2 pb-4">
        <div className="xl:col-span-1 md:col-span-1 col-span-4 lg:mt-0 mt-2">
          <div className="flex justify-start">
            <div className="lg:w-16 lg:h-16 w-12 h-12 bg-white rounded-full relative my-auto shadow-md">
              <Address
                // width="40px"
                // height="40px"
                fill="maroon"
                className="absolute lg:w-10 lg:h-10 w-8 h-8"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
            <div>
              <div className="my-auto mx-6 md:mx-0 md:px-0 text-lg relative">
                <div className="lg:text-lg text-md">Address</div>
                <div className=" text-sm text-gray-400">
                  <div>World Trade Center</div>
                  <div>Montecito 38, 33rd Floor</div>
                  <div>Benito Juárez, Col. Nápoles</div>
                  <div>Mexico D.F. Mexico 03810</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 md:col-span-1 col-span-4 lg:mt-0 mt-2">
          <div className="flex justify-start">
            <div className="lg:w-16 lg:h-16 w-12 h-12 bg-white rounded-full relative my-auto shadow-md">
              <PhoneCall
                // width="40px"
                // height="40px"
                fill="maroon"
                className="absolute lg:w-10 lg:h-10 w-8 h-8"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
            <div>
              <div className="my-auto mx-6 text-lg relative">
                <div className="lg:text-lg text-md">Call Us</div>
                <a href="tel:888-254-4844">
                  <div className="lg:text-base text-sm text-gray-400">
                    <div>
                      888-254-4844 <span className="text-sm">Toll Free</span>
                    </div>
                    <div>
                      888-260-9474{" "}
                      <span className="text-sm">Fax (Scripts Only)</span>
                    </div>
                  </div>
                </a>
                <div className="text-base text-gray-400">
                  <a href="mailto:contact@valeorx.com">Contact@ValeoRx.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-1 col-span-4 lg:mt-0 mt-2">
          <div className="flex justify-around">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="lg:w-16 lg:h-16 w-12 h-12 bg-white rounded-full relative my-auto shadow-md">
                <Facebook
                  width="40px"
                  height="40px"
                  fill="maroon"
                  className="absolute lg:w-10 lg:h-10 w-8 h-8"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="lg:w-16 lg:h-16 w-12 h-12 bg-white rounded-full relative my-auto shadow-md">
                <Instagram
                  width="40px"
                  height="40px"
                  fill="maroon"
                  className="absolute lg:w-10 lg:h-10 w-8 h-8"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="lg:w-16 lg:h-16 w-12 h-12 bg-white rounded-full relative my-auto shadow-md">
                <Youtube
                  width="40px"
                  height="40px"
                  fill="maroon"
                  className="absolute lg:w-10 lg:h-10 w-8 h-8"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="lg:w-16 lg:h-16 w-12 h-12 bg-white rounded-full relative my-auto shadow-md">
                <Twitter
                  width="40px"
                  height="40px"
                  fill="maroon"
                  className="absolute lg:w-10 lg:h-10 w-8 h-8"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="h-auto bg-white mt-5 border-b-2 pb-4">
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-4 col-span-12 my-auto lg:border-r-2">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <div className="text-gray-400 text-sm font-light mt-2 pr-3 ">
              Contrary to some beliefs, it IS possible for individuals to source and purchase their needed medication from other countries, including Mexico. Here at ValeoRx we can help facilitate that process.
            </div>
          </div>
          <div className="lg:col-span-8 col-span-12 my-auto text-xs sm:text-sm md:text-md lg:text-lg ">
            <div className="grid lg:grid-cols-3 grid-cols-12 gap-2 h-full lg:pl-5">
              <div className="lg:col-span-1 col-span-3">
                <div className="mb-2 font-semibold">Information</div>
                <ul className="font-light text-xs sm:text-sm md:text-md lg:text-md footerMenu">
                  <Link to="/">
                    <li className="cursor-pointer">Home</li>
                  </Link>
                  {/* {isAuth ? (
                    <>
                      <Link
                        to={{
                          pathname: "/profile/",
                          state: {
                            tab: "Profile",
                          },
                        }}
                      >
                        <li className="cursor-pointer">My Account</li>
                      </Link>
                      <Link
                        to={{
                          pathname: "/profile/",
                          state: {
                            tab: "ChangePassword",
                          },
                        }}
                      >
                        <li className="cursor-pointer">Settings</li>
                      </Link> */}
                  {/* <Link
                        to={{
                          pathname: "/profile/",
                          state: {
                            tab: "Orders",
                          },
                        }}
                      >
                        <li className="cursor-pointer">Orders</li>
                      </Link>
                      <Link to="/cart">
                        <li className="cursor-pointer">Cart</li>
                      </Link>
                      <Link to="/wishlist">
                        <li className="cursor-pointer">Wishlist</li>
                      </Link> */}
                  {/* </>
                  ) : (
                    <>
                      <Link to="/login">
                        <li className="cursor-pointer">Login</li>
                      </Link>
                      <Link to="/register">
                        <li className="cursor-pointer">Register</li>
                      </Link>
                    </>
                  )} */}

                  <Link to="/contact-us">
                    <li className="cursor-pointer">Contact Us</li>
                  </Link>
                  <Link to="/about-us">
                    <li className="cursor-pointer">About Us</li>
                  </Link>
                  <Link to="/about-you">
                    <li className="cursor-pointer">About you</li>
                  </Link>
                  <a
                    href="https://valeorx.com/sitemap.xml"
                    target="_blamk"
                  >
                    <li className="cursor-pointer">Site Map</li>
                  </a>
                </ul>
              </div>
              <div className="lg:col-span-1 col-span-6 ml-1">
                <div className="mb-2 font-semibold">Categories</div>
                <ul className="font-light text-xs sm:text-sm md:text-md lg:text-md footerMenu overflow-hidden">
                  {categories.map((item, index) => {
                    const name = item.name;
                    const slug = item.slug;
                    return (
                      <Link to={"/category/" + slug} key={index}>
                        <li className="cursor-pointer ">{name}</li>
                      </Link>
                    );
                  })}
                  {/* <li className="cursor-pointer">Devices</li>
                  <li className="cursor-pointer">Family Care </li>
                  <li className="cursor-pointer">Fitness</li>
                  <li className="cursor-pointer">Lifestyle</li>
                  <li className="cursor-pointer">Personal Care</li> */}
                </ul>
              </div>
              <div className="lg:col-span-1 col-span-3">
                <div className="mb-2 font-semibold">Products</div>
                <ul className="font-light text-xs sm:text-sm md:text-md lg:text-md footerMenu">
                  <Link
                    to={{
                      pathname: "/category/medicine",
                      state: {
                        slug: 1,
                      },
                    }}
                  >
                    <li className="cursor-pointer ">Medicine</li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/category/medicine",
                      state: {
                        slug: 2,
                      },
                    }}
                  >
                    <li className="cursor-pointer ">Diagnostic</li>
                  </Link>
                  <Link
                    to={{
                      pathname: "/category/medicine",
                      state: {
                        slug: 3,
                      },
                    }}
                  >
                    <li className="cursor-pointer ">Wellness</li>
                  </Link>

                  <Link
                    to={{
                      pathname: "/category/medicine",
                      state: {
                        slug: 4,
                      },
                    }}
                  >
                    <li className="cursor-pointer ">Health Cornor</li>
                  </Link>
                  {/* <li className="cursor-pointer">Site Map</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-light text-sm">
        
          © 2021, Copyright to ValeoRx
        
      </div>
    </div>
  );
}
