import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import images from './images/Untitled-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
const navigate = useNavigate() 
const Login = () => {
  alert("Welcome Back!")
  navigate("/Home");
}
  return (
    <div className='w-full !px-0 !mx-0 !overflow-hidden'>
    <form className="signin-form flex flex-col space-y-6 px-8 py-12">
      <h2 className="text-4xl font-bold text-left mb-4 text-black">Signin</h2>

      <img
          src={images}
          alt="Signin Banner"
          className="signin-image mx-auto"
          style={{ width: '250px', height: '150px', objectFit: 'cover' }}/>

<div className='relative flex items-center flex-grow mx-auto'>
    
    < MdEmail className='absolute left-3' />

   
    <input type='text' placeholder='Email:' className='sm:w-80 h-12 border rounded pl-8 text-black md:w-96' />
  </div>

  <div className='relative flex items-center flex-grow mx-auto'>
  
    < MdLock className='absolute left-3' />

    <input type='text' placeholder='Password:' className='sm:w-80 h-12 border rounded pl-8 text-black md:w-96' />
  </div>


  <a href="/Forgotten" className="text-red-600 text-sm cursor-pointer hover:text-indigo-600 text-center sm:text-center sm:block mr-12 md:block ml-[280px]">forgot password</a>
      
      <button onClick={Login} type="submit" className="signup-button bg-red-600 text-white font-bold text-lg rounded-full py-2 px-4 w-2/6 shadow-lg mx-auto cursor-pointer hover:bg-black"> 
        Login
      </button>

      <p className="text-center text-sm text-black">
  Not Registered? <a href="/signup" className="text-red-600 mx-auto cursor-pointer hover:text-indigo-600">Click here</a>
</p>

     
    </form>
    </div>
  
  )
}

export default Signin


