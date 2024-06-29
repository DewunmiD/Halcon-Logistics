import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import MobileFooter from './MobileFooter'
import { TbCurrencyNaira } from "react-icons/tb";
import images from './images/istockphoto-817101512-612x612 1(1).svg'
const Wallet = () => {
  const [balance] = useState(1000);
 
  return (
    <div className='w-full !px-0 !mx-0 !overflow-hidden'>
      <Navbar/>
      <h1 className="mt-8 text-center font-bold text-3xl">Wallet</h1>
      <div className='bg-black text-white rounded-lg text-center mt-4 h-[200px] w-5/6 mx-auto flex flex-col'>
      
       <div className='mt-12'> 
        <h5 className='font-medium text-2xl m-[-4px]'>Balance</h5>
        {/* <h1 className="flex items-center justify-center mx-auto">
           <TbCurrencyNaira className="text-2xl font-extrabold" /> 
          <span class="text-2xl font-extrabold">0.00</span>
                 </h1> */}

<h1 className="flex items-center justify-center mx-auto">
  <TbCurrencyNaira className="text-2xl font-extrabold" /> 
  <span className="text-2xl font-extrabold">{balance.toFixed(2)}</span>
</h1>

          <h2 className='text-2xl font-medium'>Available for withdrawal</h2>
           </div>

      </div>
      <div className='bg-red-600 text-white rounded-lg grid place-items-center mt-8 h-[100px] w-5/6 mx-auto'><h1 className='text-2xl font-medium'><a  href="/Wallettwo">withdraw from wallet</a></h1></div>
      <p className='text-center mt-[20px] text-2xl'>Transaction history</p>
      <img
          src={images} alt='' className='mx-auto mt-[80px]'/>
          <div className='text-center mt-16 text-2xl font-bold'>you have no transactions yet</div>
          <div className='text-center mt-6 text-3xl font-medium'>All transactions will be listed here</div>
      
      <Footer/>
      <MobileFooter/>
    </div>
  )
}

export default Wallet