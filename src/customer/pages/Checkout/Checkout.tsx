import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddressCard from './AddressCard'
import AddressForm from './AddressForm';
import PricingCart from '../Cart/PricingCart';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { fetchUserProfile } from '../../../State/AuthSlice';
import { Address } from '../../../types/UserTypes';
import { createOrder } from '../../../State/customer/orderSlice';

const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
const paymentList = [
    {
        value:"RAZORPAY",
        image: "https://www.ecommerce-nation.com/wp-content/uploads/2019/02/razorpay.webp",
        label: "razorpay",
    },
    {
        value:"STRIPE",
        image: "https://vikwp.com/images/plugins/stripe.png",
        label: "stripe",
    },
    {
        value:"MOMO",
        image: "https://developers.momo.vn/v3/vi/img/logo.svg",
        label: "momo",
    },
    {
        value:"VNPAY",
        image: "https://stcd02206177151.cloud.edgevnpay.vn/assets/images/logo-icon/logo-primary.svg",
        label: "vnpay",
    }
];
const Checkout = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false); 
    const [paymentGateway, setPaymentGateway] = useState("RAZORPAY");
    const handlePaymentChange = (event:any) =>{
        setPaymentGateway(event.target.value)
    }
    console.log("paymentGateway: ", paymentGateway)
    const dispatch = useAppDispatch();
    const {auth} = useAppSelector(store => store)
    useEffect(()=>{
        dispatch(fetchUserProfile({ jwt: localStorage.getItem("jwt") || "" }))
    },[auth.jwt])

    const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
    const { id, ...rest } = selectedAddress || {} as Address;
    console.log("selected address: ", selectedAddress)
    console.log("user address: ", auth.user?.addersses)
    console.log("user: ", auth.user)

  return (
    <>
        <div className='pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen'>
            <div className='space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9'>
                <div className='col-span-2 space-y-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-semibold'>
                            Select Address
                        </h1>
                        <Button onClick={handleOpen} variant='contained' color='primary'>
                            Add New Address
                        </Button>
                    </div>
                    <div className='text-xs font-medium space-y-5'>
                        <p>Saved Address</p>
                        <div className='space-y-5'>
                            {auth.user?.addersses?.map((item) => (
                                <AddressCard 
                                    item={item} 
                                    selectedAddress = {selectedAddress}
                                    setSelectedAddress={setSelectedAddress}
                                    />
                            ))}
                        </div>
                    </div>
                    <div className='py-4 px-5 rounded-md'>
                        <Button fullWidth onClick={handleOpen} variant='contained' color='primary'>
                            Add New Address
                        </Button>
                    </div>
                </div>
                <div className='col-span-1 space-y-5'>
                    <div className='border rounded-md p-5 space-y-3'>   
                        <h1 className='text-primary-colors font-medium pb-2 text-center'>Checkout payment</h1>    
                        <RadioGroup 
                            className='flex flex-wrap justify-center gap-4'
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            onChange={handlePaymentChange}
                            value={paymentGateway}
                        >
                            {paymentList.map((item) => (
                                <FormControlLabel 
                                    key={item.value} 
                                    className='border rounded-md flex justify-center items-center'
                                    value={item.value} 
                                    control={<Radio />} 
                                    label={
                                        <img className="w-10" src={item.image} alt={item.label} />
                                    } 
                                />
                            ))}
                        </RadioGroup>
                    </div>
                    <div className='border rounded-md'>
                        <PricingCart />
                        <div className='p-2'>
                            <Button
                                fullWidth
                                variant='contained'
                                sx={{py: "11px"}}
                                onClick={() => {
                                    if (!selectedAddress) {
                                        alert("Please select a delivery address");
                                        return;
                                    }
                                        dispatch(createOrder({
                                            address:{...rest, id},
                                            jwt:localStorage.getItem("jwt") || "", 
                                            paymentGateway,
                                        }))
                                    }}
                                >
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <AddressForm paymentGateway = {paymentGateway}/>
            </Box>
        </Modal>
    </> 
  )
}

export default Checkout