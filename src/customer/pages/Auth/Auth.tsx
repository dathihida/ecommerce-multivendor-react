import { Login } from '@mui/icons-material';
import React, { useState } from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Button } from '@mui/material';

const Auth = () => {
  const [isLogin, setIsLogin]= useState(true);
  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="https://vending-cdn.kootoro.com/torov-cms/upload/image/1669358914523-kh%C3%A1i%20ni%E1%BB%87m%20qu%E1%BA%A3ng%20c%C3%A1o%20banner%20tr%C3%AAn%20website.jpg"
          alt="Banner"
        />
        <div className="p-6">
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>
            <Button size="small" className="mt-2" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create Account" : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth