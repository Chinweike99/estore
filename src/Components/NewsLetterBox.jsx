import React from 'react'

const NewsLetterBox = () => {
  const handleSubmition = (e) => {
    e.preventDefault();
  }

  return (
    <div className='text-center mt-12'>
      <p className='font-medium text-white text-2xl'>Subscribe now and get 25%Off</p>
      <p className='text-white mt-2'>
      This is fine for many purposes, but it may not be random in the way you expect if you're used to dice rolls and lottery drawings.
      </p>

      <form onSubmit={handleSubmition} className='mb-4 w-full sm:w-1/2 flex items-center gap-3 m-auto my-6 overflow-hidden'>
        <input className=' text-[1.3rem] border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500 w-full h-[3rem] px-4' type='email' placeholder='Enter your email address overflow-hidden' required/>
        <button type='submit' className='uppercase bg-black text-white px-10 py-4 text-xs rounded'>Subscribe</button>
      </form>

    </div>
  )
}

export default NewsLetterBox