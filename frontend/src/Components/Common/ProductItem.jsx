import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import {Link} from "react-router-dom"

const ProductItem = ({id,name,image,price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
      <div className='overflow-hidden'>
         <img src={image[0]} alt="" loading='lazy' className='hover:scale-110 transition-all ease-in-out' />
      </div>

      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency} {price}</p>
    </Link>
  )
}

export default ProductItem
