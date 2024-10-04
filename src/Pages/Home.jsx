import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSller from '../Components/BestSller'
import Policy from '../Components/Policy'
import NewsLetterBox from '../Components/NewsLetterBox'

const Home = () => {
  return (
    <div className='text-white'>
      <Hero />
      <LatestCollection />
      <BestSller />
      <Policy />
      <NewsLetterBox />
    </div>
  )
}

export default Home