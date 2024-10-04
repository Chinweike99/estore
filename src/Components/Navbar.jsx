import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets.js'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext.jsx'


const Navbar = () => {
    const {showSearch, setShowSearch, getCartCount, navigate} = useContext(ShopContext);
    const [show, setShow] = useState(false);

    const handleShow =()=>{
        setShow(!show);
    }

    const handleSetBox = () => {
        setShowSearch(!showSearch)
    }


  return (
    <div className='flex sticky top-0 left-0 px-4 z-10 bg-gradient-to-r from-blue-900 via-green-600 to-purple-400 items-center justify-between py-5 font-medium'>

        <Link to={'/'}>
            <img src={assets.logo} alt="logo" className='w-8' />
        </Link>
        <ul className='hidden sm:flex gap-5 text-gray-700'>


            <NavLink to={'/'} className='flex flex-col items-center '>
                <p className='text-white'>Home</p>
                <hr className='w-2/3 border-none h-[1.8px] bg-white hidden' />
            </NavLink>

            <NavLink to={'/collection'} className='flex flex-col items-center '>
                <p className='text-white'>Collection</p>
                <hr className='w-2/3 border-none h-[1.8px] bg-white hidden' />
            </NavLink>

            <NavLink to={'/contact'} className='flex flex-col items-center '>
                <p className='text-white'>Contact</p>
                <hr className='w-2/3 border-none h-[1.8px] bg-white hidden' />
            </NavLink>

            <NavLink to={'/about'} className='flex flex-col items-center '>
                <p className='text-white'>About</p>
                <hr className='w-2/3 border-none h-[1.8px] bg-white hidden' />
            </NavLink>

        </ul>

        {/* RIGHT SECTION  */}

        <div className='flex items-center gap-5'>
                <img onClick={handleSetBox} src={assets.download} alt="search" className='w-5 cursor-pointer' />

            <div className='group relative'>
                <Link to={"/login"}>
                    <img src={assets.user} alt="" className='w-8 cursor-pointer' />
                </Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded' >
                        <p className='cursor-pointer hover:text-black'>My profile</p>
                        <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={()=>navigate('/login')} className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div> 
            </div>

            <Link to={'/cart'} className='relative'>
                <img src={assets.cart} alt="" className='w-8 cursor-pointer min-w-8' />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>{getCartCount()}</p>
            </Link>



            {/* DISPLAY MENUs ON SMALL SCREEN */}
            <img onClick={handleShow} src={assets.menu2} alt="" className='sm:hidden  w-5 cursor-pointer '/>
        </div>

         {/* Menu for small screen */}
            {/* Also works (for small screen menu display)  */}
         {/* <div className={`absolute text-white top-[4.3rem] right-0 bottom-0 overflow-hidden bg-black tranasition-all ${show ? "w-full" : "w-0"}`}>
                <div className='flex flex-col text-white '>
                    <NavLink onClick={()=>setShow(false)}  to={'/'} className='py-2 text-center border'>Home</NavLink>
                    <NavLink onClick={()=>setShow(false)}  to={'/collection'} className='py-2 text-center border'>Collection</NavLink>
                    <NavLink onClick={()=>setShow(false)}  to={'/contact'}  className='py-2 text-center border'>Contact</NavLink>
                    <NavLink onClick={()=>setShow(false)}  to={'/about'}  className='py-2 text-center border'>About</NavLink>
                </div>
         </div> */}


         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white tranasition-all ${show ? "w-full" : "w-0"}`}>
            <div className='flex flex-col text-gray-600 '>
                <div className='flex items-center p-3 cursor-pointer'>
                    <img onClick={()=>setShow(false)} src={assets.backIcon} alt="" className='h-7'/>
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setShow(false)}  to={'/'} className='py-2 text-center border'>Home</NavLink>
                <NavLink onClick={()=>setShow(false)}  to={'/collection'} className='py-2 text-center border'>Collection</NavLink>
                <NavLink onClick={()=>setShow(false)}  to={'/contact'}  className='py-2 text-center border'>Contact</NavLink>
                <NavLink onClick={()=>setShow(false)}  to={'/about'}  className='py-2 text-center border'>About</NavLink>
            </div>
         </div>

    </div>
  )
}

export default Navbar