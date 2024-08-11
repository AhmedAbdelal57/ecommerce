import React from "react";
import Image from "next/image";
import { List, DollarSign } from "lucide-react";
import Link from "next/link";

function ProductItem({ product }) {
  return (
    <div className=" m-5 shadow-lg hover:shadow-2xl hover:border rounded-t-2xl hover:cursor-pointer h-[300px]">
      <Link href={`/product-details/${product.id}`}>
        <Image
          src={product.image}
          alt="banner-card"
          width={300}
          height={300}
          className="rounded-t-2xl h-[200px] w-[280px] bg-"
        />
        <div className="flex flex-wrap items-center justify-between p-3">
          <div className=" ">
            <h2 className="text-[14px] font-medium line-clamp-1">
              {product?.title}
            </h2>
            <h2 className="text-[12px] font-thin text-gray-400 flex gap-1 items-center">
              <List className="w-5 h-5" />
              {product?.category}
            </h2>
          </div>
          <h2 className="text-[16px]  text-red-500 flex items-center gap-1 p-2">
            <DollarSign className="w-4 h-4" />
            {product?.price}
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
