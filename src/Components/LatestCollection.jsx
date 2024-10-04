import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductsItem from './ProductsItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProduct, setLatestProduct] = useState([]);

    useEffect(() =>{
        setLatestProduct(products.slice(0,10));
    }, [])

  return (
    <div className='my-10'>
        <div className='text-center font-bold text-3xl py-8'>
            <Title text1={"LATEST"} text2={"COLLECTION"}/>
            <p className='text-center text-sm w-3/4 m-auto sm:text-2xl text-white '>
            The top 10 Google font combinations, beautifully designed and available for free with Figmas ready-made type pairing palettes.
            </p>
        </div>
            
            {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProduct.map((item, index)=>{
                    return(
                        <ProductsItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default LatestCollection