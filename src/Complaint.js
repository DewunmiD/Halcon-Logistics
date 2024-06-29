import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import MobileFooter from './MobileFooter'
import images from './images/istockphoto-817101512-612x612 1(1).svg'
const Complaint = () => {

  const [EnteryourComplaint, setEnteryourComplaint] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e) => {
    if (e.key === 'Enter') {
      setEnteryourComplaint(inputValue);
      setShowInput(false);
    }
  };

  const handleClick = () => {
    setEnteryourComplaint(inputValue);
    setShowInput(false);
  };

  const handleShowInput = () => {
    setShowInput(true);
  };
  return (
    <div className='w-full !px-0 !mx-0 !overflow-hidden'>
      <Navbar/>
      <h1 className="mt-8 text-center font-bold text-3xl">Complaint</h1>
      <img
          src={images} alt='' className='mx-auto mt-[80px]'/>
      <p className='text-center font-bold text-2xl'>you have no complaint</p>
      <div className='text-center font-medium text-lg'>All complaint raised against your drivers?riders
      <br/>wiil be shown here</div>

      {showInput ? (
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleInputSubmit}
                onBlur={handleClick}
                placeholder="Enter Complaint:"
                className="mt-[200px] ml-[75px]"
              />
            ) : (
      <p className='text-2xl text-red-600 mt-24'>
      <span onClick={handleShowInput}>{EnteryourComplaint}</span>
      </p>
      )}
      <Footer/>
      <MobileFooter/>
    </div>
  )
}

export default Complaint