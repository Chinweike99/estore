import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState("Sign up");

  const onSubmitHandler = async(e) =>{
    e.preventDafault();
  }

  return (
    <div className='text-center'>
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-90% sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-full bg-gray-600' />
        </div>

        {currentState === 'Login' ? "" : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Username' required />}
        
        <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='email' required />
        <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
        {currentState === 'Login' ? "" : <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Confirm Password' /> }
        
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot password?</p>
          
          {
            currentState === "Login" ? <p onClick={()=>setCurrentState("Sign up")} className='cursor-pointer'>Create accout</p> 
            : <p onClick={()=>setCurrentState("Login")} className='cursor-pointer'>Login</p>
          }
        </div>

          <button className='bg-black rounded text-white w-full py-2 text-[18px] mt-5'>
            {currentState === "Login" ? "Sign in" : "Sign up" }
          </button>
        
      </form>

    </div>
  )
}

export default Login