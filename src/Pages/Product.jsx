import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';


const Product = () => {

  const {productId} = useParams(); // Access each product from the productId
  // useing the product, each product can be displayed from the product database
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("") //when an image is clicked, its stored in this state
  const [size, setSize] = useState("")


  const fetchProductData = async()=>{
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        // console.log(item)
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  }, [productId, products])



  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) =>{
                return(
                  <img onClick={()=>setImage(item)} src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink cursor-pointer'/>
                )
              })
            }

          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="" className='w-full h-auto'/>
          </div>
        </div>

        {/* ***********PRODUCT INFORMATION ********** */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex'>
            <img src={assets.star} alt="" className="w-5" />
            <img src={assets.star} alt="" className="w-5" />
            <img src={assets.star} alt="" className="w-5" />
            <img src={assets.star} alt="" className="w-5" />
            <img src={assets.dullstar} alt="" className="w-5" />
            <p className='pl'>(100)</p>
          </div>
          <p className='mt-5 text-2xl font-semibold'>{currency} {productData.price}</p>
          <p className='text-sm mt-2 text-white md:w-4/5'>{productData.description}</p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-4'>
              {
                productData.sizes.map((item, index)=>{
                  return(
                    <button 
                    onClick={()=>setSize(item)}
                    className={`border py-1 px-4 bg-gray-700 ${item === size ? "bg-orange-300": ""}`} key={index}>

                      {item}
                      
                      </button>
                  )
                })
              }
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-6 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5 text-white h-[1px]' />
          <div className='text-sm text-white mt-5 flex flex-col gap-1'>
            <p>100% Original product</p>
            <p>Cash on delivery available on product</p>
            <p>Exchange policy return of 7 days</p>
          </div>
        </div>

      </div>

              {/* **************** DESCRIPTION & REVIEW******************** */}
        <div className='mt-20'>
          <div className='flex gap-2'>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm'>Reviews (150)</p>
          </div>

          <div className='flex flex-col gap-3 mt-5 border p-6 text-sm text-white'>
            <p>At TrendyShop, we believe shopping should be fun, easy, and affordable! Whether you're updating your wardrobe, redecorating your home, or looking for the perfect gift, we've got you covered. Explore our extensive collection of stylish apparel, chic accessories, high-quality home decor, and the latest tech gadgets all in one place.
            </p>
            <div>
              <h4>Why Choose TrendyShop?</h4>
              <ul className='flex flex-col gap-1'>
                <li>* Top Fashion Trends: Discover the latest in men's and women's fashion, from casual wear to formal attire.
                </li>
                <li>* Exclusive Deals: Enjoy amazing discounts and exclusive offers on thousands of products.
                </li>
                <li>* Fast & Secure Shipping: Get your orders delivered to your doorstep quickly and safely.
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* ****************** RELATED PRODUCTS ************* */}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} id={productData._id}/>
        
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product