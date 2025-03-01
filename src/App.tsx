import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './customer/components/Navbar/Navbar';
import customerTheme from './Theme/customerTheme';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import PageDetail from './customer/pages/PageDetail/ProductDetail';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';
import Account from './customer/pages/Account/Account';
import ProductDetail from './customer/pages/PageDetail/ProductDetail';
import BecomeSeller from './customer/pages/BecomeSeller/BecomeSeller';
import SellerDashboard from './seller/page/SellerDashboard/SellerDashboard';
import AdminDashboard from './admin/Pages/Dashboard/AdminDashboard';
import { fetchProducts } from './State/fetchProduct';
import { useAppDispatch, useAppSelector } from './State/Store';
import { fetchSellerProfile } from './State/seller/sellerSlice';
import Auth from './customer/pages/Auth/Auth';

function App() {
  const dispatch = useAppDispatch();
  const {seller} = useAppSelector(store => store)
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""))
  },[])

  useEffect(()=>{
    if(seller.profile){
      navigate("/seller")
    }
  },[seller.profile])
  return (
      <ThemeProvider theme={customerTheme}>
        
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Auth/>}/>
            <Route path='/products/:category' element={<Product/>}/>
            <Route path='/reviews/:productId' element={<Review/>}/>
            <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetail/>}/>
            <Route path='/cart/' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/account/*' element={<Account/>}/>
            {/* becomeseller */}
            <Route path='/become-seller' element={<BecomeSeller/>}/>
            <Route path='/seller/*' element={<SellerDashboard/>}/>
            {/* admin */}
            <Route path='/admin/*' element={<AdminDashboard/>}/>
          </Routes>
        </div>
      </ThemeProvider>
  );
}

export default App;
