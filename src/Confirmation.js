import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileFooter from './MobileFooter'
import { FcApproval } from "react-icons/fc";
const Confirmation = () => {
  return (
    <div className='w-full !px-0 !mx-0 !overflow-hidden'>
      <Navbar/>
      <h1 className="mt-12 text-center font-bold text-3xl">Updated</h1>
      <div className='text-center mt-32'>
  <FcApproval className='text-9xl mx-auto' />
</div>
      <Footer/>
      <MobileFooter/>
    </div>
      )
    }
    
    export default Confirmation