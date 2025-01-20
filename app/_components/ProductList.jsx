import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ productList }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 bg-white sm:gap-5 md:gap-6  ">
      {productList.map((item) => (
        <div key={item.id}>
          {/* {item.attributes?.tittle}
          {item.attributes?.banner?.data?.attributes?.url} */}
          <ProductItem key={item.id} product={item} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
