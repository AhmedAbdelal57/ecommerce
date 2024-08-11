import React, { useEffect, useState } from "react";
import ProductApis from "@/app/_Utils/ProductApis";
import Image from "next/image";
import { List, DollarSign } from "lucide-react";
import Link from "next/link";

function ProductitemOfCart({ product, quantity }) {
  //console.log("ProductitemOfCart===>", product);
  const [productDetails, setProductDetails] = useState([]);
  //const [ProductListCategory,setProductListCategory]=useState([])
  useEffect(() => {
    getProductById_();
    window.scrollTo(0, 0);
  }, [product?.productId]);
  const getProductById_ = () => {
    ProductApis.getProductById(product).then((res) => {
      console.log(product);

      setProductDetails(res?.data);
      console.log("Product Item Is", res.data);
      //getProductListByCategory_(res?.data)
    });
  };
  return (
    <div className=" gap-8 shadow-lg hover:shadow-2xl hover:border rounded-t-2xl hover:cursor-pointer w-[280px] h-[300px] mb-12">
      <Link href={`/product-details/${productDetails.id}`}>
        <Image
          src={productDetails?.image}
          alt="banner-card"
          width={270}
          height={150}
          className="rounded-t-2xl h-[200px] w-[280px] bg-"
        />
        <div className="flex flex-wrap items-center justify-between p-3">
          <div className=" ">
            <h2 className="text-[14px] font-medium line-clamp-1">
              {productDetails?.title}
            </h2>
            <h2 className="text-[12px] font-thin text-gray-400 flex gap-1 items-center">
              <List className="w-5 h-5" />
              {productDetails?.category}
            </h2>
          </div>
          <div className="flex flex-nowrap items-center justify-between gap-16">
            <h2 className="text-[16px]  text-red-500 flex items-center gap-1 p-2">
              <DollarSign className="w-4 h-4" />
              {productDetails?.price}
            </h2>
            <h2 className="text-[16px] text-gray-400   flex  gap-1 p-2">
              quantity :
              <span className="text-[16px]  text-green-500  gap-1 ">
                {quantity}
              </span>
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductitemOfCart;
