import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Orders from './Pages/Orders';
import PlaceOrder from './Pages/PlaceOrder';
import Product from './Pages/Product';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SearchBox from './Components/SearchBox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='bg-gradient-to-r from-blue-900 via-green-600 to-purple-400 text-white px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <ToastContainer />
      <Navbar />
      <SearchBox />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/placeorders' element={<PlaceOrder />} />
        <Route path='/product/:productId' element={<Product />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
