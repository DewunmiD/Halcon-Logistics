import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileFooter from './MobileFooter'

const Addrider = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    // TO DO: implement email sending logic here
    alert(`Email sent to ${email}!`);
    setSent(true);
  };

  return (
    <div className='w-full !px-0 !mx-0 !overflow-hidden'>
      <Navbar/>

         <div className='text-4xl font-bold mt-4 ml-8'>Add A Rider</div>
      <h1 className='text-2xl font-medium mt-2 ml-8'>you can add more than a rider at a time</h1>
  
     <div className='text-3xl font-medium mt-16 ml-8'>Driver's email
  <input
    type="email"
    value={email}
    onChange={e => setEmail(e.target.value)}
    className='w-full border-none text-xl outline-none'
  />
  <div className="w-6/6 border-b-black border-b-2 mt-4 mr-8"></div>
</div>
      

      
    <div className='flex justify-center items-center mt-40'>
      <button onClick={handleSend} className='text-black bg-red-600 font-bold py-4 px-12 rounded-xl text-2xl hover:bg-blue-600'>Send invite</button>
    </div>
    {sent && <p className='text-xl font-medium mt-4 ml-8'>Email sent successfully!</p>}
      <Footer/>
      <MobileFooter/>
    </div>
  );
};

export default Addrider;
