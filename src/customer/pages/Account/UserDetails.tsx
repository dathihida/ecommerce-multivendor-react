import React from 'react'
import ProfileFieldCard from '../../../components/ProfileFieldCard'
import store, { useAppDispatch, useAppSelector } from '../../../State/Store'

const UserDetails = () => {
  const {auth} = useAppSelector(store=> store)
  return (
    <div className='flex justify-center py-10'>
        <div className='w-full lg:w-[70%]'>
            <div className='flex items-center pb-3 justify-between'>
                <h1 className='text-2xl font-bold text-gray-600'>Persional Detail</h1>

            </div>
            <div className=''>
                <ProfileFieldCard keys={'Name'} value={auth.user?.fullName || ""}/>
                <ProfileFieldCard keys={'Mobile'} value={auth.user?.mobile || ""}/>
                <ProfileFieldCard keys={'Email'} value={auth.user?.email || ""}/>
                {/* <ProfileFieldCard keys={'Address'} value={auth.user?.addresses}/> */}
            </div>
        </div>

    </div>
  )
}

export default UserDetails