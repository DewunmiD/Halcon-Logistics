import React from 'react'
import { FiLinkedin } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import images from './images/Untitled-removebg-preview.png'
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className='mt-[200px]'>
      <div className="flex justify-center items-center gap-4 gap-x-8">
      <div className='rounded-full bg-red-600 w-[30px] h-[30px] ml-[5px] mt-[-100px]'></div>
      <div className='bg-gray-400 text-left w-[450px] h-[250px] ml-[50px] rounded-2xl'>
        <h5 className='ml-[20px] text-xl font-roboto mt-[20px]'>Join Our</h5>
        <h1 className='ml-[20px] text-2xl font-semibold mt-[20px]font-roboto'>Community</h1>
        <h5 className='ml-[20px] text-lg font-roboto mt-[10px]'>Connect with other halcon <br/>lovers here. </h5>
        <div className="container1 flex justify-start gap-8 text-2xl ml-[20px] mt-[10px]">
          <FiLinkedin onClick={() => window.open('https://www.linkedin.com/', '_blank')} />
          <FaTwitter onClick={() => window.open('https://twitter.com/', '_blank')} />
          <FaInstagram onClick={() => window.open('https://www.instagram.com/', '_blank')} />
          <FaFacebookF onClick={() => window.open('https://www.facebook.com/', '_blank')} />
        </div>
      </div>

      <div className='bg-gray-400 text-left w-[450px] h-[250px] rounded-2xl'>
        <h5 className='ml-[20px] text-xl font-roboto mt-[20px]'>Subscribe to our</h5>
        <h1 className='ml-[20px] text-2xl font-semibold mt-[20px]font-roboto'>newsletter</h1>
        <h5 className='ml-[20px] text-lg font-roboto mt-[10px]'>And stay up to date with what's new</h5>
        <input className='mt-[20px] ml-[20px] rounded-l-lg py-2 px-2' placeholder='your email'/>
        <button className="mt-[20px] rounded-r-lg px-2 py-2 ml-auto bg-red-600">Subscribe</button>
      </div>
      <div className='rounded-full bg-red-600 w-[30px] h-[30px] mr-[5px] mb-[-100px]'></div>
      </div>

     


      <div className="flex justify-center items-center gap-1">
  <div className="w-1/2 flex-shrink-0 "><img src={images} alt=''/>

    <div className='flex gap-5 ml-[20px] font-semibold'>
      <button 
        className='flex justify-start items-center gap-2 bg-red-200 mr-2 w-[150px] h-[70px] rounded-lg text-red-600'
        onClick={() => window.open('https://apps.apple.com/us/app/<app-name>/id<app-id>', '_blank')}
      >
        <FaApple className='text-xl text-red-600 ml-[20px]'/>Get it on<br/>App Store
      </button>

      <button 
        className='flex justify-start items-center gap-2 bg-red-200 w-[150px] h-[70px] rounded-lg text-red-600'
        onClick={() => window.open('https://play.google.com/store/apps/details?id=<package-name>', '_blank')}
      >
        <IoLogoGooglePlaystore className='text-red-600  ml-[20px] text-xl' />Get it on<br/>PlayStore
      </button>
    </div>
  </div>

  <div className="flex flex-shrink-0 translate-y-[30px] text-center translate-x-[20px] gap-6">
    <ul className='text-left'>
      <li><h5 className='font-bold text-2xl mb-12'>Company</h5></li>
      <li className="mb-6 text-xl"><a href="/About">About</a></li>
      <li className="mb-6 text-xl"><a href="/Complaint">Complaint</a></li>
      <li className="mb-6 text-xl"><a href="/Profile">Profile</a></li>
    </ul>

    <ul className='text-left'> 
      <li><h5 className='font-bold text-2xl mb-12'>Services</h5></li>
      <li className="mb-6 text-xl">Shipping</li>
      <li className="mb-6 text-xl">Tracking</li>
      <li className="mb-6 text-xl">Warehousing</li>
    </ul>

    <ul className='text-left'>
      <li><h5 className='font-bold text-2xl mb-12'>Get in Touch</h5></li>
      <li className="mb-6 text-xl flex items-center gap-2"><FaPhoneAlt/>: <span>+2348109883336</span></li>
      <li className="mb-6 text-xl flex items-center gap-2"><MdEmail/>:<span>halconlogistics@yahoo.com</span></li>
      <li className="mb-6 text-xl flex items-center gap-2"><FaLocationDot/>:<span>Lekki pennisula lagos state,Nigeria</span></li>
    </ul>

   
  </div>
</div>








                <div className='bg-black text-white flex justify-center items-center gap-2 mt-[40px]'><h2 className='flex'><span>Copyright</span> <FaRegCopyright className='mt-[5px]'/> <span>2024 All Rights Reserved</span></h2></div>
    </div>
  )
}

export default Footer