import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProductBanner({ product }) {
  //console.log("ProductBanner", product);
  //console.log("ProductBanner", product.image);
  return (
    <div>
      {product ? (
        <Link href={product}>
          <Image
            src={product?.image}
            alt="Product Details "
            className="shadow-sm hover:shadow-xl rounded-t-2xl"
            width={400}
            height={300}
          />
        </Link>
      ) : (
        // skeleton for responsive design
        <div className="h-[444px] w-[400px] mb-4 bg-slate-200 animate-pulse"></div>
      )}
    </div>
  );
}

export default ProductBanner;
