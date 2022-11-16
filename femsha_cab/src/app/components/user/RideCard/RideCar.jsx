import { Avatar } from '@mui/material'
import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';

const RideCar = () => {
  return (
    <div
    // onClick={() => Router.push()}
    className='flex justify-between items-center rounded-s-sm p-3 cursor-pointer'>
        <div className='flex items-center'>
            <img 
            className='w-20 h-20'
            src="" alt="" />
            <div className='ml-5 space-y-1'>
                <p className='text-sm font-semibold'>Today 10:08pm</p>
                <p className='text-xs font-semibold opacity-60'>Cab KSLW6969</p>
                <p className='opacity-60 text-xs'>Mombai Gokuldham Market</p>
                <p className='opacity-60 text-xs'>Haryana</p>
            </div>
        </div>
        {true ? (
            <div>
                <VerifiedIcon className='text-green-800 text-4xl' fontSize='3rem' />
            </div>
        ):(
            <div className='flex flex-col justify-between pl-5'>
                <p className='text-green-500 mb-5'>Schedule...</p>
                <Avatar 
                alt='Micheal Jones'
                src='' />
            </div>
        )}
    </div>
  )
}

export default RideCar