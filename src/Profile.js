import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import MobileFooter from './MobileFooter'
import { FaCamera } from "react-icons/fa6";
import { IoCardOutline } from "react-icons/io5";
import { BsBank } from "react-icons/bs";
import { FaRegShareSquare } from "react-icons/fa";
import { SiFalcon } from "react-icons/si";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { FaSignOutAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate() 
  const [notificationOn, setNotificationOn] = useState(false);

  const Uploadtwo = () => {
    navigate("/Profiletwo");
  };

  const Uploadthree = () => {
    navigate("/Walletthree");
  };


  const Uploadfour = () => {
    navigate("/Walletfour");
  };

  const Abou = () => {
    navigate("/About");
  };


  const Complaintone = () => {
    navigate("/Complaint");
  };

  const Logout = () => {
    navigate("/Signin");
  };

  const Notifica = () => {
    if (notificationOn) {
      alert("Notification OFF");
      setNotificationOn(false);
    } else {
      alert("Notification ON");
      setNotificationOn(true);
    }
  };

  const Del = () => {
    navigate("/Deleteaccount");
  };
  return (
    <div className='w-full !px-0 !mx-0 !overflow-hidden'>
      <Navbar/>

<div onClick={Uploadtwo} className="flex justify-center items-center bg-red-500 rounded-full w-48 h-48 p-4 mx-auto mt-24 md:w-64 md:h-64">
  <FaCamera className="text-white text-6xl md:text-8xl"/>
</div>

<div className='mt-40 text-xl md:text-4xl'>
  <div className="flex justify-between items-center mb-8">
    <div className="flex items-center"><IoCardOutline className='ml-8 md:ml-8'/><span className='ml-6 md:ml-8'>Update Card Info</span>
    </div><FaAngleRight onClick={Uploadthree} className='ml-auto mr-8 md:mr-8'/>
  </div>

  <div className="flex justify-between items-center mb-8">
    <div className="flex items-center"><BsBank className='ml-8 md:ml-8'/><span className='ml-6 md:ml-8'>Update Bank Details</span>
    </div><FaAngleRight onClick={Uploadfour} className='ml-auto mr-8 md:mr-8'/></div>


  <div className='flex justify-center items-center mb-8'>  
    <div className="flex items-center"><FaRegShareSquare className='ml-8 md:ml-8'/><span className='ml-6 md:ml-8'>Share Halcon</span>
    </div><FaAngleRight  className='ml-auto mr-8 md:mr-8'/></div>

  <div className='flex justify-center items-center mb-8'>  
    <div className="flex items-center"><SiFalcon className='ml-8 text-red-600 md:ml-6'/><span className='ml-6 md:ml-8'>About Halcon</span>
    </div><FaAngleRight onClick={Abou} className='ml-auto mr-8 md:mr-8 text-red-600'/></div>

  <div className='flex justify-center items-center mb-8'>  
    <div className="flex items-center"><IoMdNotificationsOutline className='ml-8 md:ml-8'/><span className='ml-6 md:ml-8'>Notification</span>
    </div><FaAngleRight onClick={Notifica} className='ml-auto mr-8 md:mr-8'/></div>

  <div className='flex justify-center items-center mb-8'>  
    <div className="flex items-center"><TiMessages className='ml-8 md:ml-8'/><span className='ml-6 md:ml-8'>Complaint</span>
    </div><FaAngleRight onClick={Complaintone} className='ml-auto mr-8 md:mr-8'/></div>

  <div className='flex justify-center items-center text-red-600 mb-8'>
    <div className="flex items-center"><FaSignOutAlt className='ml-8 md:ml-8'/><span className='ml-6 md:ml-8'>Sign Out</span>
    </div><FaAngleRight onClick={Logout} className='ml-auto mr-8'/></div>

    {/* // <div className='flex justify-center items-center text-red-600 mb-8'>
    // <div className="flex items-center"><FaSignOutAlt className='ml-8'/><span className='ml-8'>Sign Out</span>
    // </div><FaAngleRight onClick={Logout} className='ml-auto mr-8'/></div> */}

    <div className='flex justify-center items-center text-red-600 mb-8'>  
    <div className="flex items-center"><MdDeleteForever className='ml-8 md:ml-8'/><span className='ml-6 md:ml-8'>Delete My Account</span>
    </div><FaAngleRight onClick={Del} className='ml-auto mr-8'/></div>
    </div>
    <Footer/>
    <MobileFooter/>
    </div>
  )
}

export default Profile