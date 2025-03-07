import React from 'react'
import CartItem from './CartItemCard'
import { Divider } from '@mui/material'

const PricingCart = () => {
  return (
    <>
      <div className='space-y-3 p-5'>
        <div className='flex justify-between items-center'>
          <span>Subtotal</span>
          <span>1000VND</span>
        </div>

        <div className='flex justify-between items-center'>
          <span>Discount</span>
          <span>100VND</span>
        </div>

        <div className='flex justify-between items-center'>
          <span>Shipping</span>
          <span>10VND</span>
        </div>

        <div className='flex justify-between items-center'>
          <span>Plateform</span>
          <span>Free</span>
        </div>

        <Divider />

        <div className='flex justify-between items-center font-semibold text-lg'>
          <span>Total</span>
          <span>910VND</span>
        </div>
      </div>
    </>
  )
}

export default PricingCart