'use client'
import ProductApis from '@/app/_Utils/ProductApis'
import BreadCrumb from '@/app/_components/BreadCrumb'
import React, { useEffect, useState } from 'react'
import ProductBanner from '../_components/ProductBanner'
import ProductInfo from '../_components/ProductInfo'
import ProductList from '@/app/_components/ProductList'
import { usePathname } from 'next/navigation'

function ProductDetails({params}) {
    const path = usePathname();
    console.log('path is ',path);
    const [productDetails,setProductDetails] =useState([])
    const [ProductListCategory,setProductListCategory]=useState([])

    useEffect(()=>{
        getProductById_()
        window.scrollTo(0, 0);
    },[params?.productId])

    const getProductById_ = ()=>{
        ProductApis.getProductById(params?.productId).then(res=>{
          console.log(params);
            console.log('Product Item Is',res.data)
            setProductDetails(res?.data)
            getProductListByCategory_(res?.data)
        })
    }
    
    const getProductListByCategory_ = (product)=>{
        ProductApis.getProductByCategory(product?.category).then(res=>{
            console.log("simmiler category is",res?.data)
            setProductListCategory(res?.data)
        })
    }
  return (
    <div className='px-10 py-8 md:px-28'>
      <BreadCrumb path={path}/>
      <div className='mt-10 grid grid-cols-1 gap-10  sm:grid-cols-2 sm:gap-2 justify-around '>
        <ProductBanner product={productDetails}/>
        <ProductInfo product={productDetails}/>
      </div>
      <div className='flex flex-col justify-center items-center'>

        <h2 className='mt-20 mb-5 text-[30px]'>Similar Product Category</h2>
        <ProductList productList={ProductListCategory}/>
      </div>
    </div>
  )
}

export default ProductDetails
