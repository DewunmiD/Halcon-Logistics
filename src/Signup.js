import React from 'react';
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const createAccount = () => {
    const firstNameInput = document.querySelector('input[placeholder="First Name:"]');
    const lastNameInput = document.querySelector('input[placeholder="Last Name:"]');
    const emailInput = document.querySelector('input[placeholder="Email:"]');
    const phoneInput = document.querySelector('input[placeholder="Phone Number:"]');
    const passwordInput = document.querySelector('input[placeholder="Password:"]');
    const confirmPasswordInput = document.querySelector('input[placeholder="Confirm Password:"]');

    if (
      !firstNameInput.value.trim() ||
      !lastNameInput.value.trim() ||
      !emailInput.value.trim() ||
      !phoneInput.value.trim() ||
      !passwordInput.value.trim() ||
      !confirmPasswordInput.value.trim()
    ) {
      alert("Please fill in all fields!");
      return;
    }

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Account Created!");
    navigate("/Pageone");
  }

  return (
    <div className='w-full !px-0 !mx-0 !overflow-hidden'>
      <Link to="/signin">
        <MdCancel className='ml-[50px] mt-[40px]'/>
      </Link>
      <h2 className="text-4xl font-bold text-center  text-black mt-[30px]">Create Account</h2>
      <form className="signin-form flex flex-col space-y-6 px-8 py-12 rounded-md shadow-md">
        <div className='relative flex items-center flex-grow mx-auto'>
          <FaUser className='absolute left-3' />
          <input type='text' placeholder='First Name:' className='sm:w-80 md:w-96 h-12 border rounded pl-8 text-black' required/>
        </div>
        <div className='relative flex items-center flex-grow mx-auto'>
          <FaUser className='absolute left-3' />
          <input type='text' placeholder='Last Name:' className='sm:w-80 md:w-96 h-12 border rounded pl-8 text-black' required/>
        </div>
        <div className='relative flex items-center flex-grow mx-auto'>
          <MdEmail className='absolute left-3' />
          <input type='email' placeholder='Email:' className='sm:w-80 md:w-96 h-12 border rounded pl-8 text-black' required/>
        </div>
        <div className='relative flex items-center flex-grow mx-auto'>
          <FaPhoneAlt className='absolute left-3' />
          <input type='tel' placeholder='Phone Number:' className='sm:w-80 md:w-96 h-12 border rounded pl-8 text-black' required/>
        </div>
        <div className='relative flex items-center flex-grow mx-auto'>
          <MdPassword className='absolute left-3' />
          <input type='password' placeholder='Password:' className='sm:w-80 md:w-96 h-12 border rounded pl-8 text-black' required/>
        </div>
        <div className='relative flex items-center flex-grow mx-auto'>
          <MdPassword className='absolute left-3' />
          <input type='password' placeholder='Confirm Password:' className='sm:w-80 md:w-96 h-12 border rounded pl-8 text-black' required/>
        </div>
        <button onClick={createAccount} type="submit" className="signup-button  bg-red-600 text-white font-bold sm:text-sm md:text-lg rounded-full py-2 px-4 w-2/6 shadow-lg cursor-pointer mx-auto hover:bg-black"> 
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