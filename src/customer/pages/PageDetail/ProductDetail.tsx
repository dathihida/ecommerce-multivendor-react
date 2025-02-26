import React, { useState } from 'react'
import StartIcon from '@mui/icons-material/Star'
import { teal } from '@mui/material/colors'
import { Button, Divider } from '@mui/material'
import { Add, AddShoppingCart, FavoriteBorder, LocalShipping, Remove, Shield, Wallet, WorkspacePremium } from '@mui/icons-material'
import SimilarProduct from './SimilarProduct'
import ReviewCard from '../Review/ReviewCard'
import { useAppDispatch } from '../../../State/Store'
const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useAppDispatch()
  return (  
    <div className='px-5 lg:px-20 pt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <section className='flex flex-col lg:flex-row gap-5'>
                <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>
                    {[1,1,1,1].map((item)=> <img className="lg:w-full w-[50px] cursor-pointer rounded-md"
                        src='https://assets.vogue.com/photos/5f341f6f4721c86585cbb800/master/w_1920,c_limit/fullsizeoutput_6bcd_1_1080x.jpg' alt='product'/>)}
                </div>
                <div className='w-full lg:w-[85%]'>
                    <img className='w-full rounded-md' 
                        src="https://assets.vogue.com/photos/5f341f6f4721c86585cbb800/master/w_1920,c_limit/fullsizeoutput_6bcd_1_1080x.jpg" alt="" />
                </div>
            </section>

            <section>
                <h1 className='font-bold text-lg text-primary-colors'>Dress Clothing</h1>
                <p className='text-gray-500 font-semibold'>Girl prink shirt</p>
                <div>
                    <div className='flex justify-between items-center py-2 border w-[180px] px-3 mt-5'>
                        <div className='flex gap-1 items-center'>
                            <span>4</span>
                            <StartIcon sx={{color:teal[500], fontSize:"17px"}}/>
                        </div>
                        <Divider orientation='vertical' flexItem/>
                        <span>234 Ratings</span>
                    </div>
                    <div className='price flex items-center gap-3 text-2xl'>
                        <span className='font-sans text-gray-800'>
                        400 VND
                        </span>
                        <span className='thin-line-through text-gray-400'>
                        500 VND
                        </span>
                        <span className='text-primary-colors font-semibold'>
                        30% off
                        </span>
                    </div>
                    <p className='text-sm'>Inclusive of all taxes. Free shipping</p>
                </div>
                <div className='mt-7 space-y-3'>
                    <div className='flex items-center gap-4'>
                        <Shield sx={{color:teal[500]}}/>
                        <p>Authentic @ Quality Assured</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <WorkspacePremium sx={{color:teal[500]}}/>
                        <p>100% money back guarantee</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <LocalShipping sx={{color:teal[500]}}/>
                        <p>Free Shipping & Return</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Wallet sx={{color:teal[500]}}/>
                        <p>Pay on delivery might be available</p>
                    </div>
                </div>

                <div className='mt-7 spance-y-2'>
                    <h1>QUANTITY</h1>
                    <div className='flex items-center gap-2 w-[140px] justify-between'>
                        <Button disabled={quantity == 1} 
                            onClick={()=>setQuantity(quantity-1)}>
                            <Remove/>
                        </Button>
                        <span>{quantity}</span>
                        <Button onClick={()=>setQuantity(quantity+1)}>
                            <Add/>
                        </Button>
                    </div>
                </div>

                <div className='mt-12 flex items-center gap-5'>
                    <Button
                        fullWidth
                        variant='contained'
                        startIcon={<AddShoppingCart/>}
                        sx={{py:"1rem"}}>
                            Add To Cart
                    </Button>

                    <Button
                        fullWidth
                        variant='contained'
                        startIcon={<FavoriteBorder/>}
                        sx={{py:"1rem"}}>
                            Whish List
                    </Button>
                </div>
                <div className='mt-5'>
                <p>
                    The SPMA’s formal academic offering includes an undergraduate degree programme specialising in 
                    Public Administration and International Relations. 
                    This is a bachelors degree that provides a solid foundation for postgraduate studies in 
                    Public Management and Administration. Postgraduate programmes include a 
                </p>
                </div>
                <div className='mt-12 space-y-5'>
                    <ReviewCard/>
                    <Divider/>  
                </div>

            </section>
        </div>  

        <div className='mt-20'>
            <h1>Similar Product</h1>
            <div className='pt-5'>
                <SimilarProduct/>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail