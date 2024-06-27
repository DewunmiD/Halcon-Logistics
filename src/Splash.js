import React from 'react';
import image from './images/Untitled-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
import images from './images/close-up-delivery-person-with-parcel.jpg';
function Splash() {
  const navigate = useNavigate();
;
// const Home = () => {
  return (
    <div className='h-screen w-full bg-no-repeat bg-cover bg-center m-0 p-0' style={{backgroundImage: `url(${images})`}}> 
    <div className="justify-center items-center">
      <img src={image} alt="Signin Banner" className="block mx-auto w-[450px] h-[450px] " />  </div>

      <p className="text-center text-4xl font-bold mt-[-150px]">Fastest Delivery In Nigeria</p> 

      
  

<button 
  type="submit" 
  className="getstarted bg-red-600 text-white font-bold text-lg rounded-full py-2 px-4 w-2/6 block mx-auto mt-8 shadow-lg shadow-black cursor-pointer hover:bg-black"
  onClick={() => navigate('/signin')}
>
  Get Started
</button>

    </div>
  );
};

export default Splash;