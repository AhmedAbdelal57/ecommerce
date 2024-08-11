import React from "react";
import { AlertOctagon, BadgeCheck, List, ShoppingCart } from "lucide-react";
import SkeletonProductInfo from "./SkeletonProductInfo";

function ProductInfo({ product }) {
  return (
    <div>
      {product?.id ? (
        <div>
          <h2 className="text-[25px]">{product?.tittle}</h2>
          <h2 className="mt-3 text-[20px] font-thin text-gray-400 flex flex-row gap-2 items-center">
            <List className="w-5 h-5 " />
            {product?.category}
          </h2>
          <h2 className="mt-3 text-[18px] font-thin">{product?.description}</h2>
          <h2 className="mt-3 text-[15px] text-gray-400 flex flex-row items-center gap-2 ">
            {product?.attributes?.instantDelivery ? (
              <BadgeCheck className="text-green-500" />
            ) : (
              <AlertOctagon className="text-red-500" />
            )}
            Eligible For Instant Delivery
          </h2>
          <h2 className="mt-3 text-[32px] font-thin text-red-500 flex items-center">
            <span className="text-[25px] font-thin text-gray-400 pr-4 ">
              Price :
            </span>
            ${product?.price}
          </h2>
          {/* <button className="mt-3 p-4 flex flex-row gap-2 rounded-lg text-white bg-primary hover:shadow-2xl hover:bg-hov-btn">
            <ShoppingCart />
            Add To Card
          </button> */}
          <a
            className="w-40 mt-3 p-4 flex flex-row gap-2 rounded-lg text-white bg-primary hover:shadow-2xl hover:bg-hov-btn"
            href={`/cart/${product.id}`}
          >
            <ShoppingCart />
            Add To Card
          </a>
        </div>
      ) : (
        // skeleton for responsive design
        <SkeletonProductInfo />
      )}
    </div>
  );
}

export default ProductInfo;
