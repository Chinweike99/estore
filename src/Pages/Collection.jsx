import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import ProductsItem from '../Components/ProductsItem';

const Collection = () => {
  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant")

  const handleCategory = (e) => {
    // Check if the selected category (e.target.value) is already in the 'category' array
    if (category.includes(e.target.value)) {
      // If it is, remove the category from the array (unselect the category)
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      // If it's not in the array, add the selected category to the array (select the category)
      setCategory(prev => [...prev, e.target.value]);
    }
  }
  
  // Function to handle subcategory selection (works the same way as 'handleCategory')
  const handleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }


  const applyFilter = () =>{
    let productsCopy = products.slice();

    // If showSearch is true, and there is a search input
    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy);
  }

  // Function to sort products by price..
  const sortProduct = () =>{
    let fpCopy = filterProducts.slice();

    switch (sortType){
      case "low-high":
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      
        case "high-low":
          setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
          break;
        default:
          applyFilter();
          break;
    }
  }


  const handleFilters = () => {
    setShowFilter(!showFilter);
  }

  useEffect(()=>{
    setFilterProducts(products);
  }, [])

  useEffect(()=>{
    applyFilter();
  },[category, subCategory, search, showSearch])

  useEffect(()=>{
    sortProduct();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 '>
        {/* FILTER OPTIONS */}
        <div className='min-w-60'>
              <p onClick={handleFilters} className='sticky top-[6rem] text-xl my-2 flex items-center gap-2 cursor-pointer'>
                FILTERS
                <img className={`w-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} src={assets.drop} alt="" />
              </p>

              {/* Category  */}
              <div className={`border sticky top-[10rem] border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
                <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                <div className='flex flex-col gap-2 text-sm font-light'>
                  <p className='flex gap-2 text-center'>
                    <input type="checkbox" value={"Men"} onChange={handleCategory} /> Men
                  </p>
                  <p className='flex gap-2 text-center'>
                    <input type="checkbox" value={"Women"} onChange={handleCategory}/> Women
                  </p>
                  <p className='flex gap-2 text-center'>
                    <input type="checkbox" value={"Boys"} onChange={handleCategory}/>Boys
                  </p>
                  <p className='flex gap-2 text-center'>
                    <input type="checkbox" value={"Girls"} onChange={handleCategory}/> Girls
                  </p>
                </div>
              </div>


              {/* SUBCATEGORY FILTERS */}
              <div className={`sticky top-[21rem] border border-gray-300 pl-5 py-3 my-4 ${showFilter ? "" : "hidden"} sm:block`}>
                <p className='mb-3 text-sm font-medium'>TYPE</p>
                <div className='flex flex-col gap-2 text-sm font-light'>
                  <p className='flex gap-2 text-center'>
                    <input type="checkbox" value={"Topwear"} onChange={handleSubCategory}/> Topwear
                  </p>
                  <p className='flex gap-2 text-center'>
                    <input type="checkbox" value={"Full wear"} onChange={handleSubCategory}/>Full-wear
                  </p>
                </div>
              </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='flex-1'>
            <div className='flex justify-between text-base sm:text-2xl mb-4'>
              <Title text1={"ALL"} text2={"COLLECTIONS"}/>

              <select onChange={(e)=>setSortType(e.target.value)} className='border-2 text-sm px-2 border-gray-300'>
                <option value="relevant">sort by: Relevant</option>
                <option  value="low-high">sort by: Low to high</option>
                <option value="high-low">sort by: High to low</option>
              </select>
            </div>
            
          {/* Map Products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                {
                  filterProducts.map((item, index )=>{
                    return(
                      <ProductsItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    )
                  })
                }
          </div>

        </div>
    </div>
  )
}

export default Collection