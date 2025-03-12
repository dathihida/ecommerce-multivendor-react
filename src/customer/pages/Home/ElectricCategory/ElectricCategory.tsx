import React from 'react'
import ElectricCategoryCard from './ElectricCategoryCard'
import { useAppSelector } from '../../../../State/Store'

const ElectricCategory = () => {
  const {customer} = useAppSelector(store => store)
  console.log("customer data",customer.homePageData?.electricalCategories)  
  return (
    <div className='flex flex-wrap justify-between py-5 lg:px-20 border-b'>
        {customer.homePageData?.electricalCategories.slice(0,7).map((item) => <ElectricCategoryCard item={item}/>)}
        
    </div>
  )
}

export default ElectricCategory