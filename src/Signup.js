import React from 'react'
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
const navigate = useNavigate()

const createAccount = () => {
  alert("Account Created!");
  navigate("/Pageone");
}
  return (
    <div className='h-screen w-screen'>


<Link to="/signin">
  <MdCancel className='ml-[50px] mt-[40px]'/>
</Link>

<h2 className="text-4xl font-bold text-center  text-black mt-[30px]">Create Account</h2>
  
  <form className="signin-form flex flex-col space-y-6 px-8 py-12 rounded-md shadow-md">

  <div className='relative flex items-center flex-grow mx-auto'>
    
    < FaUser className='absolute left-3' />

    <input type='text' placeholder='First Name:' className='w-96 h-12 border rounded pl-8 text-black' />
  </div>

  <div className='relative flex items-center flex-grow mx-auto'>
    
    < FaUser className='absolute left-3' />

    <input type='text' placeholder='Last Name:' className='w-96 h-12 border rounded pl-8 text-black' />
  </div>

  <div className='relative flex items-center flex-grow mx-auto'>
    
    < MdEmail className='absolute left-3' />

    <input type='text' placeholder='Email:' className='w-96 h-12 border rounded pl-8 text-black' />
  </div>

  <div className='relative flex items-center flex-grow mx-auto'>
    
    < FaPhoneAlt className='absolute left-3' />

    <input type='text' placeholder='Phone Number:' className='w-96 h-12 border rounded pl-8 text-black' />
  </div>

  <div className='relative flex items-center flex-grow mx-auto'>
    
    < MdPassword className='absolute left-3' />

    <input type='text' placeholder='Password:' className='w-96 h-12 border rounded pl-8 text-black' />
  </div>

  <div className='relative flex items-center flex-grow mx-auto'>
    
    < MdPassword className='absolute left-3' />

    <input type='text' placeholder='Confirm Password:' className='w-96 h-12 border rounded pl-8 text-black' />
  </div>
  

      <button onClick={createAccount} type="submit" className="signup-button  bg-red-600 text-white font-bold text-lg rounded-full py-2 px-4 w-2/6 shadow-lg cursor-pointer mx-auto hover:bg-black"> 
        Create Account
      </button>

      <p className="text-center text-sm text-black">
        Already have an account? <a href="/Signin" className="text-indigo-500 hover:text-indigo-600">Log in</a>
      </p>
    </form>
    </div>
  )
}

export default Signup