import React from 'react'
import photoabout from '../../assets/gallery/about3img.avif'
import photoabouthero from '../../assets/gallery/aboutheroimg.avif'

const About = () => {
  return (
    <>
      <div>
        <div className='relative'>
          <img
            src={photoabout}
            alt=""
            className='object-cover w-full object-center h-[300px] mt-5' />
          <div className='w-full h-[300px] bg-black absolute top-0 left-0 opacity-[.4]'></div>
          {/* <h1 className=' absolu top-[40%] left-[10%] text-white font-bold text-5xl'>
          About
        </h1> */}
        </div>

        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src={photoabouthero} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                {/* <br className="hidden lg:inline-block">readymade gluten</br> */}
              </h1>
              <p className="mb-8 leading-relaxed">About Image
                The FrendsShop Group is one of India’s leading digital commerce entities and includes group companies FriendsShop,
                Myntra, FriendsShop Wholesale, FriendsShop Health+, and Cleartrip.
                Started in 2007, FriendsShop has enabled millions
                of sellers, merchants, and small businesses to participate
                in India's digital commerce revolution. With a registered customer
                base of more than 500 million, FriendsShop's marketplace offers over
                150 million products across 80+ categories. Today, there are over
                14 lakh sellers on the platform, including Shopsy sellers. With a
                focus on empowering and delighting every Indian by delivering value
                through technology and innovation, FriendsShop has created lakhs of jobs
                in the ecosystem while empowering generations of entrepreneurs and MSMEs. FriendsShop is known for pioneering services such as Cash on Delivery, No Cost EMI and easy returns, which are customer-centric innovations that have made online shopping more accessible and affordable for millions of Indians. In 2024</p>
          
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
About