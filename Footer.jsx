import React from 'react'
import { FaInstagram ,FaFacebook,FaTwitter,FaWhatsapp    } from "react-icons/fa6";



const Footer = () => {
  return (
    <div>
      <footer className='bg-black text-white'>
        <div className='container  px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col' >
          <div className='w-64 md:mx-0 mx-auto text-center md:text-left'>
            <h3 className='font-bold text-2xl'>
              Friends <span className='text-[red]' >Shop</span>
            </h3>
          </div>
          <div className='flex-grow  flex flex-wrap  md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center' >
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
              MENU</h2>
            <ul className='list-none mb-10'>
              <li>Feature</li>
              <li className='mt-1'>Info Center</li>
              <li className='mt-1'>News Blog</li>
              <li className='mt-1'  > Login</li>
            </ul>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
              COMPANY</h2>
            <ul className='list-none mb-10'>
              <li>About Us</li>
              <li className='mt-1'>Privacy Policy</li>
              <li className='mt-1'>Term & condition</li>
              <li className='mt-1'  > Login</li>
            </ul>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
              CONTACT</h2>
            <ul className='list-none mb-10'>
              <li>Contact sales</li>
              <li className='mt-1'>+9991462406</li>
              <li className='mt-1'>News Blog</li>
              <li className='mt-1'> +8278017957 </li>
            </ul>
          </div>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
            TECH SUPPORT</h2>
            <ul className='list-none mb-10'>
              <li></li>
              <li className='mt-1'>contact support</li>
              <li className='mt-1'>info Center</li>
              <li className='mt-1'> Activity </li>
            </ul>
          </div>
          </div>
          </div>
        <div className='bg-orange-500 text-white'>
          <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-sm text-center sm:text-left'>
            ©2024 Friendshop - <span>@copyright</span>
            </p>
            <p className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start  '>
            <FaInstagram size={25} className='mr-3 '/>
            <FaFacebook size={25}  className='mr-3'/>
            <FaTwitter size={25} className='mr-3'/>
            <FaWhatsapp size={25} className='mr-3'/>
              </p>
            </div>
         
        </div>
      </footer>
    </div>
  )
}

export default Footer