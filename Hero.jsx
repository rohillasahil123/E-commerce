import React from 'react'
import banner from '../../assets/3.avif'

const Hero = () => {
    return (
        <div>
            <div className='relative'>
                <img src={banner} alt=""
                    className='w-full object-cover object-center  '
                />
            </div>
            <div className='absolute top-[30%]  left-[5%] '>
                <h1 className='text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[red]'>
                    Discover Your Next Adventure !
                </h1>
                <p className=' text-[10px] lg:text-2xl mt-2  font-semibold'>
                    Shop Our Latest Arrival & unleash Your Style
                </p>

            </div>
           
            </div>
      
    )
}

export default Hero