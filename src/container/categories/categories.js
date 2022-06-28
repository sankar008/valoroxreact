import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as API from "../../api/api";
import Bullet from "./../../component/loader/bulletLoader";

const initialCategories = [""];

export default function Categories() {
  const [categories, setCategories] = useState(initialCategories);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    CategoryAPI();
  }, []);

  const CategoryAPI = async () => {
    try {
      const response = await API.category();
      setCategories(response ? response.data : []);
      setLoader(false);
    } catch (error) {}
  };

  return (
    <div className="w-full bg-white h-auto lg:p-5 lg:mb-4 rounded-lg shadow-md">
      <div className="border-b-2 border-black text-xl font-bold pb-2">
        Category
      </div>
      <div>
        {loader ? (
          <div className="my-4">
            <Bullet />
          </div>
        ) : (
          <ul>
            {categories.map((item, index) => {
              const name = item.name;
              const slug = item.slug;
              return (
                <Link to={"/category/" + slug} key={index}>
                  <li className="my-4 cursor-pointer">{name}</li>
                </Link>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
