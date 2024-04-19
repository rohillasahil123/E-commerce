import React from 'react'
const AllproductEffact = () => {
    const arrayData = new Array(25).fill("")
    console.log(arrayData)
  return (
    <div>
        <section className='text-gray-600 body-font'>
        <div className='container px-5 py-20 mx-auto '>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
            arrayData.map((element , i) =>(
      <div className='flex gap-5 flex-wrap justify-center '>
                <div  className='border shadow-md w-[250px]  rounded-2xl'>
                <div className='w-full h-[350px] bg-[#ccc]'></div>
              
                  <div className='mt-4 ml-[80px]'>
                    <h3 className='text-gray-500 h-[20px] w-[120px] bg-[#ccc] text-xs tracking-widest title-font mb-1'>
                    
                     </h3>
    
                    <h2 className='text-gray-900 h-[20px] block w-[30px] bg-[#ccc] title-font text-lg font-medium'>
                         </h2>
                    <p className='mt-1 h-[20px] w-[60px] bg-[#ccc]' ></p>
                    <div  >
                      <button
                        className='bg-[#ccc]  h-[30px] w-[100px] rounded text-white mt-[8px]   mr-[12px] '
                      ></button>
                    </div>
                  </div>
                </div>
                </div>
    
            ))
        }
      </div>
      </div>      
      </section>
    </div>
  )
}

export default AllproductEffact
