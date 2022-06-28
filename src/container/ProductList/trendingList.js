// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import React, { useEffect, useState } from "react";
// import * as API from "./../../api/api";
// import * as c from "./../../const";
// import ProductLoader from "./../../component/loader/productLoader";
// import ItemCard from "../../component/card/productCard";

// export default function ProductList() {
//   const [productList, setProductList] = useState([""]);
//   const [loader, setLoader] = useState(true);
//   useEffect(() => {
//     ProductListApi();
//   }, []);

//   const ProductListApi = async () => {
//     try {
//       const response = await API.trending_product();
//       setProductList(response.data);
//       setLoader(false);
//     } catch (error) {}
//   };
//   return (
//     <div>
//       {loader ? (
//         <ProductLoader />
//       ) : (
//         <Carousel
//           additionalTransfrom={0}
//           arrows
//           autoPlaySpeed={3000}
//           centerMode={false}
//           className=""
//           containerClass="container-with-dots"
//           dotListClass=""
//           draggable
//           focusOnSelect={false}
//           infinite
//           itemClass=""
//           keyBoardControl
//           minimumTouchDrag={80}
//           renderButtonGroupOutside={false}
//           renderDotsOutside={false}
//           responsive={{
//             desktop: {
//               breakpoint: {
//                 max: 3000,
//                 min: 1024,
//               },
//               items: 3,
//               partialVisibilityGutter: 40,
//             },
//             mobile: {
//               breakpoint: {
//                 max: 464,
//                 min: 0,
//               },
//               items: 1,
//               partialVisibilityGutter: 30,
//             },
//             tablet: {
//               breakpoint: {
//                 max: 1024,
//                 min: 464,
//               },
//               items: 3,
//               partialVisibilityGutter: 30,
//             },
//           }}
//           showDots={false}
//           sliderClass=""
//           slidesToSlide={1}
//           swipeable
//         >
//           {productList.map((item, index) => {
//             const {
//               name,
//               product_description,
//               price,
//               discount,
//               sell_price,
//               image,
//               slug,
//               id,
//               lab,
//             } = item;
//             const url = c.URL;
//             const src = url + "/uploads/products/" + image;
//             return (
//               <div key={index}>
//                 <ItemCard
//                   name={name}
//                   description={product_description}
//                   price={price}
//                   discount={discount}
//                   sell_price={sell_price}
//                   slug={slug}
//                   image={src}
//                   id={id}
//                   lab={lab}
//                 />
//               </div>
//             );
//           })}
//           {/* <div>
//             <ItemCard
//               name={"Fanapt"}
//               description={
//                 "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
//               }
//               price={214.13}
//               category={"Fitness,Behavioral Health"}
//               image={Product2}
//               onClick={() => console.log("HI")}
//             />
//           </div>
//           <div>
//             <ItemCard
//               name={"Kadcyla"}
//               description={
//                 "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
//               }
//               price={6481.28}
//               category={"Health Conditions"}
//               image={Product6}
//               onClick={() => console.log("HI")}
//             />
//           </div>
//           <div>
//             <ItemCard
//               name={"Vyvanse 30"}
//               description={
//                 "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
//               }
//               price={107.58}
//               category={"Fitness,Behavioral Health"}
//               image={Product3}
//               onClick={() => console.log("HI")}
//             />
//           </div> */}

//           {/* <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
//           <img
//             className="w-full"
//             src="https://tailwindcss.com/img/card-top.jpg"
//             alt="Sunset in the mountains"
//           />
//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
//             <p className="text-grey-darker text-base">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Voluptatibus quia, nulla! Maiores et perferendis eaque,
//               exercitationem praesentium nihil.
//             </p>
//           </div>
//           <div className="px-6 py-4">
//             <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
//               #photography
//             </span>
//             <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
//               #travel
//             </span>
//             <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
//               #winter
//             </span>
//           </div>
//         </div> */}
//         </Carousel>
//       )}
//     </div>
//   );
// }
