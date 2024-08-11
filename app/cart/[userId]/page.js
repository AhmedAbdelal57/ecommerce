'use client'
import ProductApis from '@/app/_Utils/ProductApis'
import BreadCrumb from '@/app/_components/BreadCrumb'
import React, { useEffect, useState } from 'react'
//import ProductBanner from '../_components/ProductBanner'
//import ProductInfo from '../_components/ProductInfo'
import { usePathname } from 'next/navigation'
import ProductListOfCart from '../_components/ProductListOfCart'

function cartUser({params}) {
    const path = usePathname();
    const userId = params?.userId
    console.log("params of cart user id is ==>",userId)
    console.log('path is ',path);
    const [productDetails,setProductDetails] =useState([])
    const [ProductOfCart,setProductOfCart]=useState([])

    useEffect(()=>{
        getProductListOfCart_(userId)
        window.scrollTo(0, 0);
    },[params?.productId])

    /* const getProductById_ = ()=>{
        ProductApis.getProductById(params?.userId).then(res=>{
          console.log(params);
            console.log('Product Item Is',res.data)
            setProductDetails(res?.data)
            getProductListByCategory_(res?.data)
        })
    } */
    
    const getProductListOfCart_ = (userId)=>{
        ProductApis.addToCart(userId).then(res=>{
            console.log("product cart  is",res?.data)
            setProductOfCart(res?.data)
        })
    }
  return (
    <div className='px-10 py-8 md:px-28'>
      <BreadCrumb path={path}/>
      {/* <div className='mt-10 grid grid-cols-1 gap-10  sm:grid-cols-2 sm:gap-2 justify-around '>
        <ProductBanner product={productDetails}/>
        <ProductInfo product={productDetails}/>
      </div> */}
      <div className='flex flex-col justify-center items-center'>

        <h2 className='mt-20 mb-5 text-[30px]'>Product cart Of user</h2>
        <ProductListOfCart productList={ProductOfCart}/>
      </div>
    </div>
  )
}

export default cartUser
