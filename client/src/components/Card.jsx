import React from 'react'

export default function Card() {
  return (
    <div className="p-4 md:w-1/4 mb-8 md:mb-0 w-full">
      {/* header */}
      <div className="flex justify-between bg-white py-2 px-4 rounded-tr-2xl rounded-tl-2xl md:rounded-none">
        <p className="text-sm text-gray-400">Personnel ID : <span className="text-primary font-semibold">123456</span></p>
        <div className="-mt-1.5">
          <div className="bg-gray-600 w-1 h-1 inline-block" style={{ borderRadius: '50%' }}></div>
          <div className="bg-gray-600 w-1 h-1 inline-block ml-0.5 " style={{ borderRadius: '50%' }}></div>
          <div className="bg-gray-600 w-1 h-1 inline-block ml-0.5" style={{ borderRadius: '50%' }}></div>
        </div>
      </div>
      <hr />
      {/* content */}
      <div className="h-full bg-white  overflow-hidden flex flex-row md:flex-col rounded-br-2xl rounded-bl-2xl md:rounded-none">
        <div className="px-4 md:px-8 py-5">
          <img className="h-20 w-20 md:h-40 md:w-full" src="https://dummyimage.com/720x400" alt="blog" style={{ borderRadius: '50%' }} />
        </div>
        <div className="p-4">
          <section>
            <h2 className="text-xs title-font font-medium text-gray-800">Name</h2>
            <p className="leading-relaxed text-sm md:text-base mb-2">First Name Last Name</p>
            <h2 className="text-xs title-font font-medium text-gray-800">Telephone</h2>
            <p className="leading-relaxed text-sm md:text-base mb-2">Phone Number</p>
          </section>
          <section className="hidden md:block">
            <h2 className="text-xs title-font font-medium text-gray-800">Birthday</h2>
            <p className="leading-relaxed mb-2">DD-MM</p>
            <h2 className="text-xs title-font font-medium text-gray-800">Email</h2>
            <p className="leading-relaxed mb-2">Email Address</p>
          </section>
        </div>
      </div>
    </div>
  )
}
