import React from 'react'
import { Link } from 'react-router-dom'


const EmptyCart = () => {
  return (
    <>
    <div className='w-[90%] bg-[#ebe9e9] h-[90vh] mt-[80px] container mx-auto px-4 py-4 rounded-md shadow-lg flex justify-center items-center'>
    <div className='flex items-center flex-col'>
      <img src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' 
      alt=""
       className='w-[300px] rounded-3xl' />
       <h2 className='text-center text-2xl font-semibold mt-3'>
        Your Cart is empty </h2>
        <Link to='/'>
        <button className=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none mt-3 hover:bg-indigo-600 rounded"
        onClick={() => AddToCart(populeritems)}>
        back to Home</button>
        </Link>
    </div>
    </div>
    </>
  )
}

export default EmptyCart
