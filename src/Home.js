import React from 'react'
import Navbar from './Navbar'
import { GrDeliver } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import images from './images/istockphoto-817101512-612x612 1(1).svg'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  const Movetofour = () => {
    navigate("/Pagefour");
  };


  return (
    <div>
      <Navbar/>
      <div>
        <h1 className="text-7xl font-extrabold mt-[50px] ml-[20px]">Howdy,<br/>Swift Logistics</h1>
        <h5 className="text-2xl font-semibold mt-[20px] ml-[20px]">0 pending & 0 ongoing deliveries</h5>
      </div>
      <div className=" rounded-lg h-[200px] mt-[70px] ml-[20px] bg-red-600 flex flex-row">
      <GrDeliver className="bg-white rounded-full w-[120px] h-[120px] py-5 px-5 mt-[40px] ml-2"/>
      <h5 className="mr-auto font-semibold text-3xl mt-[60px] ml-4"> active riders<br/><h6 className='font-medium'>Tap to see all riders</h6></h5>
      <FaAngleRight onClick={Movetofour} className="mt-[75px] w-[50px] h-[50px] mr-0 cursor-pointer"/></div>

      <div className='mt-[50px] flex justify-between flex-row'><h1 className='ml-4 text-3xl font-semibold'>Deliveries</h1>
      <div className="flex">
      <h1 className='mr-0 text-3xl font-semibold'>Ongoing</h1>
      <FaAngleDown className='mr-0 w-[40px] h-[40px] cursor-pointer'/>
      </div>
      </div>
      <div>
      <img
          src={images} alt="delivery guy"className='mx-auto mt-[80px]'/>
      </div>
      <div className='mt-1'><h6 className='text-center text-2xl font-medium'>you have no ongoing orders</h6></div>
      <div className='mt-[50px]'><h1 className='text-center text-3xl font-medium'>All ongoing shipments by your drivers will be<br/> shown here.</h1></div>
<Footer/>
    </div>
    
  )
}

export default Home