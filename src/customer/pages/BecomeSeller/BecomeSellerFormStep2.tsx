import { Box, Button, Grid2, TextField } from '@mui/material'
import React from 'react'


const BecomeSellerFormStep2 = ({formik}:any) => {
  return (
    <Box sx={{width: 'auto'}}>
        <p className='text-xl font-bold text-center pb-5'>
            Pick Address
        </p>
        <>
            <Grid2 container spacing={3}>
                <Grid2 size={{xs:12}}>
                    <TextField fullWidth label="name" name='name' 
                        value={formik.values.name} 
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </Grid2>

                <Grid2 size={{xs:12}}>
                    <TextField fullWidth label="mobile" name='mobile' 
                        value={formik.values.mobile} 
                        onChange={formik.handleChange}
                        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                        helperText={formik.touched.mobile && formik.errors.mobile}
                    />
                </Grid2>

                <Grid2 size={{xs:6}}>
                    <TextField fullWidth label="pinCode" name='pinCode' 
                        value={formik.values.pinCode} 
                        onChange={formik.handleChange}
                        error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                        helperText={formik.touched.pinCode && formik.errors.pinCode}
                    />
                </Grid2>

                <Grid2 size={{xs:6}}>
                    <TextField fullWidth label="address" name='address' 
                        value={formik.values.address} 
                        onChange={formik.handleChange}
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                    />
                </Grid2>

                <Grid2 size={{xs:12}}>
                    <TextField fullWidth label="locality" name='locality' 
                        value={formik.values.locality} 
                        onChange={formik.handleChange}
                        error={formik.touched.locality && Boolean(formik.errors.locality)}
                        helperText={formik.touched.locality && formik.errors.locality}
                    />
                </Grid2>

                <Grid2 size={{xs:6}}>
                    <TextField fullWidth label="city" name='city' 
                        value={formik.values.city} 
                        onChange={formik.handleChange}
                        error={formik.touched.city && Boolean(formik.errors.city)}
                        helperText={formik.touched.city && formik.errors.city}
                    />
                </Grid2>

                <Grid2 size={{xs:6}}>
                    <TextField fullWidth label="state" name='state' 
                        value={formik.values.state} 
                        onChange={formik.handleChange}
                        error={formik.touched.state && Boolean(formik.errors.state)}
                        helperText={formik.touched.state && formik.errors.state}
                    />
                </Grid2>
            </Grid2>
        </>
    </Box>
  )
}

export default BecomeSellerFormStep2