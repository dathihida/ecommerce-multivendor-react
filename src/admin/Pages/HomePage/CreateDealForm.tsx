import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { createDeal } from '../../../State/admin/DealSlice';

const CreateDealForm = () => {
  const dispatch = useAppDispatch();
  const {customer} = useAppSelector(store => store)
  const formik = useFormik({
      initialValues:{
        discount: 0,
        category: ""
      },
      onSubmit:values =>{
        console.log("sumbit", values)
        const reqData = {
          discount: values.discount,
          category: {
            id: values.category
          }
      }
      dispatch(createDeal(reqData))
    } 
  })
  return (
    <Box component={"form"} onSubmit={formik.handleSubmit}
      className='space-y-6'>
        <Typography variant='h4' className='text-center'>
          Create Deal
        </Typography>

        <TextField fullWidth label="Discount" name='discount' 
          value={formik.values.discount} 
          onChange={formik.handleChange}
          error={formik.touched.discount && Boolean(formik.errors.discount)}
          helperText={formik.touched.discount && formik.errors.discount}
        />

        <FormControl fullWidth>
          <InputLabel id="demo">Category</InputLabel>
          <Select
            labelId='demo'
            id='demo'
            value={formik.values.category}
            label="Category"
            onChange={formik.handleChange}
          >
            {customer.homePageData?.dealCategories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button fullWidth sx={{py:".9rem"}} type="submit" variant="contained">
          Create Deal
        </Button>
    </Box>
  )
}

export default CreateDealForm