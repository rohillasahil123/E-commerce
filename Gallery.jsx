import React from 'react'
import g1 from '../../assets/gallery/1.avif'
import g2 from '../../assets/gallery/2.webp'
import g3 from '../../assets/gallery/3.avif'
import g4 from '../../assets/gallery/7.jpg'
import g5 from '../../assets/gallery/5.webp'
import g6 from '../../assets/gallery/8.jpg'


const Gallery = () => {
  return (
    <div>
        <div className='mt-10 text-center border '>
            <h2 className='text-5xl font-semibold  text-black'>Gall<span className='text-red-600'>ery</span></h2>
            </div>    

<section class="text-gray-600 body-font">
  <div class="container px-5 py-20 mx-auto flex flex-wrap">
   
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-y-3 transition-duration-500">
        <div class="md:p-2 p-1 w-1/2">
          <img 
          alt="gallery" 
          class="w-full object-cover h-full object-center block" 
          src={g1}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={g2}/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={g3}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2 hover:scale-75 hover:translate-x-4 hover:skew-x-3 transition-duration-500">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={g4}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={g5}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={g6}/>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default Gallery