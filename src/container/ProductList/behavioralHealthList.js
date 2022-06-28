import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import * as API from "./../../api/api";
import * as c from "./../../const";
import ProductLoader from "./../../component/loader/productLoader";
import ItemCard from "../../component/card/productCard";

export default function ProductList() {
  const [productList, setProductList] = useState([""]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    ProductListApi();
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  }, []);

  const ProductListApi = async () => {
    try {
      const response = await API.category_wise_product("behavioral-health");
      setProductList(response.data);
      setLoader(false);
    } catch (error) {}
  };

  return (
    <div>
      {loader ? (
        <ProductLoader />
      ) : (
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {productList.map((item, index) => {
            const {
              name,
              product_description,
              price,
              discount,
              sell_price,
              image,
              slug,
              id,
              lab,
            } = item;
            const url = c.URL;
            const src = url + "/uploads/products/" + image;
            // console.log(item);
            return (
              <div key={index}>
                <ItemCard
                  name={name}
                  id={id}
                  description={product_description}
                  price={price}
                  discount={discount}
                  sell_price={sell_price}
                  slug={slug}
                  image={src}
                  lab={lab}
                  // onClick={() => console.log("HI")}
                />
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
