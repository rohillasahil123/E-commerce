import React, { useEffect, useState } from 'react'
// import { CiSearch } from "react-icons/ci";

import axios from 'axios'
import all from '../../assets/gallery/ecom.avif'
import { Link } from 'react-router-dom'
import AllproductEffact from '../allProductseffact/AllproductEffact'



const Allproduct = ({ AddToCart }) => {
  const [full, setFull] = useState([])
  const [allcategorie, setAllcategorie] = useState([])
  const [orignal, setOrignal] = useState([])
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [selectproduct, setSelectproduct] = useState("")

  const [searchItem, setSearchItem] = useState('')



  // All Product

  useEffect(() => {
    const fullproduct = async () => {
      try {
        const res = await axios('https://dummyjson.com/products')
        setFull(res.data.products)
        setOrignal(res.data.products)
      } catch (error) {
        console.log(error)
      }
    }
    fullproduct()

  }, [])


  // All Product Catagory

  useEffect(() => {
    const getAllproducts = async () => {
      try {
        const res = await axios('https://dummyjson.com/products/categories')
        setAllcategorie(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllproducts()

  }, [])
  const filterproduct = (selectproduct) => {
    setSelectproduct(selectproduct)


    const data = full ? orignal.filter((filteritems) => filteritems.category === selectproduct)
      : orignal
    setFull(data)

  };

  // search product  by button

  const handelSearchItem = () => {
    const searchProduct = orignal.filter((searchFilterItem) => (
      searchFilterItem.title.toLowerCase().includes(searchItem.toLowerCase())
    ))
    setFull(searchProduct)
  }

  // Compaire price min and max

  const handelPrice = () => {
    const min = parseFloat(minPrice)
    const max = parseFloat(maxPrice)
    const filterPrice = orignal.filter((priceItem) => (
      (!min || priceItem.price >= min) && (!max || priceItem.price <= max)
    ))
    setFull(filterPrice)
  }



  return (
    <>


      <div className='relative'>
        <img src={all} alt=""
          className='object-cover w-full object-center h-[300px] mt-5 '
        />
        <div className='w-full h-[300px] bg-black absolute top-0 left-4 opacity-[.2]'> </div>
        <h2 className='absolute top-[10%] text-white font-semibold text-3xl md:text-5xl ml-[400px]'>All <span className='text-[red]'>Product</span></h2>
      </div>

      {/* //filter by category */}
      <div className='mt-5 bg-orange-100 h-[150px] mb-6 sm:w-[40]px md:w-[70%] md:mx-auto'>
  <div className='flex flex-wrap justify-center mb-2'>
    <select className='h-[30px]' onChange={(e) => filterproduct(e.target.value)}>
      <option>Filter By Category</option>
      {allcategorie.slice(0, 6).map((allproducts) => (
        <option key={allproducts} value={allproducts}>
          {allproducts}
        </option>
      ))}
    </select>
  </div>

  <div className='flex justify-center mb-3 md:mb-0'>
    <input
      type="text"
      placeholder='Search Item'
      className=' border-4 px-4 py-2'
      onChange={(e) => setSearchItem(e.target.value)}
      value={searchItem}
    />
    <button
      className='ml-4 border text-white bg-red-500 hover:bg-green-500 px-4 py-2'
      onClick={handelSearchItem}
    >
      Search Product
    </button>
  </div>

  <div className='flex justify-center mb-6'>
    <input
      type="number"
      placeholder='Min Price'
      className=' border-4 px-4 py-2'
      value={minPrice}
      onChange={(e) => setMinPrice(e.target.value)}
    />
    <span className='mx-2'>to</span>
    <input
      type="number"
      placeholder='Max Price'
      className=' border-4 px-4 py-2'
      value={maxPrice}
      onChange={(e) => setMaxPrice(e.target.value)}
    />
    <button
      className='ml-4 border text-white bg-red-500 hover:bg-green-500 px-4 py-2'
      onClick={handelPrice}
    >
      Filter Product
    </button>
  </div>
</div>

{/* All Product */}


{
  !full.length?(<AllproductEffact/>):(
          <div className='flex gap-5 flex-wrap justify-center'>
          {
            full.map((all) => (
              <div  className='border shadow-md w-[250px] rounded-2xl'  key={all.id}>
              <Link to={`/singleProduct/${all.id}`}>
                <img src={all.thumbnail} alt=""
                  className='object-cover h-[300px] w-full object-center block'
                />
                  </Link>
                <div className='mt-4 ml-[80px]'>
                  <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>Title:{all.title}</h3>
  
                  <h2 className='text-gray-900 title-font text-lg font-medium'>Rating:{all.rating}</h2>
                  <p className='mt-1'>Price:{all.price}Rs.</p>
                  <div  >
                    <button
                      className='bg-blue-700  h-[30px] w-[100px] rounded text-white mt-[8px]   mr-[12px] '
                      onClick={() => AddToCart(all)}
                    >Add Cart</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
  )
}



    </>
  )
}

export default Allproduct