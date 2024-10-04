import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    const [recentDate, setDate] = useState()

    const getDate = () => {
        const myDate = new Date().getFullYear();
        return setDate(myDate);
    }
    useEffect(()=>{
        getDate();
    })

  return (
    <div className='text-white'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-11 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-8' />
                <p className='w-full md:w-2/3 text-white'>
                This is fine for many purposes, but it may not be random in the way you expect if you're used to dice rolls and lottery drawings. 
                </p>
            </div>

            <div>
                <p className='font-semibold mb-5 text-xl'>COMPANY</p>
                <ul className='flex flex-col text-white'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Deliver</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='font-semibold mb-5 text-xl'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-white'>
                    <li className='flex gap-2'>
                        <img className='w-5' src={assets.phone} alt="" />  
                        +234 905 068 92
                    </li>
                    
                    <li className='flex gap-2'>
                        <img className='w-5' src={assets.gmail} alt="" />  
                        contact@ecommerce.com
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <hr className='w-full h-[1.2px] bg-gray-600 mb-2'/>
            <p className='text-center text-sm text-white py-5'>
                copyright @{recentDate} ecommerce.com - All rights reserved
            </p>
        </div>
    </div>
  )
}

export default Footer