'use client'
import React from 'react'
import WestIcon from '@mui/icons-material/West';
import { useRouter } from 'next/navigation';
import { Avatar, Button } from '@mui/material';
import RideCar from '../components/user/RideCard/RideCar';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import WifiIcon from '@mui/icons-material/Wifi';
const Profile = () => {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
      }
    console.log(router)
    //   console.log(router.query.id);
    const goBack=() => {
    router.back();
    }
  return (
    <div className='px-2 lg:px-5'>
        <div className='px-2 lg:px-5 py-2'>
        <WestIcon onClick = {goBack} className='cursor-pointer' />
        </div>
        <div className='flex flex-col items-center space-y-2'>
        <Avatar className='flex flex-col items-center space-y-2'>SF</Avatar>
        <p>Femsha</p> 
        <p>7439860896</p>
        </div>
        <div className='border rounder-sm mt-5'>
            <RideCar/>
            <div className='flex flex-col items-center p-3'>
                <Button onClick={() => router.push("/your-rides")} variant='text'>See All Rides</Button>
            </div>
        </div>
        <div className='border mt-5'>
            <div className='flex items-center p-3 border-b'>
            <AccountBalanceWalletIcon className='text-green-600'/>
            <p className='ml-4'> Ola Money</p>
            </div>
            <div className='flex items-center p-3 border-b'>
            < ContactPhoneIcon />
            <p className='ml-4'>Emergency Contact</p>
            </div>
            <div className='flex items-center p-3'>
            <WifiIcon/>
            <p className='ml-4'> Ola Wi-Fi Credential</p>
            </div>

        </div>
        <Button  className='w-full bg-red-500 text-white mt-3 mb-3' variant='contained' color='error'>
            LogOut
        </Button>
    </div>
  )
}

export default Profile