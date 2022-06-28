import React, { useState, useEffect } from "react";
import ItemCard from "../../component/card/productCard";
import * as API from "./../../api/api";
import * as c from "./../../const";

export default function HotDeals() {
  const [product, setProduct] = useState("");
  useEffect(() => {
    async function ProductListApi() {
      try {
        const response = await API.hotDeals();
        setProduct(response.data);
      } catch (error) {}
    }
    ProductListApi();
  }, []);

  const src = c.URL + "/uploads/products/" + product.image;

  return (
    <div className="">
      <ItemCard
        id={product.id}
        name={product.name}
        description={product.product_description}
        price={product.price}
        sell_price={product.sell_price}
        image={src}
        lab={product.lab}
        slug={product.slug}
        discount={product.discount}
      />
    </div>
  );
}
