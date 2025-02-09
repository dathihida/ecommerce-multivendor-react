import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './customer/components/Navbar/Navbar';
import customerTheme from './Theme/customerTheme';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <ThemeProvider theme={customerTheme}>
        
        <div>
          <Navbar/>
          {/* <Home/> */}
          <BrowserRouter>
            <Product/>
          </BrowserRouter> 
        </div>
      </ThemeProvider>
  );
}

export default App;
