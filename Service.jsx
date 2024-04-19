import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { SiAuth0 } from "react-icons/si";
import { TbTruckReturn } from "react-icons/tb";



const Service = () => {
  return (
    <>
    <div className='container mx-auto px-5 flex pt-20 gap-10 items-center justify-center flex-wrap'>
        <div className='bg-red-500 py-3 rounded text-white flex gap-2 flex-col items-center w-[200px] hover:scale-110 transition-duration cursor-pointer'>
        <MdLocalShipping size={30} />
            <p>FREE SHIPPING</p>
        </div>
      
        <div className='bg-red-500 py-3 rounded text-white flex gap-2 flex-col items-center w-[200px] hover:scale-110 transition-duration-500  cursor-pointer '>
        <SiAuth0 size={30} />
            <p>AUTHENTIC PRODUCTS</p>
        </div>

        <div className='bg-red-500 py-3 rounded text-white flex gap-2 flex-col items-center w-[200px] hover:scale-110 transition-duration-500 cursor-pointer '>
        <TbTruckReturn size={30} />
            <p>EASY RETRUN</p>
        </div>

        <div className='bg-red-500 py-3 rounded text-white flex gap-2 flex-col items-center w-[200px] hover:scale-110 transition-duration-500 cursor-pointer '>
        <MdOutlinePayment size={30} />
            <p>SECURE PAYMENT</p>
        </div>


    </div>
    </>
  )
}

export default Service
