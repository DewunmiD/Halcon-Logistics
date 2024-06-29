import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileFooter from './MobileFooter'
import { IoMdSad } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Deleteaccount = () => {
  const navigate = useNavigate() 
  
  const Done  = () => {
    alert("Account deleted!")
    navigate("/");
  }
  return (
    <div className='w-full !px-0 !mx-0 !overflow-hidden'>
      <Navbar/>
      <h1 className='text-2xl font-medium mt-8 ml-8'>Account Deletion</h1>
      

      <p className='text-4xl font-bold mt-12 ml-8 flex'>
  We hate to see you go
  <IoMdSad className='text-4xl ml-2' />
</p>
     

      <div>
  <ul className='list-none ml-8 space-y-8 mt-12'>
    <li className='flex items-center'>
      <span className='bg-zinc-400 w-4 h-4 rounded-full mr-4'></span><h1 className='text-3xl' onClick={Done}>
      I have another halcon account
      </h1>
      
    </li>
    <li className='flex items-center'>
      <span className='bg-zinc-400 w-4 h-4 rounded-full mr-4'></span><h1 className='text-3xl' onClick={Done}>
      I have privacy reason</h1>
    </li>
    <li className='flex items-center'>
      <span className='bg-zinc-400 w-4 h-4 rounded-full mr-4'></span><h1 className='text-3xl' onClick={Done}>
      No more interested in halcon</h1>
    </li>
    <li className='flex items-center'>
      <span className='bg-zinc-400 w-4 h-4 rounded-full mr-4'></span><h1 className='text-3xl' onClick={Done}>
      Other</h1>
    </li>
  </ul>
</div>

      <Footer/>
      <MobileFooter/>
    </div>
      )
    }
    
    export default Deleteaccount