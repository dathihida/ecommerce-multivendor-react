import React from 'react'
import './ShopByCategory.css'
import { HomeCategory } from '../../../../types/HomeCategoryTypes'
const ShopByCategoryCard = ({item}:{item:HomeCategory}) => {
  return (
    <div className="flex gap-2 flex-col justify-center items-center group cursor-pointer">
        <div className="custome-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-colors flex justify-center items-center overflow-hidden">
            <img
                className="rounded-full group-hover:scale-95 transition-transform duration-700 object-cover object-top w-full h-full"
                src={item.image}
                alt="iPhone 12"
            />
        </div>
    <h1 className="text-center">{item.name}</h1>
</div>

  )
}

export default ShopByCategoryCard