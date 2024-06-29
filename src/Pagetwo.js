import React, { useState } from 'react';
import images from './images/Untitled-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
const Pagetwo = () => {
  const navigate = useNavigate();

  const Movetothree = () => {
    navigate("/Home");
  };


  const [CompanyRegno, setCompanyRegno] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e) => {
    if (e.key === 'Enter') {
      setCompanyRegno(inputValue);
      setShowInput(false);
    }
  };

  const handleClick = () => {
    setCompanyRegno(inputValue);
    setShowInput(false);
  };

  const handleShowInput = () => {
    setShowInput(true);
  };
  return (
      <div className='w-full h-screen !px-0 !mx-0 !overflow-hidden'>
       <div className='flex flex-col'>
        <img className='w-[200px] h-[200px] mt-[-50px] sm:[20px] md:ml-[40px]' alt='' src={images}/>
        <p className=' text-black ml-[60px] text-4xl font-bold  mt-[-60px]'>Are you<br/>registered</p>
        <div className='flex justify-end mt-[-130px] sm:mr-[20px] md:mr-[60px] text-1xl'>
          not registered?<a href="/home" className="text-red-600 cursor-pointer hover:text-indigo-600">skip</a>
        </div>
        </div>
        
            {showInput ? (
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleInputSubmit}
                onBlur={handleClick}
                placeholder="Company's Reg.no"
                className="mt-[200px] ml-[65px]"
              />
            ) : (
              <p className='mt-[200px] ml-[75px]'>
                <span onClick={handleShowInput}>{CompanyRegno}</span>
              </p>
            )}

<div className='flex justify-center mt-[150px]'>
<button onClick={Movetothree} className=' bg-red-600 text-white font-bold text-lg rounded-full py-2 px-4 w-2/6 shadow-lg cursor-pointer hover:bg-black'>Next</button></div>

    </div>
  )
}

export default Pagetwo