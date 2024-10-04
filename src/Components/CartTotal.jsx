import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const { currency, deliveryFee, getTotalAmount} = useContext(ShopContext);


  return (
    <div className='w-full' >
        <div className='text-2xl'>
            <Title text1={"TOTAL"} text2={"QUANTITY"} />
        </div>

        <div className='flex flex-col gap-2 mt-2'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {getTotalAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping fee</p>
                <p>{currency} {deliveryFee}</p>
            </div>

            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency}{getTotalAmount() === 0 ? 0 : getTotalAmount() + deliveryFee}.00</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal