import React from 'react'

export default function Pagination({ next, previous, currentPage, totalPage }) {

  return (
    <div className="flex justify-center space-x-10 my-10">
      <button className={currentPage === 1 ? "text-gray-300" : ""} onClick={() => previous()}>
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold">Previous Page</span>
        </div>
      </button>
      <button className={currentPage === totalPage ? "text-gray-300" : ""} onClick={() => next()}>
        <div className="flex">
          <span className="font-semibold">Next Page</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </button>
    </div>
  )
}
