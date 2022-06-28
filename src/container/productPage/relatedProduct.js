import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as API from "./../../api/api";

import * as c from "./../../const";

import ItemCard from "../../component/card/productCard";

export default function ProductList(props) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function categoryProd() {
      try {
        const response = await API.category_wise_product(props.slug);
        setProduct(response.data);
      } catch (e) {}
    }
    categoryProd();
  }, [props.slug]);

  // const {name, description, price, image} = product;

  return (
    <div className="mt-5 bg-white rounded-lg p-2">
      <div className="text-xl font-bold">Related Products</div>

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
            items: 4,
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
        {product.map((item, index) => {
          const {
            name,
            product_description,
            price,
            discount,
            sell_price,
            image,
            slug,
          } = item;
          const URL = c.URL + "/uploads/products/" + image;
          return (
            <div key={index}>
              <ItemCard
                name={name}
                description={product_description}
                price={price}
                discount={discount}
                sell_price={sell_price}
                slug={slug}
                category={"Fitness,Behavioral Health"}
                image={URL}
                onClick={() => console.log("HI")}
              />
            </div>
          );
        })}
        {/* <div>
          <ItemCard
            name={"Inveda Sustenna"}
            description={""}
            price={802.68}
            category={"Fitness,Behavioral Health"}
            image={Product1}
            onClick={() => console.log("HI")}
          />
        </div>
        <div>
          <ItemCard
            name={"Vyvanse 30"}
            description={""}
            price={107.58}
            category={"Fitness,Behavioral Health"}
            image={Product3}
            onClick={() => console.log("HI")}
          />
        </div>
        <div>
          <ItemCard
            name={"Fanapt"}
            description={""}
            price={214.13}
            category={"Fitness,Behavioral Health"}
            image={Product2}
            onClick={() => console.log("HI")}
          />
        </div>
        <div>
          <ItemCard
            name={"Vyvanse 30"}
            description={""}
            price={107.58}
            category={"Fitness,Behavioral Health"}
            image={Product3}
            onClick={() => console.log("HI")}
          />
        </div> */}

        {/* <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
              #photography
            </span>
            <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
              #travel
            </span>
            <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
              #winter
            </span>
          </div>
        </div> */}
      </Carousel>
    </div>
  );
}
