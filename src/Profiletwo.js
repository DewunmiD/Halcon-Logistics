import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Profiletwo = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const Ok = () => {
    navigate("/Profile");
  };
  return (
    <div><Navbar/>
    <h2 className='text-center text-4xl font-bold mt-12'>Take a picture or select from your gallery</h2>
    
   
    <div className='flex justify-center items-center mt-24'>
    <input type="file" id="imageInput" onChange={handleImageChange} hidden />
  <div className='rounded-full bg-zinc-200 w-48 h-48 flex justify-center items-center'>
  {
            image ? (
              <img src={URL.createObjectURL(image)} alt='' className="w-full h-full" />
            ) : (
    <FaUser className='text-zinc-400 text-8xl mt-20'/>
  )
}

  </div>

</div>

    <p className='cursor-pointer text-center text-red-600 text-2xl mt-8' onClick={() => document.getElementById('imageInput').click()}>Open Camera/Gallery</p>


    <div className='flex justify-center items-center mt-40'><button onClick={Ok} className='text-black bg-zinc-400 font-bold py-4 px-12 rounded-xl text-2xl hover:bg-blue-600'>Next</button></div>
      <Footer/>
    </div>
      )
    }
    
    export default Profiletwo