import React from 'react'
import ReviewCard from './ReviewCard'
import { Divider } from '@mui/material'

const Review = () => {
  return (
    <div className='px-5 lg:px-20 flex flex-col lg:flex-row gap-20'>
      <section className='w-full md:w-1/2 lg:w-[30%] space-y-2'>
        <img 
          src="https://www.derek-rose.com/cdn/shop/files/mens-t-shirt-jordan-linen-white-creative_1742741f-3680-48ce-8d93-63d58adb7c2b_2000x.jpg?v=1695981317" alt="" />
        
        <div >
          <div >
            <p className='font-bold text-lx'>Virani Clothing</p>
            <p className='text-lg text-gray-600'>Men's White Skirt</p>
          </div>
          <div className='price flex items-center gap-3 text-2xl'>
            <span className='font-sans text-gray-800'>
            400 VND
            </span>
            <span className='thin-line-through text-gray-400'>
            500 VND
            </span>
            <span className='text-primary-colors font-semibold'>
            30% off
            </span>
          </div>
        </div>
      </section>
      <section className='space-y-5 w-full'>
        {[1,1,1,1,1,1,1].map((item)=>
          <div className='space-y-3'>
            <ReviewCard/>
            <Divider/>
          </div>
        )}
        
      </section>
    </div>
  )
}

export default Review