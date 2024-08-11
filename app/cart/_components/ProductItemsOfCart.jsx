import React, { useEffect, useState } from 'react'
import ProductApis from '@/app/_Utils/ProductApis'
import ProductitemOfCart from '../_components/ProductitemOfCart'

function ProductItemsOfCart({product}) {
    console.log("ProductItemsOfCart is ==>",product)
    
  return (
    <div className='mb-10'>
      {product.map(item => (
        
        <div key={item.productId}>
          {/* {item.attributes?.tittle}
          {item.attributes?.banner?.data?.attributes?.url} */}
          <ProductitemOfCart key={item.productId} product={item?.productId} quantity={item?.quantity} /></div>
      ))}
    </div>
  )
}

export default ProductItemsOfCart



