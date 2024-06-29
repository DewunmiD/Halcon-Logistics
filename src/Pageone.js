import React, { useState } from 'react';
import images from './images/Untitled-removebg-preview.png';
import { IoMdPhotos } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Pageone = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const Upload = () => {
    navigate("/Pagetwo");
  };

  const [businessName, setBusinessName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e) => {
    if (e.key === 'Enter') {
      setBusinessName(inputValue);
      setShowInput(false);
    }
  };

  const handleClick = () => {
    setBusinessName(inputValue);
    setShowInput(false);
  };

  const handleShowInput = () => {
    setShowInput(true);
  };


  return (
    <div className='w-full h-full !px-0 !mx-0 !overflow-hidden'>
      <div className='flex flex-col'>
        <img className='image-header w-[200px] h-[200px] mt-[-40px] sm:[20px] md:ml-[50px]' alt='' src={images} />
        <p className='text-black text-2xl font-bold ml-[65px] mt-[-60px]'>Tell us about<br />your business</p>
      </div>

      <div>
        <input type="file" id="imageInput" onChange={handleImageChange} hidden />
        <div className="flex justify-center items-center mt-[60px] h-[200px] w-[200px] border-black rounded-full mx-auto border-2 overflow-hidden">
          {
            image ? (
              <img src={URL.createObjectURL(image)} alt='' className="w-full h-full" />
            ) : (
              <IoMdPhotos className='w-[70px] h-[70px]' />
            )
          }
        </div>

        <p className='text-red-600 text-center mt-8 sm:text-md md:text-2xl cursor-pointer' onClick={() => document.getElementById('imageInput').click()}>Click Here To Upload business Logo</p>

      

        {showInput ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleInputSubmit}
          onBlur={handleClick}
          placeholder="Enter your business name"
          className="mt-28 ml-[65px]"
        />
      ) : (
        <p className='font-bold mt-[50px] ml-[75px]'>
          <span onClick={handleShowInput}>{businessName}</span>
        </p>
      )}

          <div className="flex justify-center mt-8">
          <button
            onClick={Upload}
            className="bg-red-600 text-white font-bold text-lg rounded-full py-2 px-4 w-full md:w-1/2 xl:w-1/3 shadow-lg hover:bg-black"
          >
            Next
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Pageone;


