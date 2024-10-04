import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'

// NOTE: The arguments are accessible from products, because products is accessible in the shopContext

const ProductsItem = ({id, image, name, price}) => {
    const {currency} = useContext(ShopContext)

  return (
    <Link className='text-white  cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out rounded h-[20rem] w-[100%] sm:h-[15rem] lg:h-[20rem] md:h-[18rem]' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-[15px]'>{name}</p>
        <p className='text-sm font-medium text-[19px]'>{currency}{price}</p>
    </Link>
  )
}

export default ProductsItem