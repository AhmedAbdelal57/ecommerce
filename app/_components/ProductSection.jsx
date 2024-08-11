'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_Utils/ProductApis'

function ProductSection() {
  const [productList,setProductList] =useState([]);
  useEffect(()=>{
    getLatestProducts_();
  },[])
  const getLatestProducts_ = ()=>{
    ProductApis.getLeatestProduct().then(res=>{
      console.log("setProductList is -->",res.data);
      setProductList(res.data)
    })
  }
  return (
    <div className='px-10 md:px-20 bg-white'>
      <h2 className='my-5 text-[35px] flex items-center justify-center'>Exclusive Products</h2>
      <ProductList productList={productList}/>
    </div>
  )
}

export default ProductSection
