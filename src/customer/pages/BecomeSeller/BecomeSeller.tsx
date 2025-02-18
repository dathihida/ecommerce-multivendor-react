import React, { useState } from 'react'
import SellerAccountForm from './SellerAccountForm';
import SellerLoginForm from './SellerLoginForm';
import { Button } from '@mui/material';

const BecomeSeller = () => {
    const [isLogin, setIsLogin] = useState(false)
    const handleShowPage = () =>{
        setIsLogin(!isLogin);
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen gap-6 p-6 bg-gray-100">
      {/* Form Section */}
        <section className="md:col-span-2 lg:col-span-1 bg-white p-10 shadow-lg rounded-md">
            {isLogin ? <SellerLoginForm /> : <SellerAccountForm />}
            <div className="mt-6 text-center">
            <p className="text-sm font-medium">{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
            <Button 
                onClick={handleShowPage} 
                fullWidth 
                variant="contained" 
                sx={{ mt: 2, py: 1.5 }}
            >
                {isLogin ? "Register" : "Login"}
            </Button>
            </div>
        </section>
        
        {/* Info Section */}
        <section className="hidden md:flex md:col-span-1 lg:col-span-2 justify-center items-center bg-white p-10 rounded-md shadow-lg">
            <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Join the Marketplace Revolution</h2>
            <p className="text-gray-600">Boost your sales today</p>
            <img 
                src="https://thumbs.dreamstime.com/z/women-shopping-clothing-store-fashion-bags-shoes-accessories-sale-flat-style-vector-illustration-62626174.jpg?ct=jpeg" 
                alt="Shopping Illustration" 
                className="w-full max-w-md mx-auto rounded-md shadow-md"
            />
            </div>
        </section>
    </div>
  )
}

export default BecomeSeller