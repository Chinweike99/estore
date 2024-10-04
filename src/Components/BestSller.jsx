import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductsItem from './ProductsItem';

const BestSller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(()=>{
        const bestSales = products.filter((item) => item.bestseller);
        setBestSeller(bestSales.slice(0,5))
    }, [])

  return (
    <div className='my-10 text-white'>
        <div className='text-center text-3xl py-8'>
            <Title text1={"BEST"}  text2={"SELLERS"} />
            <p className='w-3/4 text-sm  m-auto sm:text-2xl text-white'>
            The top 10 Google font combinations, beautifully designed and available for free with Figmas ready-made type pairing palettes.
            </p>
        </div>



        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item, index) => {
                    return(
                        <ProductsItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    )
                })
            }
        </div>

    </div>
  )
}

export default BestSller