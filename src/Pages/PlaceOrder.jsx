import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../Context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('pod');
  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* *************LEFT********** */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address'/>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Home address'/>

        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City'/>
        </div>

        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zip code'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone'/>
      </div>


      {/* ******************* RIGHT ***************** */}
      <div className='mt-8'>

        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
            <Title text1={"SELECT"} text2={"PAYMENT METHOD"} />
            {/* ***************PAYMENT METHODS ************* */}
            <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod("pod")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border border-gray-500  rounded-full ${method === "pod" ? "bg-white" : ""}`}></p>
                <p className='text-gray-600 font-semibold mx-4'>PAY ON DELIVERY</p>
              </div>
              <div onClick={()=>setMethod("paypal")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border border-gray-500 rounded-full ${method === "paypal" ? "bg-white" : ""}`}></p>
                <img className='h-5 mx-4' src={assets.paypal} alt="" />
              </div>
              <div onClick={()=>setMethod("mastercard")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border border-gray-500  rounded-full ${method === "mastercard" ? "bg-white" : ""}`}></p>
                <img className='h-7 mx-4' src={assets.mastercard} alt="" />
              </div>
            </div>

            <div className='w-full text-end my-4'>
              <button className='bg-black rounded text-white px-12 py-3 ' onClick={()=>navigate("/orders")}>Place Order</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder