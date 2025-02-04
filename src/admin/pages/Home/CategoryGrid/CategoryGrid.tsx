import React from 'react'

const CategoryGrid = () => {
  return (
    <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
        <div className='col-span-3 row-span-12 text-white'>
            <img className='object-cover object-top rounded-md w-full h-full'
                src="https://image.hm.com/assets/hm/bd/1d/bd1d0bdb9a262313f8a86fd4cf0317598327ce18.jpg?imwidth=1260" 
                alt="" />
        </div>
        <div className='col-span-2 row-span-6 text-white'>
            <img className='object-cover object-top rounded-md w-full h-full'
                src="https://clickbuy.com.vn/uploads/images/2022/12/avt-iphone-14-plus-starlight.png" 
                alt="" />
        </div>
        <div className='col-span-4 row-span-6 text-white'>
            <img className='object-cover object-top rounded-md w-full h-full'
                src="https://brand.assets.adidas.com/image/upload/v1717008170/Training_FW_24_Dropset3_global_Launch_What_shoes_should_you_wear_to_the_gym_image_Everyset_e43f4c24fd.jpg" 
                alt="" />
        </div>
        <div className='col-span-3 row-span-12 text-white'>
            <img className='object-cover object-top rounded-md w-full h-full' 
                src="https://www.thelovelymadness.com/cdn/shop/files/931DFF4A-05CE-4653-8989-0B7DBB75A20B.jpg?v=1694796868&width=1200" 
                alt="" />
        </div>
        <div className='col-span-4 row-span-6 text-white'>
            <img className='object-cover object-top rounded-md w-full h-full' 
                src="https://brand.assets.adidas.com/image/upload/v1717012873/Training_SS_24_Strength_global_Launch_What_shoes_should_you_wear_to_the_gym_image_Amplimove_147f0ac3d4.jpg" 
                alt="" />
        </div>
        <div className='col-span-2 row-span-6 text-white'>
            <img className='object-cover object-top rounded-md w-full h-full' 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB10bNSeldgSZ3Gt9lepln7XYGmDtvOs1mGw&s" 
                alt="" />
        </div>
    </div>
  )
}

export default CategoryGrid