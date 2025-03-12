import React from 'react'
import HomeCategoryTable from './HomeCategoryTable'
import { useFormik } from 'formik'
import { Category } from '@mui/icons-material'
import { useAppSelector } from '../../../State/Store'

const DealCategoryTable = () => {
  const {customer} = useAppSelector(store => store)
  return (
    <div>
      <HomeCategoryTable data={customer.homePageData?.dealCategories || []}/>
    </div>
  )
}

export default DealCategoryTable