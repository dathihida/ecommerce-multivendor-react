import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Address } from '../../../types/UserTypes';

const AddressCard = ({item, 
                      selectedAddress, 
                      setSelectedAddress} : 
                      {
                        item:Address, 
                        selectedAddress: Address | null,
                        setSelectedAddress: (address: Address) => void}) => {
  return (
    <div className='p-5 border border-gray-200 rounded-md flex'>  
        <FormControlLabel 
      key={item.id}
      value={item.id}
      control={
        <Radio 
          checked={selectedAddress?.id === item.id}
          onChange={() => setSelectedAddress(item)}
        />
      }
      label={<div className='flex flex-col items-center'>
            <h1>{item.name}</h1>
            <p className='w-[320px]'>
                <strong>Address: </strong>
                {item.address}, {item.city}, {item.state}, {item.locality}
            </p>
            <p>
                <strong>Mobile: </strong>
                {item.mobile}
            </p>
        </div>}
    />
        
    </div>
  )
}

export default AddressCard