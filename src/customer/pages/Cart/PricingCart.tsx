import React from 'react'
import CartItem from './CartItemCard'
import { Divider } from '@mui/material'
import store, { useAppDispatch, useAppSelector } from '../../../State/Store'

const PricingCart = () => {
  // const{cart} = useAppDispatch(store=> store);
  const {cart} = useAppSelector(store => store)
  const cartItems = cart.cart?.cartItems || [];

  const subtotal = cartItems.reduce((sum, item) => sum + item.quantity * item.sellingPrice, 0);
  const discount = 10;
  const shipping = 15;
  const platform = 0;

  const total = subtotal - discount + shipping + platform;
  
  return (
    <>
      <div className='space-y-3 p-5'>
        <div className='flex justify-between items-center'>
          <span>Subtotal</span>
          <span>{subtotal.toLocaleString()} VND</span>
        </div>

        <div className='flex justify-between items-center'>
          <span>Discount</span>
          <span>{discount}VND</span>
        </div>

        <div className='flex justify-between items-center'>
          <span>Shipping</span>
          <span>{shipping}VND</span>
        </div>

        <div className='flex justify-between items-center'>
          <span>Plateform</span>
          <span>Free</span>
        </div>

        <Divider />

        <div className='flex justify-between items-center font-semibold text-lg'>
          <span>Total</span>
          <span>{total}VND</span>
        </div>
      </div>
    </>
  )
}

export default PricingCart