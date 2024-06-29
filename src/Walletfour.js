import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileFooter from './MobileFooter'
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Walletfour = () => {
  const navigate = useNavigate();
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const handleConfirm = () => {
    navigate('/confirmation'); // Navigate to confirmation page
  };
  const handleApple = () => {
    window.open('https://apps.apple.com/us/app/apple-store/id375380948'); // Open Apple App Store
  };
  const handleGoogle = () => {
    window.open('https://play.google.com/store/apps/details?id=com.google.android.apps.playstore'); // Open Google Play Store
  };
  return (
    <div className='w-full !px-0 !mx-0 !overflow-hidden'>
      <Navbar/>
      <h1 className='text-4xl font-bold mt-12 ml-8'>Add account details</h1>
      
      <div className='text-3xl font-medium mt-12 ml-8'>Select Bank
      <div className="w-6/6 border-b-black border-b-2 mt-8 mr-8"></div>
        <input
          type="text"
          value={bankName}
          onChange={e => setBankName(e.target.value)}
          className='w-full border-none text-xl outline-none'
        />
      </div>

      <div className='text-3xl font-medium mt-12 ml-8'>Enter Account Number
      <div className="w-6/6 border-b-black border-b-2 mt-8 mr-8"></div>
        <input
          type="text"
          value={accountNumber}
          onChange={e => setAccountNumber(e.target.value)}
          className='w-full border-none text-xl outline-none'
        />
      </div>
      <p onClick={handleConfirm} className='text-2xl ml-12 mt-12 cursor-pointer'>Confirm Action</p>

      <div onClick={handleApple} className='bg-black w-6/6 ml-8 mr-8 mt-16 rounded-xl h-[200px] flex justify-start'>
        <div className='bg-white rounded-full w-28 h-28 flex justify-center items-center mt-12 ml-8'>
          <FaApple className='text-5xl'/>
        </div>
        <span className='text-white ml-4 sm:text-lg md:text-3xl mt-20'>Approve With Apple</span>
      </div>

      <div onClick={handleGoogle} className='bg-zinc-300 w-6/6 ml-8 mr-8 mt-12 rounded-xl h-[200px] flex justify-start'>
        <div className='bg-white rounded-full w-28 h-28 flex justify-center items-center mt-12 ml-8'>
          <FcGoogle className='text-5xl'/>
        </div>
        <span className='text-blue-400 ml-4 sm:text-lg md:text-3xl mt-20'>Approve With Google</span>
      </div>

      <Footer/>
      <MobileFooter/>
    </div>
  );
};

export default Walletfour;




// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar'
// import Footer from './Footer'
// import { FaApple } from "react-icons/fa6";
// import { FcGoogle } from "react-icons/fc";

// const Walletfour = () => {
//   const navigate = useNavigate();
//   const handleConfirm = () => {
//     navigate('/confirmation'); // Navigate to confirmation page
//   };
//   const handleApple = () => {
//     window.open('https://apps.apple.com/us/app/apple-store/id375380948'); // Open Apple App Store
//   };
//   const handleGoogle = () => {
//     window.open('https://play.google.com/store/apps/details?id=com.google.android.apps.playstore'); // Open Google Play Store
//   };
//   return (
//     <div>
//       <Navbar/>
//       <h1 className='text-4xl font-bold mt-12 ml-8'>Add account details</h1>
     
//       <div className='text-3xl font-medium mt-12 ml-8'>Select Bank
//         <div className="w-6/6 border-b-black border-b-2 mt-8 mr-8"></div>
//       </div>

//       <div className='text-3xl font-medium mt-12 ml-8'>Enter Account Number
//         <div className="w-6/6 border-b-black border-b-2 mt-8 mr-8"></div>
//       </div>
//       <p onClick={handleConfirm} className='text-2xl ml-12 mt-12 cursor-pointer'>Confirm Action</p>

//       <div onClick={handleApple} className='bg-black w-6/6 ml-12 mr-8 mt-16 rounded-xl h-[200px] flex justify-start'>
//         <div className='bg-white rounded-full w-28 h-28 flex justify-center items-center mt-12 ml-8'>
//           <FaApple className='text-5xl'/>
//         </div>
//         <span className='text-white ml-8 text-3xl mt-20'>Approve With Apple</span>
//       </div>

//       <div onClick={handleGoogle} className='bg-zinc-300 w-6/6 ml-8 mr-8 mt-12 rounded-xl h-[200px] flex justify-start'>
//         <div className='bg-white rounded-full w-28 h-28 flex justify-center items-center mt-12 ml-8'>
//           <FcGoogle className='text-5xl'/>
//         </div>
//         <span className='text-blue-400 ml-8 text-3xl mt-20'>Approve With Google</span>
//       </div>

//       <Footer/>
//     </div>
//   );
// };

// export default Walletfour;
