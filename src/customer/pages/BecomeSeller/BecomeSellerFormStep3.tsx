import { TextField } from '@mui/material';
import React from 'react'

interface BecomeSellerFormStep2Props{
    formik: any;
}
const BecomeSellerFormStep3 = ({formik}: BecomeSellerFormStep2Props) => {
  return (
    <div className='space-y-5'>
        <TextField
            fullWidth
            name='bankDetails.accountNumber'
            label="Account Number"
            value={formik.values.bankDetails.accountNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bankDetails?.accountNumber && Boolean(formik.errors.bankDetails?.accountNumber)}
            helperText={formik.touched.bankDetails?.accountNumber && formik.errors.bankDetails?.accountNumber}
        />

        <TextField
            fullWidth
            name='bankDetails.ifsCode'
            label="IFSC Code"
            value={formik.values.bankDetails.ifsCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bankDetails?.ifsCode && Boolean(formik.errors.bankDetails?.ifsCode)}
            helperText={formik.touched.bankDetails?.ifsCode && formik.errors.bankDetails?.ifsCode}
        />

        <TextField
            fullWidth
            name='bankDetails.accountHolderName'
            label="Account Holder Name"
            value={formik.values.bankDetails.accountHolderName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.bankDetails?.accountHolderName && Boolean(formik.errors.bankDetails?.accountHolderName)}
            helperText={formik.touched.bankDetails?.accountHolderName && formik.errors.bankDetails?.accountHolderName}
        />
    </div>
  )
}

export default BecomeSellerFormStep3