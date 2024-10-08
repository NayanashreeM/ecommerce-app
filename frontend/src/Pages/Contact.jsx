import React from 'react'
import Title from '../Components/Common/Title'
import { assets } from '../assets/assets'
import Newsletter from '../Components/Home/NewsLetter'

const Contact = () => {
  return (
    <div>
       <div className='text-center text-2xl pt-10 border-t'>
         <Title text1={'CONTACT'} text2={'US'}/>
       </div>
       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img src={assets.contact_img} loading='lazy' className='w-full md:max-w-[480px]' alt="" />
          <div className="flex flex-col justify-center items-start gap-6">
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'> 260 1st Cross Road<br/> Bengalure North, Karnataka, 560038</p>
            <p className='text-gray-500'>Tel: +91-1234567891 <br/> Email: foreverclothing@gmail.com</p>
            <b className='font-semibold text-xl text-gray-600'>CAREERS AT FOREVER</b>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>

            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>
       </div>

       <Newsletter/>
    </div>
  )
}

export default Contact
