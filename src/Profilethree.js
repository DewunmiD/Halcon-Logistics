import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaCamera } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
const Profilethree = () => {
  return (
    <div>
      <Navbar/>
      <h1 className="mt-8 text-center font-bold text-4xl">Snap or Select New Picture</h1>
      
      <div className='flex justify-center text-9xl mt-28'>
  <FaCamera className='mr-28' />
  <GrGallery />
</div>
      <Footer/>
    </div>
      )
    }
    
    export default Profilethree