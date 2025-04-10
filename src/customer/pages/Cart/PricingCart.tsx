import React from 'react'
import CartItem from './CartItemCard'
import { Divider } from '@mui/material'
import store, { useAppDispatch, useAppSelector } from '../../../State/Store'
import { sumCartItemSellingPrice } from '../../../Util/sumCartItemMrpPrice'

const PricingCart = () => {
  // const{cart} = useAppDispatch(store=> store);
  const {cart} = useAppSelector(store => store)
  const cartItems = cart.cart?.cartItems || [];

  const subtotal = sumCartItemSellingPrice(cartItems);
  const discount = cart.cart?.discount || 0;
  const couponValue = subtotal * (discount / 100);
  const total = subtotal - couponValue;

  console.log("cartItems", cartItems);
  console.log("subtotal", subtotal);
  console.log("discount", discount);
  console.log("total", total);
  
  return (
    <>
      <div className='space-y-3 p-5'>
        <div className='flex justify-between items-center'>
          <span>Subtotal</span>
          <span>{subtotal.toLocaleString()} VND</span>
        </div>

        <div className='flex justify-between items-center'>
          <span>Discount</span>
          <span>{discount}%</span>
        </div>

        <div className='flex justify-between items-center'>
          <span>Shipping</span>
          <span>{0}VND</span>
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