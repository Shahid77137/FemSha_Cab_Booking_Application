'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import WestIcon from '@mui/icons-material/West';
import { Avatar, Button, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CallIcon from '@mui/icons-material/Call';

const RideDetail = () => {
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
    <div>
        <div className='flex items-center px-2 lg:px-5 py-2'>
            <WestIcon onClick = {goBack} className='cursor-pointer' />
            <p className='text-center w-full'>SF96MI464D</p>
        </div>
        <div className='px-2 lg:px-5 py-5'>
            <div className='border rounded-md'>
                <div className='flex itemscenter border-b p-3'>
                    <span className='pr-5 opacity-70 text-xs font-semi'>
                        PICKUP : {" "}
                    </span>
                    <span>Mumbai Gokuldjam Market</span>
                </div>
                <div className='flex itemscenter border-b p-3'>
                    <span className='pr-5 opacity-70 text-xs font-semi'>
                        DROP : {" "}
                    </span>
                    <span>Kolkata</span>
                </div>

            </div>
        </div>
        <p className='p-2 bg-green-400 text-white text-center mb-5'>
            Picking arriving in 1min
        </p>
        <div className='flex items-center justify-center w-full h-[42vh] '>
            <p className='text-center w-full'>
                <iframe
                src={"https://www.researchgate.net/publication/361983136/figure/fig1/AS:1177625955434500@1657779315476/Taiwan-on-the-world-map-Google-Maps-2021.jpg"} frameborder="0"
                width='100%'
                height='300'
                style={{border:'0'}}
                allowFullScreen=''
                loading='lazy'
                >

                </iframe>
            </p>
        </div>
        <div className='px-2 lg:px-5 mt-2'>
            <div className='border rounded-md'>
                <div className='flex justify-between w-full border-b p-3'>
                    <div className='flex items-center'>
                        <Avatar 
                        alt="Romy Sharp"
                        src=""
                        /> 
                        <div className='pl-4'>
                            <p>
                                Toyoto  Fortuner
                            </p> 
                            <p className='text-xs font-semibold opacity-60'>Min Cab</p>
                        </div>
                    </div>
                    <div >
                        <p className='text-xs'>
                            GJ201-189904
                        </p>
                        <p className='font-semibold'>
                        189904
                        </p>
                    </div>
                </div>
                <div className='flex justify-between w-full p-3'>
                    <div className='flex items-center'>
                        <Avatar 
                        alt='Micheal Philips'
                        src=''
                        />
                        <div className='pl-4'>
                            <p>Babu Bhaiya</p>
                            <p className='text-xs flex items-center'>
                                4.7 <StarIcon className='text-yellow-500 text-sm' />
                                </p>
                        </div>
                    </div>
                    <IconButton color='success' aria-label='call-driver'>
                        <CallIcon />
                    </IconButton>
                </div>
            </div>
            {true ? (
                <Button
                variant='contained'
                color='secondary'
                sx={{
                    width:"100%",
                    // backgroundColor:"blue",
                    padding:".5rem 0rem"
                }}
                >
                    Pay Now
                </Button>
            ):(
                <div className='flex justify-between items-ccenter bg-yellow-600 text-white py-2 px-5'>
                    <div className='flex items-center'>
                        <KeyIcon />
                        <p className='ml-4'>OTP</p>
                    </div>
                    <p>6785</p>
                </div>
            )}
        </div>
    </div>
  );
};

export default RideDetail