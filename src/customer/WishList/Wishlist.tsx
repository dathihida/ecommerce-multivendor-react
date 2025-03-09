import React, { useEffect } from 'react'
import WishlistProductCard from './WishlistProductCard'
import store, { useAppDispatch, useAppSelector } from '../../State/Store'
import { getWishlistByUserId } from '../../State/customer/wishlistSlice'

const Wishlist = () => {
    const dispatch = useAppDispatch()
    const {wishlist} = useAppSelector(store => store)
    useEffect(()=>{
        dispatch(getWishlistByUserId())
    }, [])
  return (
    <div className='h-[85vh] p-5 lg:p-20'>
        <section>
            <h1><strong>My WishList</strong> 5 item</h1>
            <div className='pt-10 flex flex-wrap gap-5'>
                {wishlist.wishlist?.products.map((item)=> <WishlistProductCard/>)}
            </div>
        </section>
    </div>
  )
}

export default Wishlist