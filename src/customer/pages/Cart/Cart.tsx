import React, { useEffect, useState } from 'react'
import { Close, LocalOffer } from '@mui/icons-material'
import { teal } from '@mui/material/colors'
import { Button, dividerClasses, Icon, IconButton, TextField } from '@mui/material'
import PricingCart from './PricingCart'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../State/Store'
import { fetchUserCart } from '../../../State/customer/cartSlice'
import CartItemCard from './CartItemCard'
import { applyCoupon } from '../../../State/customer/couponSlice'

const Cart = () => {
  const [couponCode, setCouponCode] = useState('')
  const handleChange = (e:any) => {
    setCouponCode(e.target.value);      
  }
  const navigate = useNavigate();
  const {cart, coupon} = useAppSelector(store=>store)

  const dispatch = useAppDispatch();
  useEffect(() =>{
    dispatch(fetchUserCart(localStorage.getItem("jwt") || ""))
  }, [])

  const handleApplyCoupon = () => {
    const jwt = localStorage.getItem("jwt") || "";
    const orderValue = cart.cart?.totalSellingPrice || 0;
  
    dispatch(applyCoupon({
      apply: "true",
      code: couponCode,
      orderValue,
      jwt
    }));
  }  
  console.log("Coupon state:", {
    couponApplied: cart.couponApplied,
    couponCode: cart.cart?.couponCode
  })
  

  return (
    <div className='pt-10 px-5 sm:px-10 md:px-60 min-h-screen'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='cartItemSection lg:col-span-2 space-y-3'>
                    {cart.cart?.cartItems.map((item)=> <CartItemCard item={item}/> )}   
                </div>
    
                <div className='col-span-1 text-sm space-y-3'>
                  <div className='border rounded-md px-5 py-3 space-y-5'>
                    <div className='flex gap-3 text-sm items-center'>
                      <div className='flex gap-3 text-sm items-center'>
                        <LocalOffer sx={{color:teal[600], fontSize:'17px'}}/>
                      </div>
                      <span>Apply Coupons</span>
                    </div>
                  
                    {cart.couponApplied || !!cart.cart?.couponCode ?(
                      <div className='flex justify-between items-center border rounded-md bg-gray-100 p-2'>
                        <span className='font-medium text-sm text-green-600'>
                          Applied Coupon: <strong>{cart.cart?.couponCode}</strong>
                        </span>
                        <IconButton size='small'>
                          <Close className='text-red-600' />
                        </IconButton>
                      </div>
                    ) : (
                      <div className='flex items-center justify-between gap-2'>
                        <TextField
                          onChange={handleChange}
                          placeholder='Enter coupon'
                          size='small'
                          id='outlined-basic'
                          label='Coupon Code'
                          variant='outlined'
                          value={couponCode}
                        />
                        <Button size='small' onClick={handleApplyCoupon} variant='contained'>
                          Apply
                        </Button>
                      </div>
                    )}
                  </div>
                  <div className='border rounded-md'>
                    <PricingCart />
                    <div className='p-2'>
                      <Button onClick={()=> navigate("/checkout")} 
                        fullWidth
                        variant='contained'
                        sx={{py: "11px"}}>Buy now</Button>
                    </div>
                  </div>
                </div>
            </div>
    </div>
  )
}

export default Cart