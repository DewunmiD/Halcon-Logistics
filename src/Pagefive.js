import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileFooter from './MobileFooter'
import images from './images/istockphoto-817101512-612x612 1(1).svg'
// import { MdHorizontalRule } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const Pagefive = () => {
  const navigate = useNavigate();

  const Movetoaddrider = () => {
    navigate("/Addrider");
  };


  const Three = () => {
    navigate("/Pagefour");
  };


  const Four = () => {
    navigate("/Pagesix");
  };


  return (
    <div className='w-full !px-0 !mx-0 !overflow-hidden'><Navbar/>
    <div className="flex justify-between mt-4">
      
      <h1 className='ml-[20px] font-bold text-3xl' onClick={Three}>All</h1>

    <h1 className='font-bold text-3xl'>Active
      <p>
        <div className="w-6/6 border-b-black border-b-2"></div>
        </p>
        </h1>

    <h1 className='font-bold text-3xl mr-[20px]' onClick={Four}>Offline
    </h1>

    </div>
    <img
          src={images} alt='' className='mx-auto mt-[80px]'/>

<p className='text-center text-2xl '>you have no active rider right now</p>



 
    <button  onClick={Movetoaddrider} className=" mr-32 float-right text-white bg-red-600 text-extrabold rounded-full mt-[100px] shadow-lg shadow-black py-2 px-4 text-lg cursor-pointer hover:bg-black">+</button>



    <Footer/>
    <MobileFooter/>
    </div>

  )
}

export default Pagefive