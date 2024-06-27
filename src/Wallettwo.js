import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { TbCurrencyNaira } from "react-icons/tb";
import { FaDeleteLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Wallettwo = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0); // initial amount
  const [balance, setBalance] = useState(1000); // initial balance

  const handleNumberClick = (num) => {
    setAmount((prevAmount) => prevAmount * 10 + num);
  };

  const handleContinue = () => {
    if (amount > 0 && amount <= balance) {
      const newBalance = balance - amount;
      setBalance(newBalance);
      alert(`Deducted: ${amount}, New Balance: ${newBalance}`);
      navigate("/Wallet");
    }
  };

  return (
    <div className=''>
      <Navbar/>
      <div className='w-5/6 mx-auto bg-red-600 mt-[100px] rounded-xl h-screen'>
        <h1 className='text-white flex items-center mt-4 justify-center mx-auto'>
          <TbCurrencyNaira className="text-3xl font-extrabold"/>
          <span className="text-3xl font-extrabold">{amount.toFixed(2)}</span>
        </h1>
        <div className="grid grid-cols-3 justify-content-space-between mt-10 text-white text-2xl font-bold">

          <ul className="justify-self-start ml-8 gap-y-12 cursor-pointer">
            <li className="mb-20" onClick={() => handleNumberClick(1)}>1</li>
            <li className="mb-20" onClick={() => handleNumberClick(4)}>4</li>
            <li className="mb-20" onClick={() => handleNumberClick(7)}>7</li>
          </ul>

          <ul className="justify-self-center gap-y-12 cursor-pointer">
            <li className="mb-20" onClick={() => handleNumberClick(2)}>2</li>
            <li className="mb-20" onClick={() => handleNumberClick(5)}>5</li>
            <li className="mb-20" onClick={() => handleNumberClick(8)}>8</li>
            <li className="mb-20" onClick={() => handleNumberClick(0)}>0</li>
          </ul>

          <ul className="justify-self-end mr-8 gap-y-12 cursor-pointer">
            <li className="mb-20" onClick={() => handleNumberClick(3)}>3</li>
            <li className="mb-20" onClick={() => handleNumberClick(6)}>6</li>
            <li className="mb-20" onClick={() => handleNumberClick(9)}>9</li>
            <li className="mb-20"><FaDeleteLeft /></li>
          </ul>

        </div>
        <div class="flex items-center justify-center">
          <button onClick={handleContinue} className='bg-white text-red-600 px-16 py-4 rounded-xl'>Continue</button>
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Wallettwo;




