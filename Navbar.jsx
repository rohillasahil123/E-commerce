import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { auth } from '../../FirebaseAuth/FirebaseAuth';
import toast from 'react-hot-toast';

const Navbar = ({ cart, userName }) => {
  const [isOpen, setIsOpen] = useState(false)

  const Change = () => {
    setIsOpen(true)
  }
  const cross = () => {
    setIsOpen(false)
  }

  const handelLogout = ()=>{
  
auth.signOut().then(() => {
 toast.success('Logout successfully')
}).catch((error) => {
  toast.error(error)
});
  }


  return (
    <>
      <div>
        <header className='bg-white border-b border-gray-200 fixed top-0 z-10 w-full'>
          <div className='container mx-auto ml-6  flex justify-between p-4 item-center'>
            <div><Link to='/'>
              <h3 className='font-bold text-2xl'>
                Friends <span className='text-[red]'>Shop</span>
              </h3>
            </Link>
            </div>
            <div className='hidden md:block'>
              <ul className='flex item-center text-lg jestify-center font-semibold'>
                <Link to='/'><li className='mr-5 hover:text-gray-900 cursor-pointer'>Home</li></Link>
                <Link to='/allproducts'><li className='mr-5 hover:text-gray-900 cursor-pointer'>All Product</li></Link>
                <Link to='/about'>    <li className='mr-5 hover:text-gray-900 cursor-pointer'> About</li> </Link>
                <Link to='/contact' ><li className='mr-5 hover:text-gray-900 cursor-pointer'>Contact</li>      </Link>
              </ul>
            </div>
            {
              isOpen ?
                <div>
                  <ul className='flex flex-col gap-10  item-center top-[68px] z-10 left-0 h-screen w-full items-center text-white bg-[orange] absolute text-2xl jestify-center font-semibold'>
                    <Link to='/'onClick={cross}>
                      <li className='mt-5 hover:text-gray-900 cursor-pointer'>
                        Home
                      </li>
                    </Link>
                    <Link to='/allproducts' onClick={cross}>
                    <li className='mt-5 hover:text-gray-900 cursor-pointer'>
                      All Product
                    </li>
                    </Link>
                    <Link to='/about'onClick={cross}>
                      <li className='mt-5 hover:text-gray-900 cursor-pointer'>
                        About</li>
                    </Link>
                    <Link to='/contact'onClick={cross}>
                      <li className='mt-5 hover:text-gray-900 cursor-pointer'>
                        Contact</li>
                    </Link>
                  </ul>
                  <button className='absolute top-[75px] z-10 right-0  text-white cursor-pointer'>
                    <RxCross2 size={30}
                      onClick={cross} />
                  </button>
                </div> : ''
            }
            <div className='flex justify-center items-center gap-4 mr-7'>
              {
                userName?(<> <Link to='/login'>
                <button className=' inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold'
                onClick={handelLogout} >
                  Logout
                </button>
              </Link>
              <span>{userName}</span> </>):( <> <Link to='/login'>
              <button className=' inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold' >
                Login
              </button>
            </Link>
            <span>{userName}</span> </>)
              }
             
              <Link to='/cart'>
                <button className='curser-pointer relative hover:bg-gray-200  '>
                  <span className='absolute top-[-5px] right-1 bg-[red] text-white px-1 rounded-full text-xs' >{cart.length}</span>
                  <FaCartPlus size={30} />
                </button>
              </Link>
              {isOpen ?("")
              : (
                <button className=' md:hidden'><GiHamburgerMenu size={26} onClick={Change} /></button>
              )

              }
             
            </div>
          </div>
        </header>
      </div>

    </>
  )
}

export default Navbar