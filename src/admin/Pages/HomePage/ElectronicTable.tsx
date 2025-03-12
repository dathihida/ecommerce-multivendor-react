import React from 'react'
import HomeCategoryTable from './HomeCategoryTable'
import Deal from './Deal'
import { useAppSelector } from '../../../State/Store'

const ElectronicTable = () => {
  const {customer} = useAppSelector(store => store)
  return (
    <div>
      <HomeCategoryTable data={customer.homePageData?.electricalCategories || []}/>
    </div>
  )
}

export default ElectronicTable