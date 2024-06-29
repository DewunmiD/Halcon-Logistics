import React from 'react'
import { MdCancel } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Forgotten = () => {
const navigate = useNavigate()

const forgot = () => {
  alert("Email Sent!")
  navigate("/signin");
}
  return (
    <div className='h-screen w-full !px-0 !mx-0 !overflow-hidden'>
      <Link to="/signin">
     <div className='ml-[30px] mt-[20px]'> <MdCancel classname=""/></div></Link>
       
       <div className='ml-[150px] mt-[50px]'>
  <h1 className='sm:text-3xl  md:text-5xl font-bold'>Forgot password</h1>
</div>

       
       <form className="signin-form flex flex-col  px-8 py-12 space-y-12">


       <div className='relative flex items-center flex-grow mx-auto mt-[100px] '>
    
    < MdEmail className='absolute left-3' />

    <input type='text' placeholder='Email:' className='sm:w-80 md:w-96 h-12 border rounded pl-8 text-black' />
  </div>

      <button onClick={forgot} type="submit" className="signup-button mx-auto  bg-red-600 text-white font-bold text-lg rounded-full py-2 px-4 w-64 shadow-lg cursor-pointer hover:bg-black"> 
        Login
      </button>
      
      </form>

    </div>
  )
}

export default Forgotten