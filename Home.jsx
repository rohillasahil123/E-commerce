import React from 'react'
import Hero from '../../components/Herosec/Hero'
import Service from '../../components/service/Service'
import Gallery from '../../components/Gallery/Gallery'
import Populer from '../../components/PopulerProduct/Populer'
import Testimonial from '../../components/Testimonial/Testimonial'



const Home = ({AddToCart}) => {
  return (
    <div>
    <Hero/>
    <Service/>
    <Populer  AddToCart={AddToCart}  />
    <Gallery/>
    <Testimonial/>

    </div>
  )
}

export default Home