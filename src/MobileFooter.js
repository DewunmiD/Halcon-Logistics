import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";

function MobileFooter() {
  return (
    <div className='md:hidden w-full !px-0 !mx-0 !overflow-hidden'>
    <div className="bg-black text-white flex justify-center items-center gap-2 mt-[40px]">
      
      <ul className="text-left mt-4">
        <li className="mb-6 text-xl flex items-center gap-2">
          <FaPhoneAlt />: <span>+2348109883336</span>
        </li>

        <li className="mb-6 text-xl flex items-center gap-2">
          <MdEmail />: <span>halconlogistics@yahoo.com</span>
        </li>

        <li className="mb-6 text-xl flex items-center gap-2">
          <FaLocationDot />: <span>Lekki pennisula lagos state</span>
          </li>

          <h2 className="flex">
        <span>Copyright</span>
        <FaRegCopyright className="mt-[5px]" />
        <span>2024 All Rights Reserved</span>
        </h2>
      </ul>
    </div>
    </div>
  );
}

export default MobileFooter;