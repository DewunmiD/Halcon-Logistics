import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import images from './images/Untitled-removebg-preview.png';
import { IoMdMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center h-20 px-4 py-2 bg-black text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img src={images} alt="Your Logo" className="h-200 w-200 ml-[-15px] md:h-200 md:w-200" />
       
      </div>
      

      <ul className="hidden md:flex md:flex-row space-x-6 mr-4 font-semibold mt-5">
        <li className="md:text-lg">
          <Link to="/home" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li className="md:text-lg">
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
        </li>
        <li className="md:text-lg">
          <Link to="/complaint" className="hover:text-gray-400">
            Complaint
          </Link>
        </li>
        <li className="md:text-lg">
          <Link to="/wallet" className="hover:text-gray-400">
            Wallet
          </Link>
        </li>
        <li className="md:text-lg">
          <Link to="/profile" className="hover:text-gray-400">
            Profile
          </Link>
        </li>
        <button
  className="px-4 py-2 bg-white text-black rounded text-1xl hover:bg-blue-700 cursor-pointer mr-0"
  onClick={() => navigate('/signin')}
>
  Signin
</button>
      </ul>

      {/* Signin button */}
      {/* <button className="hidden md: px-4 py-2 bg-black text-white rounded text-1xl hover:bg-blue-600 cursor-pointer md:mr-0">
        Sign In
      </button> */}

      {/* Menu button for mobile */}
      <button
        className="md:hidden block px-4 py-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:text-gray-400"
        onClick={toggleMenu}
      >
     
        <IoMdMenu className='text-black w-[40px] h-[40px]'/>
      </button>

      {/* Mobile menu */}
      <div
        className={`absolute top-0 left-0 h-full w-full bg-gray-800 opacity-75 transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col space-y-4 px-4 py-8 text-center text-white">
          <li>
            <Link to="/home" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/complaint" className="hover:text-gray-400">
              Complaint
            </Link>
          </li>
          <li>
            <Link to="/wallet" className="hover:text-gray-400">
              Wallet
            </Link>
          </li> <li>
            <Link to="/wallet" className="hover:text-gray-400">
             Profile
            </Link>
          </li>

          <li>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Sign In
            </button>
            <button className="block w-full py-2 text-gray-700" onClick={toggleMenu}>
              <MdCancel/>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
