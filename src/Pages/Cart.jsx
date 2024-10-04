import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../Components/CartTotal';

const Cart = () => {

  const {products, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  // useEffect hook that runs whenever 'cartItems' changes
  useEffect(() => {
    const tempData = [];  // Initialize an empty array to hold the cart data in a structured format
    for (const items in cartItems) { // Loop through each item in 'cartItems' (each item represents a product by its id)

        // Loop through each size/variant of the current item
        for (const item in cartItems[items]) {
            if (cartItems[items][item]) {// Check if there is a quantity for this size/variant (i.e., if it's in the cart)

                // If there is, push an object containing the item's ID, size, and quantity to the 'tempData' array
                tempData.push({
                    _id: items,              // ID of the product
                    size: item,              // Size/variant of the product
                    quantity: cartItems[items][item] // Quantity of the product for this size
                });
            }
        }
    }

  // Update the state variable 'cartData' with the new 'tempData' array
  setCartData(tempData);

}, [cartItems]);



  // const handleUpdateCart = (e) =>{
  //   e.target.value === "" || e.target.value === "0"? null : updateQuantity(item._id, item.size,Number(e.target.value));
  // }


  return (
    <div className='border-t pt-14 '>
        <div className='text-2xl mb-3'>
          <Title text1={"YOUR"} text2={"CART"} />
        </div>
        <div>
          {
            cartData.map((item, index) => {
                const productData = products.find((product)=> product._id === item._id);
                return(
                  <div key={index} className='py-4 border-t border-b text-white grid grid-cols[4fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                      <div className='flex items-start gap-6'>
                          <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                          <div >
                              <p>
                                {productData.name}
                              </p>
                              <div className='flex items-center gap-5 mt-2 font-semibold text-[1.1rem]'>
                                <p>{currency}{productData.price}</p>
                                <p className='px-2 sm:px-3 sm:py-1 border bg-gray-700'>{item.size}</p>
                              </div>
                          </div>
                      </div>
                      <input onChange={(e)=>e.target.value === "" || e.target.value === "0"? null : updateQuantity(item._id, item.size,Number(e.target.value))} className='border text-black max-w-10 text-center sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                      <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-6 mr-10 sm:w-5 cursor-pointer' src={assets.bin} alt="" /> 
                      {/* 0: This passes 0 as the third argument to the function, meaning the quantity of this product (of the specified size) will be updated to 0, essentially removing it from the cart. */}
                  </div>
                )
            })
          }
        </div>

        <div className='flex justify-end mt-10 mb-[70rem]'>
          <div className='w-full sm:w-[450px] border-2 rounded p-3'>
            <CartTotal />
            <div className='w-full text-end'>
              <button onClick={()=>navigate('/placeorders')} className='bg-black text-white text-sm my-8 px-8 py-2 rounded'>Make purchase</button>
            </div>
          </div>
        </div>  
    </div>
  )
}

export default Cart