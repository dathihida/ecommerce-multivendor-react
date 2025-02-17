import { ElectricBike, ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'

const OrderItem = () => {
  return (
    <div className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>
        <div className='flex items-center gap-5'>
            <div>
                <Avatar sizes='small' sx={{bgcolor:teal[500]}}>
                    <ElectricBolt/>
                </Avatar>
            </div>
            <div>
                <h1 className='font-bold text-primary-colors'>PENDING</h1>
                <p>Arriving By Mon, 15 Jun</p>
            </div>
        </div>
        <div className='p-5 bg-teal-50 flex gap-3'>
            <div>
                <img className='w-[70px]' 
                    src="https://www.derek-rose.com/cdn/shop/files/mens-t-shirt-jordan-linen-white-creative_1742741f-3680-48ce-8d93-63d58adb7c2b_2000x.jpg?v=1695981317" 
                    alt="" />
            </div>
            <div className='w-full space-y-2'>
                <h1 className='font-bold uppercase'>mens-t-shirt-jordan</h1>
                <p>Mô tả sản phẩm là những thông tin về giới thiệu đặc tính chất lượng, 
                    chức năng, lợi ích... của một sản phẩm được đăng tải trên trang web bán hàng  
                    nhằm mang đến cho người xem
                </p>
                <p>
                    <strong>size: </strong>
                    FREE
                </p>
            </div>
        </div>
    </div>
  )
}

export default OrderItem