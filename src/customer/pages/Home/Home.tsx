import React from 'react'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import { Button } from '@mui/material'
import { Storefront, StoreSharp } from '@mui/icons-material'
import Product from '../Product/Product'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigator = useNavigate()
  return (
    <>
        <div className='space-y-5 lg:space-y-10 relative pb-20'>
            <ElectricCategory/>
            <CategoryGrid/>

            <section className='pt-20'>
              <h1 className='text-lg lg:text-4xl font-bold text-primary-colors pb-5 lg:px-20 text-center'>
                TODAY'S DEAL
              </h1>
              <Deal/>
            </section>

            <section className='pt-20'>
              <h1 className='text-lg lg:text-4xl font-bold text-primary-colors pb-5 lg:px-20 text-center'>SHOP BY CATEGORY</h1>
              <ShopByCategory/>
            </section>
            
            <section className='mt-20 lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
              <img className='w-full h-full'
                src="https://as1.ftcdn.net/v2/jpg/03/20/68/66/1000_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg" alt="" />
              <div className='absolute top-1/2 left-3/4 
                transform -translate-x-1/2 -translate-y-1/2 font-semibold lg:text-4xl space-y-3 text-center'>
                <h1 className='text-2xl lg:text-4xl font-bold text-white pb-5'>Sell your product</h1>
                <p className='text-lg md:text-2xl'>With<span className='logo'> DatShop</span></p>
                <div className='pt-6 flex justify-center'>
                  <Button onClick={()=>navigator("/become-seller")} 
                    startIcon={<Storefront/>} variant='contained' size='large'>
                    Become Seller
                  </Button>
                </div>
              </div>
            </section>
        </div>
    </>
  )
}

export default Home