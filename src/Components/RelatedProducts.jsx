import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductsItem from './ProductsItem';

const RelatedProducts = ({category, subCategory}) => {

    const {products, currency} = useContext(ShopContext);
    const [related, setRelated] = useState([])

    useEffect(() => {
        if(products.length > 0){

            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(productsCopy.slice(0,5));
        }
    }, [products])

  return (
    <div className='my-23'>

        <div className='text-center text-2xl py-2'>
            <Title text1={"RELATED"} text2={"PRODUCTS"} />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 w-full'>
        {
            related.map((item, index) =>{
                return(
                    <ProductsItem key={index} id={item.id} name={item.name} price={item.price} image={item.image}/>
                )
            })
        }
        </div>
    </div>
  )
}

export default RelatedProducts