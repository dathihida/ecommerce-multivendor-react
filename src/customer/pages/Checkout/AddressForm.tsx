import { Box, Button, Grid2, TextField } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAppDispatch } from '../../../State/Store';
import { createOrder } from '../../../State/customer/orderSlice';
import { addAddress } from '../../../State/customer/addressSlice';

const AddressFormSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    mobile: yup.string().required('Mobile is required'),
    pinCode: yup.string().required('Pincode is required'),
    address: yup.string().required('Address is required'),
    locality: yup.string().required('Locality is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
})

const AddressForm = ({paymentGateway}:any) => {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            city: '',
            pinCode: '',
            locality: '',
            mobile: '',
            state: '',
            zip: ''
        },
        validationSchema: AddressFormSchema,
        onSubmit:  values => {
            console.log(values)
            // dispatch(createOrder({
            //     address:values, 
            //     jwt:localStorage.getItem("jwt") || "", 
            //     paymentGateway,
            // }))
            dispatch(addAddress({
                address: values,
                jwt: localStorage.getItem("jwt") || "",
            }))
        }
    })
  return (
    <Box sx={{width: 'auto'}}>
        <p className='text-xl font-bold text-center pb-5'>
            Contact Details
        </p>
        <form action="" onSubmit={formik.handleSubmit}>
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

                <Grid2 size={{xs:6}}>
                    <TextField fullWidth label="locality" name='locality' 
                        value={formik.values.locality} 
                        onChange={formik.handleChange}
                        error={formik.touched.locality && Boolean(formik.errors.locality)}
                        helperText={formik.touched.locality && formik.errors.locality}
                    />
                </Grid2>
                <Grid2 size={{xs:6}}>
                    <TextField fullWidth label="zip" name='zip' 
                        value={formik.values.zip} 
                        onChange={formik.handleChange}
                        error={formik.touched.zip && Boolean(formik.errors.zip)}
                        helperText={formik.touched.zip && formik.errors.zip}
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

                <Grid2 size={{xs:12}}>
                    <Button type='submit' 
                        className='w-full bg-primary text-white p-3 rounded-md'>
                        Save Address
                    </Button>
                </Grid2>
            </Grid2>
        </form>

    </Box>
  )
}

export default AddressForm