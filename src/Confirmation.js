import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FcApproval } from "react-icons/fc";
const Confirmation = () => {
  return (
    <div>
      <Navbar/>
      <h1 className="mt-12 text-center font-bold text-3xl">Updated</h1>
      <div className='text-center mt-32'>
  <FcApproval className='text-9xl mx-auto' />
</div>
      <Footer/>
    </div>
      )
    }
    
    export default Confirmation