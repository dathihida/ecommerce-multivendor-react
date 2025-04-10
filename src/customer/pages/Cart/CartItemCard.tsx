import { Add, Close, Remove } from '@mui/icons-material'

import { Button, IconButton } from '@mui/material'
import React from 'react'
import { CartItem } from '../../../types/cartTypes'
import { useAppDispatch } from '../../../State/Store'
import { deleteItemToCart, updateCartItem } from '../../../State/customer/cartSlice'

const CartItemCard = ({item}:{item:CartItem}) => {
    const dispatch = useAppDispatch();
    
    const handleUpdateQuantity = (value: number) =>() => {
        dispatch(updateCartItem({
            jwt:localStorage.getItem("jwt"), 
            cartItemId: item.id, 
            cartItem:{quantity:item.quantity+value}
        }))
    }
    const handleDeleteItem = (value: number) =>()=>{
        dispatch(deleteItemToCart({
            jwt:localStorage.getItem("jwt") || "",
            cartItemId: item.id
        }))
    }

  return (
    // <div className='border rounded-md relative p-4 shadow-sm bg-white'>
    //         <div className='flex gap-4 items-center'>
                
    //             <img className='w-[140px] h-[140px] rounded-md' 
    //                 src={item.product.images[0]}
    //                 alt="Product" />
                
    //             <div className='flex-1 space-y-2'>
    //                 <h1 className='font-semibold text-lg uppercase'>
    //                     {item.product.seller?.bussinessDetails.businessName}
    //                 </h1>
    //                 <p className='text-sm text-gray-600'>Mrprice: {item.product.mrpPrice}</p>
    //                 <p className='text-sm text-gray-600'>Price: {item.product.sellingPrice}</p>
    //                 <p className='text-sm text-gray-600'>Color: {item.product.color}</p>
    //                 <p className='text-sm text-gray-600'>Size: {item.product.sizes}</p>
    //                 <p className='text-sm font-medium'>
    //                     <strong>Quantity: {item.quantity}</strong>
    //                 </p>
    //             </div>
                
    //             <div className='flex items-center gap-2 bg-gray-100 p-2 rounded-md'>
    //                 <Button onClick={handleUpdateQuantity(-1)} className='p-1'>
    //                     <Remove />
    //                 </Button>
    //                 <span className='text-lg font-medium'>{item.quantity}</span>
    //                 <Button onClick={handleUpdateQuantity(1)} className='p-1'>
    //                     <Add />
    //                 </Button>
    //             </div>
    //             <div className='text-right'>
    //                 <p className='text-gray-700 font-medium text-lg'>{item.sellingPrice} <strong>VND</strong></p>
    //             </div>
    //         </div>
    //         <div className='absolute top-2 right-2 border rounded-full'>
    //             <Button onClick={handleDeleteItem(item.id)}>
    //                 <IconButton color='error'>
    //                     <Close />
    //                 </IconButton>
    //             </Button>
                
    //         </div>
    //     </div>

    <div className="border rounded-md relative p-4 shadow-sm bg-white w-full">
  <div className="flex flex-col md:flex-row md:items-center gap-4">

    {/* Ảnh sản phẩm */}
    <div className="w-full md:w-[140px] h-[140px] flex-shrink-0 overflow-hidden rounded-md">
      <img
        className="w-full h-full object-cover"
        src={item.product.images[0]}
        alt="Product"
      />
    </div>

    {/* Thông tin sản phẩm */}
    <div className="flex-1 space-y-2">
      <h1 className="font-semibold text-base md:text-lg uppercase">
        {item.product.seller?.bussinessDetails.businessName}
      </h1>
      <p className="text-sm text-gray-600">Mrprice: {item.product.mrpPrice}</p>
      <p className="text-sm text-gray-600">Price: {item.product.sellingPrice}</p>
      <p className="text-sm text-gray-600">Color: {item.product.color}</p>
      <p className="text-sm text-gray-600">Size: {item.product.sizes}</p>
      <p className="text-sm font-medium">
        <strong>Quantity: {item.quantity}</strong>
      </p>

      {/* Nút tăng/giảm */}
      <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md w-fit">
        <Button onClick={handleUpdateQuantity(-1)} className="p-1 min-w-[32px]">
          <Remove />
        </Button>
        <span className="text-base font-medium">{item.quantity}</span>
        <Button onClick={handleUpdateQuantity(1)} className="p-1 min-w-[32px]">
          <Add />
        </Button>
      </div>
    </div>

    {/* Giá sản phẩm */}
    <div className="mt-3 md:mt-0 text-right md:min-w-[100px]">
      <p className="text-gray-700 font-medium text-lg">{item.sellingPrice.toLocaleString()} <strong>VND</strong></p>
    </div>
  </div>

  {/* Nút xoá */}
  <div className="absolute top-2 right-2">
    <IconButton onClick={handleDeleteItem(item.id)} color="error">
      <Close />
    </IconButton>
  </div>
</div>

  )
}

export default CartItemCard