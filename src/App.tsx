import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './admin/components/Navbar';
import customerTheme from './Theme/customerTheme';

function App() {
  return (
      <ThemeProvider theme={customerTheme}>
        
        <div>
          <Navbar/>
        </div>
      </ThemeProvider>
  );
}

export default App;
