import { Radio } from '@mui/material';
import React from 'react'

const AddressCard = () => {
    const handleChanges = (e:any) => {
        console.log(e.target.value)
    };
  return (
    <div className='p-5 border border-gray-200 rounded-md flex'>
        <div>
            <Radio checked={true} onChange={handleChanges} value="" name="radio-button"/>
        </div>
        <div className='space-y-3 pt-3'>
            <h1>Dat</h1>
            <p className='w-[320px]'>
                Gia Ray, Xuan Thoi Son, Hoc Mon, Ho Chi Minh
            </p>
            <p>
                <strong>Mobile: </strong>
                0368746003
            </p>
        </div>
    </div>
  )
}

export default AddressCard