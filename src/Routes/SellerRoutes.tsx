import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../seller/page/SellerDashboard/Dashboard'
import Products from '../seller/page/Products/Products'
import AddProducts from '../seller/page/Products/AddProducts'
import Orders from '../seller/page/Orders/Orders'
import Profile from '../seller/page/Account/Profile'
import Payment from '../seller/page/Payment/Payment'
import Transaction from '../seller/page/Payment/Transaction'

const SellerRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/add-product' element={<AddProducts/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/account' element={<Profile/>} />
            <Route path='/payment' element={<Payment/>} />
            <Route path='/transaction' element={<Transaction/>} />
        </Routes>
    </div>
  )
}

export default SellerRoutes