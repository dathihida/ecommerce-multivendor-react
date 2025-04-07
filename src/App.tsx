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
import { fetchUserProfile } from './State/AuthSlice';
import { boolean } from 'yup';
import PaymentSuccess from './customer/pages/PaymentSuccess';
import Wishlist from './customer/WishList/Wishlist';
import { create } from 'domain';
import { createHomeCategory } from './State/customer/customerSlice';
import { homeCategories } from './data/HomeCategories';

function App() {
  const dispatch = useAppDispatch();
  const {seller, auth} = useAppSelector(store => store)
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""))
    dispatch(createHomeCategory(homeCategories))
  }, [])

  useEffect(()=>{
    if(seller.profile){
      navigate("/seller")
    }
  },[seller.profile])

  useEffect(() => {
    dispatch(fetchUserProfile({jwt: auth.jwt || localStorage.getItem("jwt")}))
  }, [auth.jwt]);
  return (
      <ThemeProvider theme={customerTheme}>
        
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Auth/>}/>
            {/* hien thi toan bo*/}
            <Route path='/products/' element={<Product/>}/>
            {/* hien thi theo category*/}
            <Route path='/products/:category' element={<Product/>}/>
            <Route path='/reviews/:productId' element={<Review/>}/>
            <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetail/>}/>
            <Route path='/cart/' element={<Cart/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/payment-success/:orderId' element={<PaymentSuccess/>}/>
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
