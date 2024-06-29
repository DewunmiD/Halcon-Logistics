// import React from 'react';
// import { FiLinkedin } from "react-icons/fi";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa6";
// import images from './images/Untitled-removebg-preview.png'
// import { FaApple } from "react-icons/fa";
// import { IoLogoGooglePlaystore } from "react-icons/io5";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaRegCopyright } from "react-icons/fa";

// function Footer() {
//   return (
//     <div className='mt-[100px] text-sm lg:text-lg'>
//       <div className="flex justify-center items-center gap-2">
//         <div className='bg-gray-400 text-left w-[300px] h-[200px] ml-[20px] rounded-2xl'>
//           <h5 className='ml-[10px] mt-[10px]'>Join Our</h5>
//           <h1 className='ml-[10px] font-semibold mt-[10px]'>Community</h1>
//           <h5 className='ml-[10px] mt-[10px]'>Connect with other halcon lovers here.</h5>
//           <div className="container1 flex justify-start gap-4 ml-[10px] mt-[10px]">
//             <FiLinkedin onClick={() => window.open('https://www.linkedin.com/', '_blank')} />
//             <FaTwitter onClick={() => window.open('https://twitter.com/', '_blank')} />
//             <FaInstagram onClick={() => window.open('https://www.instagram.com/', '_blank')} />
//             <FaFacebookF onClick={() => window.open('https://www.facebook.com/', '_blank')} />
//           </div>
//         </div>

//         <div className='bg-gray-400 text-left w-[300px] h-[200px] rounded-2xl'>
//           <h5 className='ml-[10px] mt-[10px]'>Subscribe to our</h5>
//           <h1 className='ml-[10px] font-semibold mt-[10px]'>newsletter</h1>
//           <h5 className='ml-[10px] mt-[10px]'>And stay up to date with what's new</h5>
//           <input className='mt-[10px] ml-[10px] rounded-l-lg py-1 px-1' placeholder='your email'/>
//           <button className="mt-[10px] rounded-r-lg px-1 py-1 ml-auto bg-red-600">Subscribe</button>
//         </div>
//       </div>

//       <div className="flex justify-center items-center gap-1">
//         <div className="w-1/2 flex-shrink-0 "><img src={images} alt=''/>

//           <div className='flex gap-3 ml-[10px] font-semibold'>
//             <button 
//               className='flex justify-start items-center gap-1 bg-red-200 mr-1 w-[100px] h-[50px] rounded-lg text-red-600'
//               onClick={() => window.open('https://apps.apple.com/us/app/<app-name>/id<app-id>', '_blank')}
//             >
//               <FaApple className='text-lg text-red-600 ml-[10px]'/>Get it on<br/>App Store
//             </button>

//             <button 
//               className='flex justify-start items-center gap-1 bg-red-200 w-[100px] h-[50px] rounded-lg text-red-600'
//               onClick={() => window.open('https://play.google.com/store/apps/details?id=<package-name>', '_blank')}
//             >
//               <IoLogoGooglePlaystore className='text-red-600