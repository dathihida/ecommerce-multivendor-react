import { Button, dividerClasses, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useAppDispatch } from '../../../State/Store'
import { sendLoginSignupOtp, signinCustomer } from '../../../State/AuthSlice'
import { sellerLogin } from '../../../State/seller/sellerAuthSlice'

const SellerLoginForm = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues:{
      email:"",
      otp:""
    },
    onSubmit:values =>{
      console.log("form data", values)
      dispatch(sellerLogin(values))
    }
  })

  const handleSentOtp=()=>{
    dispatch(sendLoginSignupOtp({email: formik.values.email}));
  }

  const handleLogin = () =>{
    // dispatch(signin(email:))
  }
  return (
    <div className='space-y-5'>
      <h1 className='text-center font-bold text-xl text-primary-colors pb-5'>
        Login As Seller
      </h1>
      
      <div className='space-y-5'>
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
        {true && 
        <div className='space-y-2'>
          <p className='font-medium text-sm opacity-60'>Enter OTP sent to your email</p>

          <TextField
            fullWidth
            name='otp'
            label="Otp"
            value={formik.values.otp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.otp && Boolean(formik.errors.otp)}
            helperText={formik.touched.otp && formik.errors.otp}
          />
        </div>}

        <Button onClick={()=>handleSentOtp()} fullWidth variant='contained' sx={{py:"11px"}}> 
          Send Otp
        </Button>

        <Button onClick={() => formik.handleSubmit()} fullWidth variant='contained' sx={{py:"11px"}}> 
          Login
        </Button>
      </div>
    </div>
  )
}

export default SellerLoginForm