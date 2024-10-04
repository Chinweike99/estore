import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title';

const Orders = () => {
  const [recentDate, setDate] = useState()
  const {currency, products} = useContext(ShopContext);



  const getDate = () => {
      const myDate = new Date();
      return setDate(myDate.toLocaleDateString());
  }
  useEffect(()=>{
      getDate();
  })

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {
          products.slice(1,4).map((item, index)=>(
          <div key={index} className='py-4 border-t border-b text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                  <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                  <div>
                    <p className='sm:text-base font-medium'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base text-white'>
                      <p className='text-lg'>{currency} {item.price}</p>
                      <p>Quantity: 1</p>
                      <p>Size: L</p>
                    </div>
                    <p className='pt-4 text-gray-900'>Date: <span className='text-white'>{recentDate}</span></p>
                  </div>
              </div>

              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-3'>
                  <p className='min-w-2 h-2 rounded-full bg-green-800'></p>
                  <p className='text-sm md:text-base'>Ready for shipping</p>
                </div>
                <button className='border px-4 py-2 font-medium rounded'>Track Order</button>
              </div>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders