import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './customer/components/Navbar/Navbar';
import customerTheme from './Theme/customerTheme';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageDetail from './customer/pages/PageDetail/ProductDetail';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';
import Account from './customer/pages/Account/Account';
import ProductDetail from './customer/pages/PageDetail/ProductDetail';

function App() {
  return (
      <ThemeProvider theme={customerTheme}>
        
        <div>
          <Navbar/>
          {/* <Home/> */}
          {/* <Product/> */}
          {/* <PageDetail/> */}
          {/* <Review/> */}
          {/* <Cart/> */}
          {/* <Checkout/> */}
          {/* <Account/> */}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products/:category' element={<Product/>}/>
            <Route path='/reviews/:productId' element={<Review/>}/>
            <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetail/>}/>
            <Route path='/cart/' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/account/*' element={<Account/>}/>
          </Routes>
        </div>
      </ThemeProvider>
  );
}

export default App;
