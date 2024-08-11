import React from "react";
import ProductItemsOfCart from "./ProductItemsOfCart";

function ProductListOfCart({ productList }) {
  console.log("ProductListOfCart is ==>", productList);

  return (
    <div className="flex justify-center items-start sm:grid-cols-3 md:grid-cols-4 bg-white gap-10 ">
      {productList.map((item) => (
        
        <div key={item.id}>
          <p className="text-[25px]  ">
            Id Of Cart is : <span className="text-blue-500 ">{item.id}</span>
          </p>
          {/* {item.attributes?.tittle}
          {item.attributes?.banner?.data?.attributes?.url} */}
          <ProductItemsOfCart key={item.id} product={item?.products} />
        </div>
      ))}
    </div>
  );
}

export default ProductListOfCart;
