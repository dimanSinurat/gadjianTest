import React from 'react';
import logo from '../_Assets/logo.png';


export default function Navbar() {
  return (
    <div className="bg-white text-gray-800 flex justify-between px-5 md:px-10 py-2">
      <div className="flex">
        <div className="md:hidden">
          <button className="mobile-menu-button p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div>
          <img src={logo} alt="" className="w-28 h-12" />
        </div>
      </div>
      <div className="flex">
        <div>
          <p className="p-4 text-primary hidden md:block">
            <span className="text-gray-800">Hallo, </span>
            <span className="font-semibold"> Gadjian User</span>
          </p>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU" style={{ borderRadius: '50%' }} className="w-10 h-10 mt-1.5" alt="" />
      </div>
    </div>
  )
}
