import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='text-white flex flex-col sm:flex-row border border-grey-500'>

        {/* LEFT SIDE */}
        <div className='w-full sm:w1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-white'>
                <div className='group flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141] group-hover:bg-blue-700'></p>
                    <p>BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed '>Newest Arrivals</h1>
                <div className='flex items-center gap-1'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-10 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>

        {/* RIGHT SIDE */}
        <img className='w-full sm:w-1/2' src={assets.female9} alt="" />
    </div>
  )
}

export default Hero