import React, { useState, useEffect } from "react";
import * as API from "./../../api/api";

import Breadcrumb from "./breadcrumb";
import Product from "./product";
import ProductDetails from "./productDetails";
import RelatedProducts from "./relatedProduct";

import SingleProductLoader from "./../../component/loader/singleProductLoader";
import SingleProductLoader1 from "./../../component/loader/singleProductLoader1";

const initialProduct = {
  id: "",
  subcategory_id: null,
  category_id: "",
  name: "",
  price: "",
  sell_price: "",
  quantity: "",
  discount: "",
  product_description: "",
  product_composition: "",
  image: "",
  status: "",
  slug: "",
  created_at: "",
  updated_at: "",
  category_name: "",
  category_slug: "",
};

export default function ProductPage(props) {
  const slug = props.match.params.slug;
  const [product, setProduct] = useState(initialProduct);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function productDetails() {
      try {
        const response = await API.product_details(slug);
        setProduct(response.data[0]);
        setLoader(false);
      } catch (e) {
        // console.log(e);
      }
    }
    productDetails();
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  }, [slug]);

  const {
    id,
    name,
    price,
    sell_price,
    discount,
    product_description,
    product_composition,
    image,
    category_name,
    category_slug,
    lab,
  } = product;

  return (
    <div className="lg:px-36 xl:px-36 px-2 bg-gray-100">
      <Breadcrumb
        product={name}
        category={category_name}
        category_slug={category_slug}
      />
      {loader && (
        <div className="grid grid-cols-2 bg-white">
          <div className="p-10">
            <SingleProductLoader />
          </div>
          <div className="lg:mt-48">
            <SingleProductLoader1 />
          </div>
        </div>
      )}

      {!loader && (
        <>
          <Product
            id={id}
            name={name}
            price={price}
            sell_price={sell_price}
            discount={discount}
            description={product_description}
            image={image}
            category={category_name}
            category_slug={category_slug}
            lab={lab}
          />
          <ProductDetails
            description={product_description}
            additional={product_composition}
          />
          <RelatedProducts slug={category_slug} />
        </>
      )}
    </div>
  );
}
