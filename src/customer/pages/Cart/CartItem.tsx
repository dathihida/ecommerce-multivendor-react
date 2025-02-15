import { Add, Close, Remove } from '@mui/icons-material'

import { Button, IconButton } from '@mui/material'
import React from 'react'

const CartItem = () => {
    const handleUpdateQuantity = () => {

    }
  return (
    <div className='border rounded-md relative p-4 shadow-sm bg-white'>
            <div className='flex gap-4 items-center'>
                
                <img className='w-[140px] h-[140px] rounded-md' 
                    src="https://www.derek-rose.com/cdn/shop/files/mens-t-shirt-jordan-linen-white-creative_1742741f-3680-48ce-8d93-63d58adb7c2b_2000x.jpg?v=1695981317"
                    alt="Product" />
                
                <div className='flex-1 space-y-2'>
                    <h1 className='font-semibold text-lg uppercase'>
                        Mens T-Shirt Jordan
                    </h1>
                    <p className='text-sm text-gray-600'>Color: White</p>
                    <p className='text-sm text-gray-600'>Size: L</p>
                    <p className='text-sm font-medium'>Quantity: 1</p>
                </div>
                
                <div className='flex items-center gap-2 bg-gray-100 p-2 rounded-md'>
                    <Button disabled={true} onClick={handleUpdateQuantity} className='p-1'>
                        <Remove />
                    </Button>
                    <span className='text-lg font-medium'>5</span>
                    <Button onClick={handleUpdateQuantity} className='p-1'>
                        <Add />
                    </Button>
                </div>
                <div className='text-right'>
                    <p className='text-gray-700 font-medium text-lg'>1000 <strong>VND</strong></p>
                </div>
            </div>
            <div className='absolute top-2 right-2 border rounded-full'>
                <IconButton color='error'>
                    <Close />
                </IconButton>
            </div>
        </div>
  )
}

export default CartItem