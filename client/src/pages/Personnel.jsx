import React from 'react';
import Card from '../components/Card';

export default function Personnel() {
  return (
    <>
      <div className="bg-white min-w-12/12 h-full md:h-24 rounded-sm flex justify-between p-4 shadow-md flex-col md:flex-row  space-y-4 md:space-y-0">
        {/* sideA */}
        <div>
          <h1 className="text-2xl font-bold text-primary">PERSONNEL LIST</h1>
          <p className="text-gray-500">List of all personnels</p>
        </div>
        {/* end of sideA */}
        {/* side B */}
        <div className="flex md:space-x-2 md:items-center text-sm flex-col md:flex-row  space-y-2 md:space-y-0">
          {/* search input */}
          <div>
            <form method="GET">
              <div className="relative text-primary focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </button>
                </span>
                <input type="search" name="q" className="p-2 text-sm w-full rounded-sm border border-2 pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Find Personnel" autoComplete="off" />
              </div>
            </form>
          </div>
          {/* add personnel button */}
          <div>
            <button className="bg-primary text-white p-2 rounded-sm font-semibold w-full ">
              ADD PERSONNEL
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block ml-5 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
        {/* end of sideB */}
      </div>

      {/* card */}
      <div>
        <section className="text-gray-600 body-font">
          <div className="container py-14 mx-auto">
            <div className="flex flex-wrap -m-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>
      </div>

      {/* pagination */}
      <div className="flex justify-center space-x-10 my-10">
        <button  className="text-gray-500">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Previous Page</span>
          </div>
        </button>
        <button>
          <div className="flex">
            <span className="font-semibold">Next Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </button>
      </div>

    </>
  )
}
