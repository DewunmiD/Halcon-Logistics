import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Addrider = () => {
  return (
    <div>
      <Navbar/>

         <div className='text-4xl font-bold mt-4 ml-8'>Add A Rider</div>
      <h1 className='text-2xl font-medium mt-2 ml-8'>you can add more than a rider at a time</h1>
      

      
     <div className='text-3xl font-medium mt-16 ml-8'>Driver's email
    <div className="w-6/6 border-b-black border-b-2 mt-8 mr-8"></div>
     </div>
     

      
    <div className='flex justify-center items-center mt-40'><button className='text-black bg-red-600 font-bold py-4 px-12 rounded-xl text-2xl hover:bg-blue-600'>Send invite</button></div>
      <Footer/>
    </div>
      )
    }
    
    export default Addrider