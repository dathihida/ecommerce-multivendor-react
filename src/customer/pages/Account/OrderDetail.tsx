import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import OrderStepper from './OrderStepper'
import {Payments } from '@mui/icons-material'

const OrderDetail = () => {
    const navigate = useNavigate()
  return (
    <Box className="space-y-5">
        <section className='flex flex-col gap-5 justify-center items-center'>
            <img className="w-[100px]" 
                src={"https://www.derek-rose.com/cdn/shop/files/mens-t-shirt-jordan-linen-white-creative_1742741f-3680-48ce-8d93-63d58adb7c2b_2000x.jpg?v=1695981317"} alt="" />
            <div className='text-sm space-y-1 text-center'>
                <h1 className='font-bold uppercase'>{"mens-t-shirt-jordan"}</h1>
                <p>{"Mô tả sản phẩm là những thông tin về giới thiệu đặc tính chất lượng, chức năng, lợi ích... của một sản phẩm được đăng tải trên trang web bán hàng nhằm mang đến cho người xem"}</p>
                <p><strong>Size:</strong>M</p>
            </div>
            <div>
                <Button onClick={()=> navigate(`/reviews/${5}/create}`)}>Write review</Button>
            </div>

        </section>
        <section>
            <OrderStepper orderStatus={"SHIPPER"}/>
        </section>
        <div className='border p-5'>
            <h1 className='font-bold pb-3'>Delivery Address</h1>
            <div className='text-sm space-y-2'>
                <div className='flex gap-5 font-medium'>
                    <p>DAT</p>
                    <Divider flexItem orientation='vertical'/>
                    <p>0368746003</p>
                </div>
                <p>426 HungVuong, GiaRay, XuanLoc, DongNai</p>
            </div>
        </div>
        <div className='border space-y-4'>
            <div className='flex justify-between text-sm pt-5 px-5'>
                <div className='space-y-1'>
                    <p className='font-bold'>Total Item Price</p>
                    <p>You save <span className='text-green-500 font-medium text-xs'>910VND</span>on this item</p>
                </div>
                <p className='font-medium'>1000VND</p>
            </div>
            <div className='px-5'>
                <div className='bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3'>
                    <Payments/>
                    <p>Pay On Delivery</p>
                </div>
            </div>

            <Divider/>
            <div className='px-5 pb-5'>
                <p className='text-xs'><strong>Sold by:</strong>{"mens-t-shirt-jordan"}</p>
            </div>
            <div className='p-10'>
                <Button 
                    disabled={true} color='error' sx={{py:"0.7rem"}} fullWidth>
                        {true?"order canceled":"Cancel Order"}
                </Button>
            </div>
        </div>
    </Box>
  )
}

export default OrderDetail