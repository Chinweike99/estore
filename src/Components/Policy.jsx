import React from 'react'
import { assets } from '../assets/assets'

const Policy = () => {
  return (
    <div className='flex bg-gray-300 flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-900'>
        <div>
            <img src={assets.exchange} alt="" className='w-8 m-auto mb-5'/>
            <p className='font-semibold'>Easy Exchange</p>
            <p>Get exchanges with no hassle</p>
        </div>
        
        <div>
            <img src={assets.quality} alt="" className='w-9 m-auto mb-5'/>
            <p className='font-semibold'>One month return policy</p>
            <p>We offer best quality attires for all sizes, and a month return policy.</p>
        </div>
        
        <div>
            <img src={assets.support} alt="" className='w-8 m-auto mb-5'/>
            <p className='font-semibold'>Customer support</p>
            <p>24/7 Customer support available</p>
        </div>

    </div>
  )
}

export default Policy