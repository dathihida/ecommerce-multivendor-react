import { Divider } from '@mui/material'
import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import OrderDetail from './OrderDetail';
import UserDetails from './UserDetails';
import Address from './Address';
import Orders from './Orders';

const menu=[
    {name: "orders", path: "/account/orders"},
    {name: "profile", path: "/account"},
    {name: "Save Cards", path: "/account/saved-card"},
    {name: "Addresses", path: "/account/addresses"},
    {name: "Logout", path: "/"}
];
const Account = () => {
    const navigate = useNavigate();
    const location = useLocation(); 

    const handleClick = (item:any) => navigate(item.path);      
  return (
    <div className='px-5 lg:px-52 min-h-screen mt-10'>
        <div>
            <h1 className='text-xl font-bold pb-5'>Dat</h1>
        </div>
        <Divider/>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78hv]'>
            <section className='col-span-1 lg:border-r lg:pr-5 py-5 h-full px-5 rounded-md'>
                {
                    menu.map((item) => (
                        <div 
                            key={item.name}    
                            onClick={() => handleClick(item)}
                            className={`py-3 cursor-pointer border-b flex items-center justify-center transition duration-300 
                                        ${item.path === location.pathname ? "bg-primary-colors text-white" : "hover:bg-primary-colors hover:text-white"}`}
                        >
                            <p className="font-medium text-sm">{item.name}</p>
                        </div>
                    ))
                }   
            </section>
            <section className='right lg:col-span-2 lg:pl-5 py-5'>
                <Routes>
                    <Route path='/' element={<UserDetails/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/order/:orderId/:orderItemId' element={<OrderDetail/>}/>
                    <Route path='/addresses' element={<Address/>}/>
                </Routes>
            </section>
        </div>
    </div>
  )
}

export default Account