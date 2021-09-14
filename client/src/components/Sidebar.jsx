import React from 'react';
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <>
      {/* sidebar - dekstop view */}
      <div className="sidebar bg-white text-blue-100 w-64 py-5 absolute inset-y-0 left-0 transform  -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out ">
        <nav className="mt-5">
          <Link to="/home" className="block py-2 pl-10 text-black  hover:bg-primary hover:text-white">
            <div className="flex space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <p className="text-md">Dashboard</p>
            </div>
          </Link>
          <Link to="/" className="block py-2 pl-10 text-black text-primary font-semibold hover:bg-primary hover:text-white">
            <div className="flex space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p>Personnel List</p>
            </div>
          </Link>
          <Link to="/attendance" className="block py-2 pl-10 text-black hover:bg-primary hover:text-white">
            <div className="flex space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>Daily Attendance</p>
            </div>
          </Link>
        </nav>
      </div>
    </>
  )
}
