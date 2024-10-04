import React from 'react'
import assets2 from '../assets2/assets2'
import Title from '../Components/Title'
import NewsLetterBox from '../Components/NewsLetterBox'

const Contact = () => {
  return (
    <div className='mb-[45rem]'>

      <div className='prata-regular text-center pt-10 border-t text-2xl'>
        <Title text2={"CONTACT US"} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[400px] rounded' src={assets2.contact2} alt="" />
        <div className='flex flex-col justify-center items-start '>
          <p className='font-semibold text-xl text-white'>Our Store</p>
          <p className='text-white ext-[14px]'>+234 905 068 92 <br /> Email: admin@ecommerce.com</p>
          <p className='text-white text-[14px]'>No 12 awolowo Road <br />House 12 Moloko way, Ikeja, Lagos </p>
          <p className='font-semibold text-white'> E-Store </p>
          <p className='text-white'>Learn more about us and our team</p>
          <button className='border mt-4 rounded border-black px-8 py-2 text-sm hover:bg-black hover:text-white cursor-pointer transition-all duration-[0.7s]'>Explore jobs</button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact