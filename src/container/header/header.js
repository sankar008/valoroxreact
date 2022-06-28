import { useEffect } from "react";
import { ReactComponent as Facebook } from "./../../assets/icons/facebook_icon.svg";
import { ReactComponent as Instagram } from "./../../assets/icons/instagram.svg";
import { ReactComponent as Twitter } from "./../../assets/icons/twitter.svg";
import { ReactComponent as Share } from "./../../assets/icons/share.svg";
import { ReactComponent as Youtube } from "./../../assets/icons/youtube.svg";
import { useCart } from "react-use-cart";
import { useHistory } from "react-router";
import Wishlist from "./../../assets/icons/wish-list.png";
import { Link } from "react-router-dom";
import Logo from "./../../assets/images/logo.png";
import UploadModel from "./../uploadPrescription/uploadPrescription";
import * as API from "../../api/api";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import React, { useState } from "react";
import Mobile from "./mobile";
import { ArrowDropUp, ArrowDropDown } from "@material-ui/icons";

const inputData = { name: "" };
export default function Header(props) {
  const history = useHistory();
  const { totalUniqueItems } = useCart();
  const [categoryData, setCategoryData] = useState([]);
  const [formData, setFormData] = useState(inputData);
  useEffect(() => {
    CategoryAPI();
  }, []);

  const CategoryAPI = async () => {
    try {
      const response = await API.category();
      setCategoryData(response ? response.data : []);
    } catch (error) {}
  };
  const category = props.categories;

  const [value, setValue] = useState("");
  const [show, setShow] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState(null);

  const handleChange = async (e) => {
    const { value } = e.target;
    setFormData({
      name: value,
    });
    try {
      const requestBody = {
        search_key: value,
        category_id: categoryId,
      };
      const response = await API.search_key(requestBody);
      setValue(response.data);
    } catch (e) {}
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleCategoryChange = (e) =>{
  //   setCategoryId(e.target.value);
  // }

  const openCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleCategoryClick = (item) => {
    setIsCategoryOpen(false);
    setCategoryId(item.id);
    setCategoryName(item.name);
    history.push({
      pathname: `/category/${item.slug}`,
    });
  };

  return (
    <div className="shadow-2xl">
      {/* RED STRIP */}

      <div className="grid grid-cols-12 lg:grid-cols-6  bg-red-800 h-auto text-white lg:px-36 px-3 lg:py-3 py-3">
        <div className="col-span-10 lg:col-start-1 lg:col-end-4 my-auto xs:text-xs">
          Free shipping on all orders above $350
        </div>
        <div className="lg:hidden col-span-1 flex justify-end">
          <div className="">
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className="text-white bg-green-200"
            >
              <Share
                width="20px"
                height="20px"
                fill="white"
                className="cursor-pointer"
              />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook
                    width="20px"
                    height="20px"
                    fill="maroon"
                    className="cursor-pointer"
                  />
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    width="20px"
                    height="20px"
                    fill="maroon"
                    className="cursor-pointer"
                  />
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube
                    width="20px"
                    height="20px"
                    fill="maroon"
                    className="cursor-pointer"
                  />
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a
                  href="www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter
                    width="20px"
                    height="20px"
                    fill="maroon"
                    className="cursor-pointer"
                  />
                </a>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="lg:col-start-6 col-span-1 my-auto relative md:flex md:justify-end text-white ">
          <Link to="/cart">
            <div className="lg:hidden block  mt-1">
              <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
              <span
                className="absolute right-0 top-0 rounded-full bg-white w-3 h-3 top right p-0 m-0 text-red-800 font-mono leading-tight text-center"
                style={{ fontSize: "11px" }}
              >
                {totalUniqueItems}
              </span>
            </div>
          </Link>

          <div className="grid grid-cols-4 hidden gap-5 lg:grid">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                width="30px"
                height="30px"
                fill="white"
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                width="30px"
                height="30px"
                fill="white"
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube
                width="30px"
                height="30px"
                fill="white"
                className="cursor-pointer"
              />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter
                width="30px"
                height="30px"
                fill="white"
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>

      {/* SEARCH SECTION */}
      <div className="h-auto lg:px-36 lg:py-12 py-5 px-3 bg-white">
        <div className="grid lg:grid-cols-12 grid-cols-4 gap-4 h-full ">
          <div className="lg:hidden grid col-start-1">
            <Mobile categories={category} />
          </div>
          <div className="lg:col-span-2  col-span-3 my-auto flex justify-end">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="lg:col-span-8 col-span-8 my-auto relative">
            {show && (
              <div
                className="absolute bg-white w-3/4 right-0 top-16"
                style={{ zIndex: 999 }}
              >
                {Object.keys(value).map((item) => {
                  console.log(value[item]);
                  return (
                    <Link
                      to={"/product/" + value[item].slug}
                      key={item}
                      onClick={() => {
                        setShow(false);
                        setFormData({
                          name: value[item].name,
                        });
                      }}
                    >
                      <div
                        className="flex justify-left items-left flex-col py-2 px-6 border-b-2 hover:bg-gray-200 cursor-pointer"
                        onBlur={() => {
                          setShow(false);
                        }}
                      >
                        <p>{value[item].name + " " + value[item].dosage}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
            <div className="lg:col-span-8 col-span-3 my-auto relative ">
              {isCategoryOpen ? (
                <div
                  className="absolute bg-white lg:w-1/4 xl:w-1/4 w-full top-16"
                  style={{ zIndex: 999 }}
                >
                  {categoryData.map((item) => {
                    return (
                      <div
                        className="flex justify-left items-left flex-col py-2 px-6 border-b-2 hover:bg-gray-200 cursor-pointer overflow-x-auto"
                        key={item.id}
                        // onBlur={() => setShow(false)}
                        onClick={() => handleCategoryClick(item)}
                      >
                        <p className="cursor-pointer">{item.name}</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="h-16 w-full my-auto border-2 border-red-800 rounded-lg relative overflow-hidden flex flex-row overflow-hidden divide-x-2 w-full">
              <div className="lg:w-1/4 xl:w-1/4 w-1/3 ">
                <div
                  className="w-full h-full flex flex-row justify-between items-center px-2"
                  onClick={openCategory}
                >
                  <div className="w-11/12 overflow-hidden cursor-default">
                    {categoryName ? categoryName : "Category"}
                  </div>
                  <div>
                    {isCategoryOpen ? <ArrowDropUp /> : <ArrowDropDown />}
                  </div>
                </div>
              </div>
              <div className="lg:w-3/4 xl:w-3/4 w-2/3">
                <input
                  type="search"
                  name="search"
                  id="search"
                  onChange={handleChange}
                  placeholder="Search for Medicines"
                  className=" appearance-none rounded-l-lg text-sm md:text-md lg:text-lg px-5 w-11/12 h-full outline-none focus:outline-none active:outline-none"
                  onFocus={() => setShow(true)}
                  // onBlur={() =>
                  //   setTimeout(() => {
                  //     setShow(false);
                  //   }, 10)
                  // }
                  value={formData.name}
                />
              </div>

              <button
                type="submit"
                className="bg-red-800 outline-none absolute h-16 lg:w-1/12 sm:w-1/5 w-14 md:w-16 focus:outline-none active:outline-none top-0 right-0"
              >
                {/* SEARCH */}
                <svg
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-12 h-8 pl-3"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="grid lg:col-span-2 col-span-8 my-auto h-16 text-white my-auto transition ease-in duration-300">
            <UploadModel />
          </div>
        </div>
      </div>

      {/* MENU */}
      <div className="hidden lg:block h-12 lg:px-36 px-36 bg-white">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-1 col-end-8 my-auto">
            <ul
              className="menuWrapper"
              //   style={{ display: "flex", flexDirection: "row-reverse" }}
            >
              <Link to="/">
                <li className="lg:mx-1 lg:text-sm">Home</li>
              </Link>

              {category.map((item, index) => {
                return (
                  <Link to={"/category/" + item.slug} key={index}>
                    <li className="lg:mx-1 lg:text-sm">{item.name}</li>
                  </Link>
                );
              })}

              <Link to="/profile">
                <li className="lg:mx-1 lg:text-sm">My Account</li>
              </Link>
              <Link to="/wishlist">
                <li className="lg:mx-1 lg:text-sm">
                  <img src={Wishlist} alt="wishlist" className="w-6 h-6" />
                </li>
              </Link>
              <Link to="/cart">
                <li className="lg:mx-1 lg:text-sm relative">
                  <svg
                    className="flex-1 w-8 h-10 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                  </svg>
                  <span
                    className="absolute right-0 top-0 rounded-full bg-red-800 w-3 h-3 top right p-0 m-0 text-white font-mono leading-tight text-center"
                    style={{ fontSize: "11px" }}
                  >
                    {totalUniqueItems}
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
