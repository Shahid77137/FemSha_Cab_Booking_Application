import React from 'react'

const AvailableCab = () => {
  return (
    <div className='flex items-center border rounded-md py-2 px-5 cursor-pointer -z-10'>
        <div>
            <img className='w-7' src="https://olawebcdn.com/images/v1/cabs/sl/ic_prime.png" alt="" />
            <p className='font-semibold text-xs'>2 mins</p>
        </div>
        <div className='pl-5 text-sm'>
            <p className='font-semibold'>Prime SUV</p>
            <p className='text-xs -z-10'>SUVS With Free WiFi and Top Drivers</p>
        </div>
    </div>
  )
}

export default AvailableCab