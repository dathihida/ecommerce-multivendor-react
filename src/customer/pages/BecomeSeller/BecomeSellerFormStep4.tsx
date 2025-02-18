import { TextField } from '@mui/material';
import React from 'react'

interface BecomeSellerFormStep2Props{
    formik: any;
}
const BecomeSellerFormStep4 = ({formik}: BecomeSellerFormStep2Props) => {
  return (
    <div className='space-y-5'>
        <TextField
            fullWidth
            name='bussinessDetails.businessName'
            label="Business Name"
            value={formik.values.bussinessDetails.businessName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched?.bussinessDetails?.businessName && Boolean(formik.errors?.bussinessDetails?.businessName)}
            helperText={formik.touched?.bussinessDetails?.businessName && formik.errors?.bussinessDetails?.businessName}
        />

        <TextField
            fullWidth
            name='sellerName'
            label="Seller Name"
            value={formik.values.sellerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
            helperText={formik.touched.sellerName && formik.errors.sellerName}
        />

        <TextField
            fullWidth
            name='email'
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
            fullWidth
            name='password'
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
        />
    </div>
  )
}

export default BecomeSellerFormStep4