import React, { useEffect, useState } from "react";
import * as API from "./../../api/api";
import * as c from "./../../const";
import ProductCard from "../../component/card/productCard2";
import ProductLoader from "./../../component/loader/multiProductLoader";
import NoProduct from "./../../assets/images/noProduct.png";

export default function ProductList(props) {
  const slug = props.slug;
  const [productList, setProductList] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    async function productDetail() {
      try {
        setLoader(true);
        if (props.allProd) {
          const response = await API.product_section_all(props.allProd);
          setProductList(response.data);
          setLoader(false);
        } else {
          const response = await API.category_wise_product(slug);
          setProductList(response.data);
          setLoader(false);
        }
      } catch (error) {}
    }
    productDetail();
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  }, [slug]);

  return (
    <div>
      <main className="my-8">
        <div className="container mx-auto px-6">
          {loader ? (
            <ProductLoader />
          ) : (
            <>
              <h3 className="text-gray-700 text-2xl font-medium capitalize">
                {slug}
              </h3>
              <span className="mt-3 text-sm text-gray-500">
                {productList.length > 1
                  ? productList.length + " Products"
                  : productList.length + " Product"}
              </span>
              {productList.length > 0 ? (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-6">
                  {/* ITEM 1 */}
                  {productList.map((item, index) => {
                    const {
                      name,
                      price,
                      sell_price,
                      discount,
                      image,
                      slug,
                      id,
                      product_description,
                    } = item;
                    const URL = item && c.URL + "/uploads/products/" + image;
                    return (
                      <ProductCard
                        name={name}
                        image={URL}
                        price={price}
                        sell_price={sell_price}
                        discount={discount}
                        description={product_description}
                        slug={slug}
                        key={index}
                        id={id}
                      />
                    );
                  })}
                </div>
              ) : (
                <img
                  src={NoProduct}
                  alt="noOrder"
                  className="my-5 h-72 w-72 mx-auto"
                />
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
