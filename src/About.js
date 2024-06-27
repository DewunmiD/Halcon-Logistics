import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import images from './images/fineboy.jpg';
const About = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <h1 className="mt-24 text-center font-bold text-6xl">The futuristic way
        to send & earn</h1>
        <p className='text-center font-medium text-lg mt-6'>Halcon is an on-demand last-mile logistics e-hailing platform in Africa that connects individuals<br/>and businesses with nearby thoroughly vetted delivery agents.</p>
      </div>
      <img
          src={images}
          alt="Signin Banner"
          className="w-full h-[900px] mt-48"
          style={{}}/>
          <div>
            <h1 className='text-center text-5xl font-bold mt-24'>OUR MISSION.</h1>
            <p className='text-center text-2xl font-medium mt-6'>Our Mission at halcon is to simplify last mile logistics hassles in Africa's e-commerce by providing<br/>solutions using amplified technology. We are committed to being at the forefront giving users and<br/>delivery agents the best and fastest experience in deliveries at a go. The application of our core skills<br/>in the business will bring about stability in the e-commerce and logistics marketplace. </p>
          </div>

          <div>
            <h1 className='text-center text-5xl font-bold mt-28'>OUR VISION.</h1>
            <p className='text-center text-2xl font-medium mt-6'>At halcon we aim to become the users everyday most preferred Logitech platform in Africa. <br/>We also aim to act as an indispensable partner to our users by helping them build and maximize sustainable competitive <br/>advantages via our platform. In addition to our well built and crafted logistics solutions, our users and clients <br/>can be rest assured that every operation will be driven by integrity, transparency and commitment.<br/> Our Motto "...Delivering Happiness" goes to show our dedication in ensuring we take logistics<br/> mobility to a top notch level utilizing innovations in technology.  </p>
          </div>
      <Footer/>
    </div>
  )
    }
    
    export default About