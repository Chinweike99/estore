import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBox = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);

    // UseLocation hook: For the searchbar to be opened on the route only which it was clicked to open
    const [visible, setVisible] = useState(false)
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname.includes("collection")){
            setVisible(true);
        }else{
            setVisible(false);
        }
    }, [location])


  return showSearch  && visible ?(
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>

            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm'/>
            <img className='w-4' src={assets.download} alt="" />
        </div>
        <img onClick={()=>setShowSearch(false)} className='w-2 inline cursor-pointer' src={assets.crossIcon} alt="" />
    </div>
  ) : null
}

export default SearchBox