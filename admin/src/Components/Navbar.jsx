import React from 'react'
import {assets} from '../assets/assets'
import { toast } from 'react-toastify';

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
        <img src={assets.logo} loading='lazy' className='w-[max(10%,80px)]' alt="" />
        <button onClick={()=>{setToken('');toast.success("Logged out")}} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar