import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
const Walletthree = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const handleUpdateCard = () => {
    navigate('/confirmation');
  };
  return (
    <div>
<Navbar />
     <div className='text-4xl font-bold mt-12 ml-8'><h1>Update Card Info</h1></div>

     <div className='text-3xl font-medium mt-12 ml-8'>Card Number
    <div className="w-6/6 border-b-black border-b-2 mt-8 mr-8">
    <input
            type="text"
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value)}
          />
    </div>
     </div>



<div class="flex justify-around mt-12 gap-x-16">
  <div class="w-1/2 text-3xl font-medium pl-8">
    <div>Expiry date</div>
    <div class="w-full border-b-black border-b-2 mt-8">
    <input
              type="text"
              value={expiryDate}
              onChange={e => setExpiryDate(e.target.value)}
            />
    </div>
  </div>
  <div class="w-1/2 text-3xl font-medium pr-8">
    <div>Security code</div>
    <div class="w-full border-b-black border-b-2 mt-8">
    <input
              type="text"
              value={securityCode}
              onChange={e => setSecurityCode(e.target.value)}
            />
    </div>
  </div>
</div>


     <p className='text-2xl ml-12 mt-12'>
      you may be charged for confirmation. this is 
     immediately refunded</p>

     <div className='flex justify-center items-center mt-40'><button onClick={handleUpdateCard} className='text-white bg-red-600 font-bold py-4 px-6 rounded text-2xl hover:bg-blue-600'>Update</button></div>


<Footer />
    </div>
      )
    }
    
    export default Walletthree