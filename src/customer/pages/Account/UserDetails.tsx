import React from 'react'
import ProfileFieldCard from '../../../components/ProfileFieldCard'

const UserDetails = () => {
  return (
    <div className='flex justify-center py-10'>
        <div className='w-full lg:w-[70%]'>
            <div className='flex items-center pb-3 justify-between'>
                <h1 className='text-2xl font-bold text-gray-600'>Persional Detail</h1>

            </div>
            <div className=''>
                <ProfileFieldCard keys={'Name'} value={'DAT'}/>
                <ProfileFieldCard keys={'Mobile'} value={'0368746003'}/>
                <ProfileFieldCard keys={'Email'} value={'tiendat060709@gmail.com'}/>
                <ProfileFieldCard keys={'Address'} value={'DONGNAI'}/>
            </div>
        </div>

    </div>
  )
}

export default UserDetails