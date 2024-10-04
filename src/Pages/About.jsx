import React from 'react'
import Title from '../Components/Title'
import assets2 from '../assets2/assets2.js'
import NewsLetterBox from '../Components/NewsLetterBox.jsx'


const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets2.wears1} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-white'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
          <b className='text-white'>Our Mission</b>
          <p>We promise to listen, to innovate, and to continuously improve, ensuring that every interaction with [Your Website Name] leaves you feeling confident, stylish, and satisfied.
          </p>
        </div>
      </div>

      <div className='text-2xl py-3'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-white'>We deliver exceptional customer service, building trust and loyalty with every interaction.
          <br /> Curate a diverse range of products that cater to individual tastes, preferences, and lifestyles.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Culture Inclusive and Innovative:</b>
          <p className='text-white'>We foster a culture of inclusivity, diversity, and sustainability in everything we do.
          <br />Innovate and adapt to the ever-changing landscape of fashion, ensuring you stay ahead of the curve. </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality:</b>
          <p className='text-white'>We make fashion conscious and affordable, without compromising on quality or style.
          </p>
        </div>
      </div>

      <NewsLetterBox />
      
    </div>
  )
}

export default About