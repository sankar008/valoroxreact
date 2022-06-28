// import { Link } from "react-router-dom";
// import * as API from "./../../api/api";
// import React, { useState, useEffect } from "react";
// import Bullet from "./../../component/loader/bulletLoader";

// const initialCategories = [""];
// export default function PopularCategories() {
//   const [categories, setCategories] = useState(initialCategories);
//   const [loader, setLoader] = useState(true);

//   useEffect(() => {
//     PopularCategoryAPI();
//   }, []);

//   const PopularCategoryAPI = async () => {
//     try {
//       const response = await API.popular_category();
//       setCategories(response ? response.data : []);
//       setLoader(false);
//     } catch (error) {}
//   };
//   return (
//     <div className="w-full bg-white h-auto lg:p-5 lg:my-4 rounded-lg shadow-md">
//       <div className="border-b-2 border-black text-xl font-bold pb-2">
//         Popular Category
//       </div>
//       <div>
//         {loader ? (
//           <Bullet />
//         ) : (
//           <ul>
//             {categories.map((item, index) => {
//               const slug = item.slug;
//               return (
//                 <Link to={"/category/" + slug} key={index}>
//                   <li className="my-4 cursor-pointer" key={index}>
//                     {item.name}
//                   </li>
//                 </Link>
//               );
//             })}
//             {/* <li className="my-4 cursor-pointer underline">View All</li> */}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }
