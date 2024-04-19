import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';


const Populer = ({ AddToCart }) => {
    const [populerproduct, setPoopulerproduct] = useState([])


    useEffect(() => {
        const PopulerProductfetch = async () => {
            try {
                const res = await axios('https://dummyjson.com/carts/10');
                setPoopulerproduct(res.data.products)
                console.log(populerproduct)
            } catch (error) {
                toast.error(error)
            }
        };

        PopulerProductfetch()
    }, [])

    return (
        <>
            <div className='mt-10 text-center border '>
                <h2 className='text-5xl font-semibold  text-black'>Populer <span className='text-red-600'>Product</span></h2>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-16 mx-auto border " >

                    <div className="flex flex-wrap -m-4">
                        {
                            populerproduct.filter((item, index) => index !== 0)
                                .map((populeritems) => (
                                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={populeritems.id}>
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={populeritems.thumbnail
                                            } />
                                        </a>
                                        <div className="mt-4">
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{populeritems.title}</h2>
                                            <p className="mt-1">Price : {populeritems.price} ₹  </p>
                                            <button className=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                                                onClick={() => AddToCart(populeritems)}
                                            >
                                                Add to Cart</button>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Populer
