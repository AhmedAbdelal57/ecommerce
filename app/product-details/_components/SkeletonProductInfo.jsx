import React from 'react'

function SkeletonProductInfo() {
  return (
    <div>
      <div className='h-[30px] w-[400px] mb-4 bg-slate-200 animate-pulse'></div>
      <div className='h-[20px] w-[100px] mb-4 bg-slate-200 animate-pulse'></div>
      <div className='h-[20px] w-[300px] mb-4 bg-slate-200 animate-pulse'></div>
      <div className='h-[20px] w-[250px] mb-4 bg-slate-200 animate-pulse'></div>
      <div className='h-[20px] w-[200px] mb-4 bg-slate-200 animate-pulse'></div>
      <div className='h-[50px] w-[150px] mb-4 bg-slate-200 animate-pulse'></div>
    </div>
  )
}

export default SkeletonProductInfo
